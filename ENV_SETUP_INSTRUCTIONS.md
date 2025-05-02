# Environment Variable Setup Instructions

Create a `.env.local` file in the root of your project with the following variables:

```
# ElevenLabs API Key 
ELEVENLABS_API_KEY=sk_038e93e766f37c6e0eddca22f90b81a606180263bcd17b26

# Google Sheets Configuration - Add your Google Sheet ID below
GOOGLE_SHEET_ID=your_google_sheet_id_here

# Google Service Account Credentials - Add your credentials below
GOOGLE_SERVICE_ACCOUNT_PROJECT_ID=your_project_id_here
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID=your_private_key_id_here
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_private_key_content_here\n-----END PRIVATE KEY-----\n"
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=your_client_email_here
GOOGLE_SERVICE_ACCOUNT_CLIENT_ID=your_client_id_here
GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL=your_cert_url_here
```

## Available Agent IDs:
1. Customer Support Agent: 4QrU2MrUVVzDyockHplA
2. Receptionist: P6GinvJTbVAQ7zqColtW
3. Due Followup Agent: ovEsO8yQKcPMNgeb8iQB

## Phone Number ID:
6KjGf2JppywZ6xmEwoIp

Important notes:
1. The `.env.local` file should never be committed to version control
2. Make sure you restart the Next.js development server after adding this file
3. For the private key, ensure you properly escape newlines with `\n` 