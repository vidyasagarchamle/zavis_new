/**
 * Test Script for Trial Call API
 * 
 * How to use:
 * 1. Make sure your .env.local file is set up with the proper API key
 * 2. Run your Next.js server with 'npm run dev'
 * 3. Run this curl command from your terminal to test the API
 */

/*
curl -X POST http://localhost:3000/api/trial-call \
-H "Content-Type: application/json" \
-d '{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1234567890",
  "agentId": "4QrU2MrUVVzDyockHplA",
  "agentPhoneNumberId": "6KjGf2JppywZ6xmEwoIp"
}'
*/

/**
 * Available Agent IDs:
 * 1. Customer Support Agent: 4QrU2MrUVVzDyockHplA
 * 2. Receptionist: P6GinvJTbVAQ7zqColtW
 * 3. Due Followup Agent: ovEsO8yQKcPMNgeb8iQB
 * 
 * Phone Number ID: 6KjGf2JppywZ6xmEwoIp
 */

// Example using fetch in case you want to test from Node.js
/*
async function testTrialCall() {
  try {
    const response = await fetch('http://localhost:3000/api/trial-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "+1234567890",
        agentId: "4QrU2MrUVVzDyockHplA",
        agentPhoneNumberId: "6KjGf2JppywZ6xmEwoIp"
      }),
    });
    
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Uncomment to run the test
// testTrialCall();
*/ 