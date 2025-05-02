import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { 
  ELEVENLABS_API_KEY, 
  GOOGLE_SHEET_ID, 
  GOOGLE_SERVICE_ACCOUNT_CREDENTIALS 
} from '@/config/env';

// Agent mapping for agent names
const AGENT_NAMES: Record<string, string> = {
  "4QrU2MrUVVzDyockHplA": "Customer Support Agent",
  "P6GinvJTbVAQ7zqColtW": "Receptionist",
  "ovEsO8yQKcPMNgeb8iQB": "Due Followup Agent"
};

// Types
type RequestBody = {
  name: string;
  email: string;
  phone: string;
  agentId: string;
  agentPhoneNumberId: string;
};

// Initialize Google Sheets
const initializeGoogleSheet = async () => {
  try {
    console.log('Starting Google Sheets initialization with credentials:', {
      email: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.client_email,
      project_id: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.project_id,
      private_key_length: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key?.length || 0,
      sheet_id: GOOGLE_SHEET_ID
    });
    
    // Check if the private key is properly formatted
    if (!GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key) {
      console.error('Private key is missing from credentials');
      throw new Error('Google Sheets private key is missing');
    }
    
    if (!GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key.includes('BEGIN PRIVATE KEY')) {
      console.error('Private key is not properly formatted');
      throw new Error('Google Sheets private key is malformed');
    }
    
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.client_email,
      key: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    console.log('JWT created, loading Google Sheet:', GOOGLE_SHEET_ID);
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    
    console.log('Loading Google Sheet info...');
    await doc.loadInfo();
    
    console.log('Google Sheet loaded successfully:', doc.title);
    return doc;
  } catch (error) {
    console.error('Failed to initialize Google Sheet:', error);
    throw new Error(`Failed to connect to Google Sheets: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Save trial call data to Google Sheets
const saveToGoogleSheet = async (data: RequestBody, callSid: string) => {
  try {
    console.log('Initializing Google Sheet connection...');
    const doc = await initializeGoogleSheet();
    console.log('Google Sheet connected successfully.');
    
    const sheet = doc.sheetsByIndex[0]; // Use the first sheet
    
    if (!sheet) {
      console.error('No sheet found at index 0');
      throw new Error('Sheet not found');
    }
    
    // Debug: Get sheet headers and log them
    try {
      await sheet.loadHeaderRow();
      console.log('Sheet headers:', sheet.headerValues);
    } catch (_) {
      console.log('No headers found, sheet might be empty. Creating headers...');
      // If no headers, create them
      try {
        await sheet.setHeaderRow([
          'Name', 'Email', 'Phone', 'Agent Type', 'AgentId', 
          'AgentPhoneNumberId', 'CallSid', 'Timestamp'
        ]);
        console.log('Headers created successfully');
      } catch (headerError) {
        console.error('Failed to create headers:', headerError);
      }
    }
    
    // Get agent name from the mapping
    const agentName = AGENT_NAMES[data.agentId] || 'Unknown Agent Type';
    console.log('Agent ID:', data.agentId, 'Agent Name:', agentName);
    
    // Add a new row with the trial call data
    const rowData = {
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      "Agent Type": agentName,
      AgentId: data.agentId,
      AgentPhoneNumberId: data.agentPhoneNumberId,
      CallSid: callSid,
      Timestamp: new Date().toISOString(),
    };
    
    console.log('Attempting to add row with data:', JSON.stringify(rowData));
    await sheet.addRow(rowData);
    
    console.log('Row added successfully');
    return true;
  } catch (error) {
    console.error('Failed to save to Google Sheet:', error);
    // Don't throw an error, just return false to allow the call to continue even if sheet fails
    return false;
  }
};

// Make a call using ElevenLabs API
const makeElevenLabsCall = async (data: RequestBody) => {
  try {
    const response = await fetch('https://api.elevenlabs.io/v1/convai/twilio/outbound_call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        agent_id: data.agentId,
        agent_phone_number_id: data.agentPhoneNumberId,
        to_number: data.phone,
        conversation_initiation_client_data: {
          user_name: data.name,
          user_email: data.email,
        },
      }),
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to initiate call');
    }
    
    return responseData;
  } catch (error) {
    console.error('Error calling ElevenLabs API:', error);
    throw error;
  }
};

// Main handler function
export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const data: RequestBody = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.agentId || !data.agentPhoneNumberId) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Format phone number if needed to ensure it's in international format
    let formattedPhone = data.phone;
    if (!formattedPhone.startsWith('+')) {
      // If no country code, assume US (+1)
      formattedPhone = '+1' + formattedPhone.replace(/\D/g, '');
    }
    data.phone = formattedPhone;
    
    // Initiate call via ElevenLabs API
    const callResult = await makeElevenLabsCall(data);
    
    // Save data to Google Sheets, but don't let it block call success
    try {
      await saveToGoogleSheet(data, callResult.callSid || 'unknown');
    } catch (sheetError) {
      console.error('Google Sheet error, but continuing with call:', sheetError);
      // Don't throw error here, we want the call to succeed even if the sheet fails
    }
    
    // Return success response for the call
    return NextResponse.json({
      success: true,
      message: 'Call initiated successfully',
      callSid: callResult.callSid,
    });
  } catch (error: any) {
    console.error('Error in trial-call API:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Failed to initiate call. Please try again.' 
      },
      { status: 500 }
    );
  }
} 