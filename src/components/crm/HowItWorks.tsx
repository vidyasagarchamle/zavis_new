"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-border/30 bg-white/90 p-2 shadow-[0_0_15px_-8px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-transform hover:scale-105",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Left side integrations
  const whatsappRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const gmailRef = useRef<HTMLDivElement>(null);
  const smsRef = useRef<HTMLDivElement>(null);

  // Right side integrations
  const zapierRef = useRef<HTMLDivElement>(null);
  const slackRef = useRef<HTMLDivElement>(null);
  const salesforceRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const zendeskRef = useRef<HTMLDivElement>(null);
  const hubspotRef = useRef<HTMLDivElement>(null);

  // Center ZAVIS logo ref
  const zavisRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-0 md:py-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto">
            Connect all your communication channels and automate workflows with our unified platform
          </p>
        </div>

        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-6" ref={containerRef}>
          <div className="flex size-full max-w-[800px] flex-col items-stretch justify-between">
            {/* Left Side - Communication Channels */}
            <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-80">
                <Circle ref={whatsappRef} className="absolute top-0 left-4">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
                </Circle>
                <Circle ref={telegramRef} className="absolute top-12 left-0">
                  <Image src="/telegram.svg" alt="Telegram" width={32} height={32} />
                </Circle>
                <Circle ref={facebookRef} className="absolute top-24 left-8">
                  <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
                </Circle>
                <Circle ref={instagramRef} className="absolute top-36 left-2">
                  <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
                </Circle>
                <Circle ref={gmailRef} className="absolute top-48 left-6">
                  <Image src="/gmail.svg" alt="Gmail" width={32} height={32} />
                </Circle>
                <Circle ref={smsRef} className="absolute top-60 left-1">
                  <Image src="/sms.svg" alt="SMS" width={32} height={32} />
                </Circle>
              </div>
            </div>

            {/* Center - ZAVIS Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <Circle ref={zavisRef} className="size-24 bg-black shadow-xl border-4 border-white">
                <span className="text-2xl font-bold text-white">ZAVIS</span>
              </Circle>
            </div>

            {/* Right Side - Integration Platforms */}
            <div className="absolute right-[25%] top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-80">
                <Circle ref={zapierRef} className="absolute top-2 right-2">
                  <Image src="/zapier.svg" alt="Zapier" width={32} height={32} />
                </Circle>
                <Circle ref={slackRef} className="absolute top-14 right-6">
                  <Image src="/slack.svg" alt="Slack" width={32} height={32} />
                </Circle>
                <Circle ref={salesforceRef} className="absolute top-26 right-0">
                  <Image src="/salesforce.svg" alt="Salesforce" width={32} height={32} />
                </Circle>
                <Circle ref={shopifyRef} className="absolute top-38 right-4">
                  <Image src="/shopify.svg" alt="Shopify" width={32} height={32} />
                </Circle>
                <Circle ref={zendeskRef} className="absolute top-50 right-1">
                  <Image src="/zendesk.svg" alt="Zendesk" width={32} height={32} />
                </Circle>
                <Circle ref={hubspotRef} className="absolute top-62 right-5">
                  <Image src="/hubspot.svg" alt="HubSpot" width={32} height={32} />
                </Circle>
              </div>
            </div>
          </div>

          {/* Left Side Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={whatsappRef}
            toRef={zavisRef}
            curvature={-15}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={telegramRef}
            toRef={zavisRef}
            curvature={-12}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={facebookRef}
            toRef={zavisRef}
            curvature={-9}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={instagramRef}
            toRef={zavisRef}
            curvature={-6}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={gmailRef}
            toRef={zavisRef}
            curvature={-3}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={smsRef}
            toRef={zavisRef}
            curvature={0}
            className="z-0"
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={24}
            endXOffset={-36}
          />

          {/* Right Side Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={zapierRef}
            curvature={-15}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={slackRef}
            curvature={-12}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={salesforceRef}
            curvature={-9}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={shopifyRef}
            curvature={-6}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={zendeskRef}
            curvature={-3}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={zavisRef}
            toRef={hubspotRef}
            curvature={0}
            className="z-0"
            reverse
            pathOpacity={0.3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#1d4ed8"
            startXOffset={36}
            endXOffset={-24}
          />
        </div>
      </div>
    </section>
  );
} 