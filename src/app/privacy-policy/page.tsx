import Link from 'next/link';
import GlobalBackground from '@/components/ui/GlobalBackground';

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <GlobalBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-[color:var(--background)] p-6 rounded-lg shadow-sm border border-[color:var(--border)]">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="text-sm text-[color:var(--foreground-secondary)] mb-6">
            <p>Effective Date: 01/05/2025</p>
            <p>Last Updated: 07/05/2025</p>
          </div>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p>Welcome to ZAVIS AI, a product developed and operated by HASH INFORMATION TECHNOLOGY CO. L.L.C, Dubai, UAE ("ZAVIS", "we", "our", or "us"). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you interact with our services, including our website https://zavis.ai, associated APIs, applications, GitHub repositories, community channels like Discord, and any other service we operate (collectively, the "Services").</p>
              <p className="mt-2">By accessing or using the Services, you agree to the collection and use of your information in accordance with this Privacy Policy.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <div className="ml-4">
                <h3 className="text-xl font-medium mb-2">2.1 Personal Information You Provide</h3>
                <p>We collect Personal Information you voluntarily provide when you:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Create an account or sign in (via email or phone)</li>
                  <li>Contact us through support channels</li>
                  <li>Fill out forms or surveys</li>
                  <li>Use interactive tools or submit content</li>
                  <li>Subscribe to updates or newsletters</li>
                  <li>Request a live demo by submitting your name, email address, and phone number via our website</li>
                </ul>
                <p className="mt-2">This may include:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company name & role</li>
                  <li>Phone number (for live demo & contact)</li>
                  <li>Billing or payment details (handled securely by Stripe or similar processors)</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-2 mt-4">2.2 Automatically Collected Information</h3>
                <p>When you use our Services, we automatically collect technical data, including:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Device type and ID</li>
                  <li>Referring URLs</li>
                  <li>Pages visited and time spent</li>
                  <li>Clickstream data</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Access timestamps</li>
                </ul>
                <p className="mt-2">We use Google Analytics for usage tracking and product improvement.</p>
                
                <h3 className="text-xl font-medium mb-2 mt-4">2.3 Cookies and Similar Technologies</h3>
                <p>We use cookies, pixels, and similar technologies to enhance your experience and analyze usage. You can manage or disable cookies through your browser settings.</p>
                <p className="mt-2">Types of cookies:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Essential (e.g. authentication)</li>
                  <li>Analytics & Performance</li>
                  <li>Functionality & Preferences</li>
                  <li>Marketing & Retargeting</li>
                </ul>
                <p className="mt-2">See our Cookie Policy for more.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Operate, maintain, and improve the Services</li>
                <li>Authenticate and manage user accounts</li>
                <li>Enable integrations (e.g. GitHub-based agent imports)</li>
                <li>Provide customer support</li>
                <li>Schedule and conduct live demos you've requested</li>
                <li>Follow up on your interest in ZAVIS AI</li>
                <li>Communicate updates or service-related messages</li>
                <li>Personalize your experience</li>
                <li>Analyze usage and improve performance</li>
                <li>Send marketing communications (with opt-out options)</li>
                <li>Ensure security and prevent abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. When We Share Your Information</h2>
              <p>We do not sell your Personal Information. We may share your information with:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Service Providers: Hosting (e.g. Vercel), analytics (e.g. PostHog), billing (e.g. Stripe), communication tools (e.g. Discord).</li>
                <li>Platform Integrations: If you import GitHub repos or authenticate via Discord, we access only necessary OAuth-scoped data.</li>
                <li>Legal & Compliance: When required to respond to legal requests or enforce our Terms of Service.</li>
                <li>Business Transfers: In case of a merger, acquisition, or sale of assets, your data may be transferred.</li>
                <li>With Your Consent: For any other purposes explicitly disclosed to you.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p>We implement security best practices to protect your data:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>HTTPS encryption in transit</li>
                <li>Access control and least privilege principles</li>
                <li>Secure storage of sensitive data</li>
                <li>Regular internal audits</li>
              </ul>
              <p className="mt-2">No method of transmission over the Internet or method of electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
              <p>We retain your Personal Information only as long as necessary:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>To deliver our Services</li>
                <li>To comply with legal obligations</li>
                <li>To resolve disputes and enforce agreements</li>
                <li>To communicate with you following your demo request or related product interest. You may request deletion of your account and data at any time.</li>
              </ul>
              <p className="mt-2">You may request deletion of your account and data at any time.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Access – Request a copy of your data</li>
                <li>Correction – Update inaccurate information</li>
                <li>Deletion – Request erasure of your data</li>
                <li>Portability – Request export of your data</li>
                <li>Restriction or Objection – To certain processing</li>
                <li>Withdraw Consent – Where consent was given</li>
              </ul>
              <p className="mt-2">To exercise these rights, email support@zavis.ai. We'll respond within applicable timeframes.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
              <p>ZAVIS AI is operated from the UAE but uses infrastructure and processors located globally. By using our Services, you acknowledge that your data may be transferred to and stored in jurisdictions with different data protection laws.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
              <p>Our Services are not intended for children under 13. We do not knowingly collect data from anyone under 13. If you believe a child has provided us with personal data, please contact us for deletion.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Third-Party Links and Services</h2>
              <p>Our Services may contain links to external websites, GitHub repositories, Discord servers, or other services. We are not responsible for the privacy practices of these third parties. We recommend reviewing their respective privacy policies.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Cookie Policy</h2>
              <p>We use cookies for essential functionality, analytics, and personalization.</p>
              <h3 className="text-xl font-medium mb-2 mt-4">Managing Cookies</h3>
              <p>You can opt out or customize cookie preferences via your browser or third-party tools. Disabling some cookies may affect Service functionality.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy to reflect product, legal, or regulatory changes. We'll notify you of significant updates by email or by placing a prominent notice on our website. The "Last Updated" date will always indicate the current version.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy or your data, contact us:</p>
              <div className="mt-2">
                <p>HASH INFORMATION TECHNOLOGY CO. L.L.C</p>
                <p>Dubai, UAE</p>
                <p>📧 support@zavis.ai</p>
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