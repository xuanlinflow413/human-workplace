import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://human-workplace.pages.dev"),
  title: "Human Workplace — Real Professional Replies for Hard Moments",
  description:
    "Copy-ready workplace replies for resignation, burnout, difficult conversations, and more. Professional, kind, and human.",
  keywords: [
    "workplace replies",
    "professional email templates",
    "resignation email",
    "burnout support",
    "difficult conversations",
    "layoff communication",
    "manager replies",
  ],
  authors: [{ name: "Human Workplace" }],
  creator: "Human Workplace",
  publisher: "Human Workplace",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://human-workplace.pages.dev/",
    siteName: "Human Workplace",
    title: "Human Workplace — Real Professional Replies for Hard Moments",
    description:
      "Copy-ready workplace replies for resignation, burnout, difficult conversations, and more. Professional, kind, and human.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Workplace — Real Professional Replies for Hard Moments",
    description:
      "Copy-ready workplace replies for resignation, burnout, difficult conversations, and more.",
    creator: "@humanworkplace",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "r79PY62ZMOSfpJOaPPb7ismHQA9KS2WupX3dwbYK8_o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Human Workplace",
              url: "https://human-workplace.pages.dev/",
              description:
                "A curated collection of real, professional, and emotionally intelligent workplace replies.",
              publisher: {
                "@type": "Organization",
                name: "Human Workplace",
                url: "https://human-workplace.pages.dev/",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
