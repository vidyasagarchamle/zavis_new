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
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.client_email,
      key: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Failed to initialize Google Sheet:', error);
    throw new Error('Failed to connect to Google Sheets');
  }
};

// Save trial call data to Google Sheets
const saveToGoogleSheet = async (data: RequestBody, callSid: string) => {
  try {
    const doc = await initializeGoogleSheet();
    const sheet = doc.sheetsByIndex[0]; // Use the first sheet
    
    if (!sheet) {
      throw new Error('Sheet not found');
    }
    
    // Debug: Get sheet headers and log them
    try {
      await sheet.loadHeaderRow();
      console.log('Sheet headers:', sheet.headerValues);
    } catch (headerError) {
      console.log('No headers found, sheet might be empty');
    }
    
    // Get agent name from the mapping
    const agentName = AGENT_NAMES[data.agentId] || 'Unknown Agent Type';
    console.log('Agent ID:', data.agentId, 'Agent Name:', agentName);
    
    // Add a new row with the trial call data - try different column name variations
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      "Agent Type": agentName, // Try with space
      AgentType: agentName,    // Try camelCase
      "agent type": agentName, // Try lowercase with space
      agent_type: agentName,   // Try snake_case
      "Agent": agentName,      // Try just Agent
      AgentId: data.agentId,
      AgentPhoneNumberId: data.agentPhoneNumberId,
      CallSid: callSid,
      Timestamp: new Date().toISOString(),
    });
    
    console.log('Row added successfully');
    return true;
  } catch (error) {
    console.error('Failed to save to Google Sheet:', error);
    throw new Error('Failed to save user data');
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
    
    // Save data to Google Sheets
    await saveToGoogleSheet(data, callResult.callSid || 'unknown');
    
    // Return success response
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