"use client"

import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and brief description */}
            <div className="col-span-1">
              <div className="mb-4">
                <Logo size="sm" animated={false} />
              </div>
              <p className="text-[color:var(--foreground-secondary)] text-sm max-w-xs">
                AI voice agents that transform customer communication, available 24/7.
              </p>
              <p className="text-[color:var(--foreground-secondary)] text-xs mt-4">
                HASH INFORMATION TECHNOLOGY CO. L.L.C, Dubai, UAE.
              </p>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:support@zavis.ai"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    support@zavis.ai
                  </a>
                </li>
                <li>
                  <a 
                    href="https://zavis.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    zavis.ai
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border flex flex-col items-center">
            <p className="text-[color:var(--foreground-secondary)] text-sm">
              &copy; {currentYear} ZAVIS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 