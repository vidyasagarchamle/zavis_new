# ZAVIS Deployment Instructions

## Vercel Environment Variables

When deploying to Vercel, add the following environment variables:

```
# ElevenLabs API Key 
ELEVENLABS_API_KEY=sk_038e93e766f37c6e0eddca22f90b81a606180263bcd17b26

# Google Sheets Configuration
GOOGLE_SHEET_ID=1asZoCnjPy4QhN9Femyc3058Kch1CoBCQQmiSvfa478w

# Google Service Account Credentials
GOOGLE_SERVICE_ACCOUNT_PROJECT_ID=pelagic-tracker-447309-r9
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID=7973d7cb4c8ba65bc416839b122066a70a183685
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=zavis-369@pelagic-tracker-447309-r9.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_CLIENT_ID=110954331047658070513
GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/zavis-369%40pelagic-tracker-447309-r9.iam.gserviceaccount.com
```

For the private key, add it exactly as shown below, including all line breaks and quotes:

```
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfu8hKyih4zgAq
CQ7ZjIrJL0lyanPRCE8ZoBGajqRael3HVxuL/pT/n81uP1z35GZJ4uGUZqMshaMR
fVg160/c4WtT7fCLfbDUWmniL1bKnrDGV0YwKzQqeh8OS+gX9I3xoAdkHsZ4zZGl
kqf6wNiu3XyGhCGVhM8yiV7PqS5dS5Y8oiGvPKbKz2Hv1nUAjevbhXK0vcuL/wqx
njqgz5900CCd/2AKsVSg6IePOCn2UtPklfbtjQbktGUtjj83PAfukb7DA0j6VG77
BDz+Kp8pwBRuh3/vZbpLfdvxIw2dJsO0y67MWnZM3LiM8m0U4opEMN60UB6Vm9pF
oA+FFDQdAgMBAAECggEAHZMBBIflcmiBs0a2DyVsVM+Cg8Kd6ufk7VOrrrgWSgI5
9rx0Bzl9kM6flHf62JLbNXbiWT2fnJCpnoVcna8RvE2oN4Poc4s0AD01OYGWSjGT
fUWPYz+8itjNgzIeqMDIvyHn/GuOR7OX8dXzcAPgmo+7jJROO4a5bhvtB/nE8dTP
4U9JKZTzTDmcYOvdliwTcWrYbprGwWkg6N4IdnHnqdcJOL33iquMppKts1mxCp+k
ESey+QNe3ZOaVTNX/9r3xkImu3i1i3N8r9Ck2JLC7jhbMRhOrp5ayul6wKFI766n
e4DKQNeJUX+28tNl61cewo7l0luQCjA+8/PQPNa0wQKBgQDVTeEPgfvGOTQ+wMz2
6zUwcJuwni+LIu30fEesGVT9x4bYpp/SNMYs6V53w6L8eBrsh4vjnbGGlvGcQ0Im
xSavkBsb7xpTlJFZiG35DUmtLfAGWwveM3wB/UiQB2cFVdlkxxpFECvV5YnfffAq
wgqjNS0F8xK9ho6mY3V7BmFaaQKBgQC/tNZeqKw/BQifOivpzsK8OuN5ZZrBRX+X
CAAR9UOQbKDFq9xHJQ3ld6tj7rPC28BZcXeHH57pOVQQ13FUK00X3lE63bYMpNKR
DYr8OaHKAPnBq/IfE8jHFuJY6Cwnpsybmi6yUa9nYCu5Jb6wOi3lFQ5jNsRlc87w
tD3RM1FNlQKBgH/kB/MCXnEFT1vowXuyntuCSPbmgV8M/FtAQMDhF2JpxWIU1XJ1
jfTTn35zYD+7y3jR9H/uxsgJrKeidAFG5+EPqBFhlQlT5Kon8LgIzYn2JxnIcR8z
A0E2GdGxfoVmacfQ0OFjxsSisb28hsk8OqCMe4g7q5rTGKiOrZurwacxAoGAcL9a
lLF/HFFJkNwVl50SysGXp34qViEZuSnrYKRu6DH7HEbHdtBELAEFu/BXqPK1XeVt
9vqR63jcCEutS2NsI+2MuKJMv4LwlH7yjwUWMkgAm/cUn1JzcyPyW3exAGEJVTqI
3DdOge39yRZ54AtXkrOfkppTR5ekzcwzzyXvW0ECgYBUVKbzqInXVH5pWdGf/Ui3
OKJMF/QjXvHOV+gsGqHiLmCWOuuPX/CBw3bcj1sYA2ecH+txkJW+bH6HVmdIj8jE
TvHmKI1luMiThABcpzahdbM1D7TV8NH30HCQ9jL5gd+GgXkFrz8T2dlm6+pgosWZ
9Or7WNafGQTY/8a90bge3Q==
-----END PRIVATE KEY-----
"
```

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
