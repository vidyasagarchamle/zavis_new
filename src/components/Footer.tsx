"use client"

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and brief description */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <Logo size="sm" animated={false} />
              </div>
              <p className="text-[color:var(--foreground-secondary)] text-sm max-w-xs">
                AI voice agents that transform customer communication, available 24/7.
              </p>
            </div>

            {/* Company */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Docs', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:hid@zavis.xyz"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    hid@zavis.xyz
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/w3hidayath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
                  >
                    Telegram: @w3hidayath
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-[color:var(--foreground-secondary)] hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[color:var(--foreground-secondary)] hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-[color:var(--foreground-secondary)] text-sm">
              &copy; {currentYear} ZAVIS. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-[color:var(--foreground-secondary)] hover:text-foreground text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 