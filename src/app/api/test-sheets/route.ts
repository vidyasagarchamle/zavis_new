import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { 
  GOOGLE_SHEET_ID, 
  GOOGLE_SERVICE_ACCOUNT_CREDENTIALS 
} from '@/config/env';

// This is an admin-only endpoint for testing Google Sheets connection
export async function GET(req: NextRequest) {
  // Create a secret key in the query to protect this endpoint
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key');
  
  // Use a simple key for protection - in a real app, use a more secure approach
  if (key !== 'zavis123') {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  try {
    // Log environment details
    const credentialInfo = {
      sheet_id: GOOGLE_SHEET_ID,
      project_id: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.project_id,
      private_key_id: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key_id,
      private_key_length: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key?.length || 0,
      client_email: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.client_email,
      private_key_starts_with: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key?.substring(0, 20) + '...' || 'missing',
      has_begin_key: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key?.includes('BEGIN PRIVATE KEY') || false,
      has_end_key: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key?.includes('END PRIVATE KEY') || false,
    };
    
    console.log('Testing with credentials:', credentialInfo);
    
    // Initialize the JWT auth client
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.client_email,
      key: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Initialize the sheet
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    // Get available sheets
    const sheets = doc.sheetsByIndex.map(sheet => ({
      title: sheet.title,
      index: sheet.index,
      rowCount: sheet.rowCount,
      columnCount: sheet.columnCount,
    }));
    
    // Get headers from the first sheet if available
    let headers: string[] = [];
    if (doc.sheetsByIndex.length > 0) {
      const sheet = doc.sheetsByIndex[0];
      try {
        await sheet.loadHeaderRow();
        headers = sheet.headerValues || [];
      } catch (error) {
        console.log('No headers found in first sheet');
      }
      
      // Add a test row to verify write access
      try {
        const newRow = await sheet.addRow({
          Name: 'Test User',
          Email: 'test@example.com',
          Phone: '+1234567890',
          Timestamp: new Date().toISOString(),
          Test: 'API Route Test'
        });
        console.log('Test row added successfully');
      } catch (error) {
        console.error('Error adding test row:', error);
        throw new Error(`Could not add row: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Google Sheets connection successful',
      documentTitle: doc.title,
      sheets,
      headers,
      credentialInfo
    });
    
  } catch (error) {
    console.error('Google Sheets test error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: `Google Sheets connection failed: ${error instanceof Error ? error.message : String(error)}`,
        error: String(error)
      },
      { status: 500 }
    );
  }
} 