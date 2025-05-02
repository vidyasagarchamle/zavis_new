/**
 * Test script to verify Google Sheets connectivity
 * Run with: node scripts/test-sheets.js
 */
require('dotenv').config({ path: '.env.local' }); // Load environment variables

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

// Function to format the private key properly
const formatPrivateKey = (key) => {
  if (!key) {
    console.warn('Private key is empty!');
    return '';
  }
  
  // Remove any extra quotes from the beginning and end
  key = key.replace(/^['"]|['"]$/g, '');
  // Replace literal \n with actual newlines
  return key.replace(/\\n/g, '\n');
};

async function testGoogleSheetsConnection() {
  try {
    console.log('Testing Google Sheets connectivity...');
    
    // Check environment variables
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    
    console.log('Environment variables loaded:', {
      GOOGLE_SHEET_ID: !!sheetId,
      GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL: !!clientEmail,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: !!privateKey,
      privateKeyLength: privateKey?.length || 0
    });
    
    if (!sheetId || !clientEmail || !privateKey) {
      throw new Error('Missing required environment variables');
    }
    
    // Format the private key
    const formattedKey = formatPrivateKey(privateKey);
    console.log('Private key formatted, length:', formattedKey.length);
    console.log('Private key starts with:', formattedKey.substring(0, 40) + '...');
    
    // Create JWT auth client
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: formattedKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    console.log('JWT auth client created');
    
    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    console.log('Google Sheet document initialized');
    
    // Load the document properties
    console.log('Loading document info...');
    await doc.loadInfo();
    
    console.log('✅ Successfully connected to Google Sheet:', doc.title);
    console.log('Available sheets:');
    
    // List available sheets
    doc.sheetsByIndex.forEach((sheet, index) => {
      console.log(`  ${index + 1}. ${sheet.title} (${sheet.rowCount} rows)`);
    });
    
    // Try to access the first sheet
    if (doc.sheetsByIndex.length > 0) {
      const sheet = doc.sheetsByIndex[0];
      console.log('\nAccessing first sheet:', sheet.title);
      
      // Try to load headers
      try {
        await sheet.loadHeaderRow();
        console.log('Headers:', sheet.headerValues);
      } catch (error) {
        console.warn('Could not load headers, sheet might be empty:', error.message);
        
        // Try to set headers if empty
        console.log('Attempting to set headers...');
        await sheet.setHeaderRow(['Name', 'Email', 'Phone', 'Timestamp', 'Test']);
        console.log('Headers set successfully');
      }
      
      // Try to add a test row
      console.log('Adding test row...');
      await sheet.addRow({
        Name: 'Test User',
        Email: 'test@example.com',
        Phone: '+1234567890',
        Timestamp: new Date().toISOString(),
        Test: 'Testing from script'
      });
      
      console.log('✅ Test row added successfully!');
    }
    
    console.log('\n✅ ALL TESTS PASSED - Google Sheets integration is working correctly!');
    
  } catch (error) {
    console.error('❌ ERROR testing Google Sheets connection:', error);
    console.error('Error details:', error.message);
    if (error.response) {
      console.error('API response error:', error.response.data);
    }
  }
}

// Run the test
testGoogleSheetsConnection(); 