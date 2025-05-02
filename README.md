# ZAVIS - AI Voice Agent Platform

A modern, high-conversion SaaS landing page for ZAVIS, an AI Voice Agent platform that automates customer calls for onboarding, support, and verification.

## Deployment Status

Last deployed: May 2, 2024
Deployed with: Vercel

## 🚀 Features

- Modern, minimal design with black & white theme
- Fully responsive layout
- Smooth animations and transitions
- Built with Next.js 14 and Tailwind CSS
- Optimized for performance and SEO
- Live Demo feature that allows visitors to experience AI agents firsthand

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Space Grotesk, Outfit
- **APIs:** ElevenLabs Voice API
- **Data Storage:** Google Sheets

## 🏃‍♂️ Running the Project

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zavis.git
cd zavis
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
# ElevenLabs API
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here

# Google Sheets
GOOGLE_SHEET_ID=your_google_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=your_private_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── trial-call/
│   │       └── route.ts    # API endpoint for trial calls
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage component
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Industries.tsx
│   ├── UseCases.tsx
│   ├── LiveDemo.tsx        # Live demo interactive component
│   ├── Deployment.tsx
│   ├── WhyZavis.tsx
│   ├── Team.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── config/
│   └── env.ts              # Environment configuration
```

## 📞 Live Demo Feature

The Live Demo feature allows website visitors to experience ZAVIS AI voice agents firsthand by:

1. Selecting from multiple AI agent types with different specializations
2. Providing their name, email, and phone number
3. Receiving an immediate call from the selected agent for a personalized demo

The interactive demo section includes:
- Visual selection of agent types with descriptions
- Step-by-step guidance for users
- Real-time form validation
- Engaging animations and visual effects
- Responsive design for all device sizes

### Configuration

To set up the Live Demo feature, you need:

1. An ElevenLabs account with API access
2. Agent IDs and phone number IDs from your ElevenLabs account
3. A Google Sheet to store user information
4. Google Service Account credentials with access to the sheet

Update the agent information in `src/components/LiveDemo.tsx` with your actual agent IDs and phone number IDs.

## 🎨 Design System

- **Colors:**
  - Text: #1A1A1A
  - Background: #FFFFFF
  - Accent: #000000
  - Muted: #666666
  - Border: #E5E5E5

- **Typography:**
  - Headings: Space Grotesk
  - Body: Outfit

## 📄 License

MIT License - feel free to use this code for your own projects.

## 👥 Team

- Hidayath Shaik - Founder
- Syed Hussain - Founder

## 📬 Contact

- Email: hid@zavis.xyz
- Telegram: @w3hidayath
