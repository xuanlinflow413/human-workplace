"use client";

import Script from "next/script";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <>
      <Script
        defer
        data-domain="kindreply.co"
        src="https://plausible.io/js/script.outbound-links.js"
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
