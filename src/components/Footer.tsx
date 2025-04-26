"use client"

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Logo and brief description */}
            <div className="col-span-1">
              <div className="mb-4">
                <Logo size="sm" animated={false} />
              </div>
              <p className="text-[color:var(--foreground-secondary)] text-sm max-w-xs">
                AI voice agents that transform customer communication, available 24/7.
              </p>
            </div>

            {/* Contact */}
            <div className="col-span-1 md:flex md:justify-end">
              <div>
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
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-border flex justify-center">
            <p className="text-[color:var(--foreground-secondary)] text-sm">
              &copy; {currentYear} ZAVIS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 