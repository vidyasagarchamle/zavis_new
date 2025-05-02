/**
 * Environment configuration for the application
 * To use real values, create a .env.local file with these variables
 */
import getConfig from 'next/config';

// Only import server-side runtime config
const { serverRuntimeConfig } = getConfig() || { 
  serverRuntimeConfig: {
    ELEVENLABS_API_KEY: '',
    GOOGLE_SHEET_ID: '',
    GOOGLE_SERVICE_ACCOUNT_PROJECT_ID: '',
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID: '',
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_ID: '',
    GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL: '',
  }
};

// ElevenLabs API Key
export const ELEVENLABS_API_KEY = serverRuntimeConfig.ELEVENLABS_API_KEY || '';

// Google Sheets
export const GOOGLE_SHEET_ID = serverRuntimeConfig.GOOGLE_SHEET_ID || '';

// Function to properly format the private key
const formatPrivateKey = (key: string) => {
  if (!key) return '';
  // Remove any extra quotes from the beginning and end
  key = key.replace(/^['"]|['"]$/g, '');
  // Replace literal \n with actual newlines
  return key.replace(/\\n/g, '\n');
};

// Google Service Account Credentials
// In production, these should be stored as secured environment variables 
export const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS = {
  type: "service_account",
  project_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID || '',
  private_key_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID || '',
  private_key: formatPrivateKey(serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY),
  client_email: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL || '',
  client_id: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID || '',
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: serverRuntimeConfig.GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL || '',
  universe_domain: "googleapis.com"
}; 