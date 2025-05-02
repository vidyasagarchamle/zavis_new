/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'google-spreadsheet', 'google-auth-library'];
    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_PROJECT_ID: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    GOOGLE_SERVICE_ACCOUNT_CLIENT_ID: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
    GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
  },
}

module.exports = nextConfig 