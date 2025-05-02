/**
 * Environment configuration for the application
 * To use real values, create a .env.local file with these variables
 */
import getConfig from 'next/config';

// Only import server-side runtime config
const { serverRuntimeConfig } = getConfig() || { 
  serverRuntimeConfig: {
    ELEVENLABS_API_KEY: '',
    // Essential Google Sheets variables
    GOOGLE_SHEET_ID: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL: '',
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: '',
    // Optional Google Sheets variables
    GOOGLE_SERVICE_ACCOUNT_PROJECT_ID: '',
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_ID: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL: '',
  }
};

// Log config availability but not actual values for security
console.log('Environment configuration loaded:', {
  ELEVENLABS_API_KEY: !!serverRuntimeConfig.ELEVENLABS_API_KEY,
  // Essential Google Sheets variables
  GOOGLE_SHEET_ID: !!serverRuntimeConfig.GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL: !!serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: !!serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
});

// ElevenLabs API Key
export const ELEVENLABS_API_KEY = serverRuntimeConfig.ELEVENLABS_API_KEY || '';

// Google Sheets - Essential Variable
export const GOOGLE_SHEET_ID = serverRuntimeConfig.GOOGLE_SHEET_ID || '';

// Function to properly format the private key for all environments
const formatPrivateKey = (key: string) => {
  if (!key) {
    console.warn('Google Sheets private key is empty');
    return '';
  }
  
  try {
    // Handle possible JSON stringification in environment variables
    if (key.startsWith('"') && key.endsWith('"')) {
      key = JSON.parse(key);
    }
    
    // Remove any extra quotes from the beginning and end
    key = key.replace(/^['"]|['"]$/g, '');
    
    // For Vercel and other platforms that don't preserve newlines
    key = key.replace(/\\n/g, '\n');
    
    // Ensure the key is properly formatted with begin/end markers
    if (!key.includes('-----BEGIN PRIVATE KEY-----')) {
      console.warn('Private key appears to be missing BEGIN marker');
      // Try to fix if it's just missing markers but has the content
      if (!key.startsWith('-----BEGIN')) {
        key = '-----BEGIN PRIVATE KEY-----\n' + key;
      }
    }
    
    if (!key.includes('-----END PRIVATE KEY-----')) {
      console.warn('Private key appears to be missing END marker');
      // Try to fix if it's just missing markers but has the content
      if (!key.endsWith('-----END')) {
        key = key + '\n-----END PRIVATE KEY-----';
      }
    }
    
    return key;
  } catch (error) {
    console.error('Error formatting private key:', error);
    return key; // Return the original in case of errors
  }
};

// Google Service Account Credentials - Simplified with only essential fields
export const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS = {
  type: "service_account",
  // Essential for auth
  private_key: formatPrivateKey(serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY),
  client_email: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL || '',
  // Optional fields - included but not strictly necessary
  project_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID || '',
  private_key_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID || '',
  client_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID || '',
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL || '',
  universe_domain: "googleapis.com"
}; 