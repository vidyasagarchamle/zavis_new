# ZAVIS Deployment Instructions
*Last Updated: May 2, 2024*

## Vercel Environment Variables

When deploying to Vercel, add the following environment variables:

### Required Variables
```
# ElevenLabs API Key 
ELEVENLABS_API_KEY=your_api_key_here

# Google Sheets - Essential Variables
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=your_service_account_email@example.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Content Here\n-----END PRIVATE KEY-----"
```

### Optional Variables
These Google Service Account variables are not strictly necessary for the integration to work, but can be included for completeness:
```
# Google Service Account - Optional Details
GOOGLE_SERVICE_ACCOUNT_PROJECT_ID=your_project_id
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID=your_private_key_id
GOOGLE_SERVICE_ACCOUNT_CLIENT_ID=your_client_id
GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-service-account
```

## Important Notes for Google Sheets Integration

1. **Private Key Format**: The private key must include the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers and preserve newlines. In Vercel, you can copy and paste the key directly with newlines intact. Remember to **include double quotes around the entire key** in environment variables.

2. **Google Sheet Permissions**: Make sure your Google Service Account has Editor access to the Google Sheet. This is set in Google Drive sharing settings.

3. **Testing the Integration**: After deploying, you can test the Google Sheets connection by visiting:
   ```
   https://your-domain.vercel.app/api/test-sheets?key=zavis123
   ```
   This will verify your connection and add a test row to your sheet.

## Troubleshooting

If you're experiencing issues with Google Sheets integration:

1. Check Vercel logs for detailed error messages
2. Verify the private key format is correct with all the newlines preserved
3. Ensure the Google Sheet ID is correct
4. Make sure the service account email is correct and has access to the sheet

## Agent IDs
These are already defined in the codebase, so you don't need to add them as environment variables:

- Customer Support Agent: 4QrU2MrUVVzDyockHplA
- Receptionist: P6GinvJTbVAQ7zqColtW
- Due Followup Agent: ovEsO8yQKcPMNgeb8iQB
- Phone Number ID: 6KjGf2JppywZ6xmEwoIp

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. Add all environment variables listed above
3. Deploy the project
4. Verify functionality of the live demo section
