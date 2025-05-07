import Link from 'next/link';
import GlobalBackground from '@/components/ui/GlobalBackground';

export default function TermsOfService() {
  return (
    <div className="relative">
      <GlobalBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-[color:var(--background)] p-6 rounded-lg shadow-sm border border-[color:var(--border)]">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <div className="text-sm text-[color:var(--foreground-secondary)] mb-6">
            <p>Effective Date: May 1, 2025</p>
            <p>Last Updated: May 7, 2025</p>
          </div>
          
          <div className="space-y-6">
            <section>
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you", "your", or "User") and HASH INFORMATION TECHNOLOGY CO. L.L.C ("ZAVIS", "we", "us", or "our"), a company based in Dubai, UAE, governing your access to and use of the ZAVIS AI website https://zavis.ai, API, dashboard, services, applications, and other offerings (collectively, the "Services").</p>
              <p className="mt-2">By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Use of Services</h2>
              <p>ZAVIS provides APIs, a dashboard, and integrations to help developers, businesses, and teams build and deploy voice-based AI agents and workflows. You may use our Services only in accordance with these Terms, our Privacy Policy, and all applicable laws.</p>
              <p className="mt-2">You may not use the Services if:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>You are under the age of 13.</li>
                <li>You are barred from doing so under applicable laws.</li>
                <li>Your account has been previously suspended or terminated by us.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. User Accounts</h2>
              <p>To access most features of the Service, you must register for an account. When creating an account, you must provide accurate and complete information. You are solely responsible for safeguarding your account credentials and for all activity that occurs under your account.</p>
              <p className="mt-2">You must notify us immediately at support@zavis.ai of any unauthorized use of your account.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. License and Access</h2>
              <p>Subject to your compliance with these Terms, ZAVIS grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your own internal business or personal purposes.</p>
              <p className="mt-2">You may not:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Reverse-engineer, decompile, or disassemble any part of the Service.</li>
                <li>Resell, lease, or sublicense our Services to others.</li>
                <li>Use the Service to develop a competing product.</li>
                <li>Abuse our system resources or attempt to circumvent any limits or restrictions.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Fair Usage and Rate Limits</h2>
              <p>To ensure system stability and fair access for all users, ZAVIS may apply rate limits to your usage. We reserve the right to monitor usage and throttle or restrict access if usage exceeds reasonable thresholds or causes degradation of service for others.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Customer Content</h2>
              <p>You retain ownership of all content, data, and prompts you input into the Service ("Customer Content"). By using the Services, you grant us a limited, worldwide, royalty-free license to use, host, store, and process Customer Content solely for the purpose of providing and improving the Services.</p>
              <p className="mt-2">You are responsible for ensuring that your Customer Content does not violate any applicable laws or third-party rights, including intellectual property or data privacy laws.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. AI Models and Outputs</h2>
              <p>ZAVIS integrates with third-party large language models (LLMs), speech APIs, and other AI services (e.g., OpenAI, Google, Deepgram, AssemblyAI, etc.). These models are probabilistic and may generate incorrect or harmful outputs.</p>
              <p className="mt-2">You acknowledge that:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>AI responses may be unpredictable or inaccurate.</li>
                <li>You must evaluate the accuracy and appropriateness of outputs before relying on them.</li>
                <li>You are responsible for monitoring and auditing usage to prevent misuse.</li>
                <li>ZAVIS disclaims all liability arising from your use or reliance on AI-generated content.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Payment and Subscriptions</h2>
              <p>Certain features of the Services may require payment or a subscription plan. All fees are stated in USD & AED and must be paid in accordance with the terms presented at the time of purchase.</p>
              <p className="mt-2">We reserve the right to change our pricing or introduce new charges at any time, with prior notice. Failure to pay may result in suspension or termination of your account.</p>
              <p className="mt-2">All payments are processed through secure third-party providers (e.g., Stripe).</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
              <p>You may stop using our Services at any time. We may suspend or terminate your access at any time if:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>You violate these Terms or our policies;</li>
                <li>Your use harms the platform or others;</li>
                <li>Required by law or regulation.</li>
              </ul>
              <p className="mt-2">Upon termination, your right to use the Service will immediately cease. We may retain and use Customer Content in accordance with our Privacy Policy.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Intellectual Property</h2>
              <p>All content, branding, code, and technology associated with ZAVIS (excluding your Customer Content) is the property of HASH INFORMATION TECHNOLOGY CO. L.L.C or its licensors and is protected under applicable intellectual property laws.</p>
              <p className="mt-2">You may not copy, reproduce, distribute, or create derivative works of any part of our Services without our express permission.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Feedback</h2>
              <p>If you provide us with any feedback or suggestions, you grant us an unlimited, irrevocable, and royalty-free license to use such feedback for any purpose without any obligation to you.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Third-Party Services</h2>
              <p>Our Services may integrate or depend on third-party tools and APIs (e.g., Discord, GitHub, Google, OpenAI, Deepgram, etc.). Your use of such third-party services is governed by their own terms and policies. ZAVIS is not responsible for any issues arising from third-party integrations.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Disclaimer of Warranties</h2>
              <p>Our Services are provided "as is" and "as available" without warranty of any kind, express or implied. We do not warrant that:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>The Service will meet your specific needs.</li>
                <li>The Service will be uninterrupted, secure, or error-free.</li>
                <li>Any data or content will be accurate or reliable.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, ZAVIS and its affiliates, officers, directors, and employees will not be liable for:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Any indirect, incidental, special, or consequential damages;</li>
                <li>Loss of profits, revenue, or data;</li>
                <li>Damages arising from your use of or inability to use the Service.</li>
              </ul>
              <p className="mt-2">Our total liability shall not exceed the amount paid by you to ZAVIS in the past 6 months.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">14. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless ZAVIS and its affiliates from any claims, liabilities, damages, or costs (including legal fees) arising from:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Your use of the Service;</li>
                <li>Your violation of these Terms or any law;</li>
                <li>Your infringement of any third-party right.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">15. Changes to Terms</h2>
              <p>We may update these Terms from time to time. If we make material changes, we will notify you by email or through the dashboard. Your continued use of the Services after the effective date of the updated Terms constitutes your acceptance.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">16. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">17. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-2">
                <p>HASH INFORMATION TECHNOLOGY CO. L.L.C</p>
                <p>Dubai, United Arab Emirates.</p>
                <p>📧 support@zavis.ai</p>
                <p>🌐 https://zavis.ai</p>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-4 border-t border-[color:var(--border)]">
            <a href="/" className="text-accent hover:underline">
              &larr; Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 