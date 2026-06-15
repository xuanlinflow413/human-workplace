import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import PlausibleProvider from "@/components/PlausibleProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "KindReply — Real Professional Replies for Hard Moments",
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
  authors: [{ name: "KindReply" }],
  creator: "KindReply",
  publisher: "KindReply",
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
    url: "https://kindreply.co/",
    siteName: "KindReply",
    title: "KindReply — Real Professional Replies for Hard Moments",
    description:
      "Copy-ready workplace replies for resignation, burnout, difficult conversations, and more. Professional, kind, and human.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KindReply — human cover letters and workplace replies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KindReply — Real Professional Replies for Hard Moments",
    description:
      "Copy-ready workplace replies for resignation, burnout, difficult conversations, and more.",
    creator: "@kindreply",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: null,
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
        <meta
          name="google-site-verification"
          content="r79PY62ZMOSfpJOaPPb7ismHQA9KS2WupX3dwbYK8_o"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kindreply.co/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://kindreply.co/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "KindReply",
                url: "https://kindreply.co/",
                description:
                  "A curated collection of real, professional, and emotionally intelligent workplace replies.",
                publisher: {
                  "@type": "Organization",
                  name: "KindReply",
                  url: "https://kindreply.co/",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "KindReply",
                    item: "https://kindreply.co/",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is KindReply?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "KindReply provides human-sounding cover letter drafts and workplace reply examples for difficult professional moments.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I copy and adapt the examples?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. KindReply examples are designed to be copied, edited, and adapted to your own situation before sending.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <PlausibleProvider>
          <AuthProvider>{children}</AuthProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
