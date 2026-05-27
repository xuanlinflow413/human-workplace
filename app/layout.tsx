import type { Metadata } from "next";
import "./globals.css";

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
        alt: "KindReply — Real Professional Replies for Hard Moments",
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
    canonical: "/",
  },
  verification: {
    google: "UW3OyEIgcePlQwx_4GbTVMcITxfJU8K3W5uDAjHTctk",
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
          content="UW3OyEIgcePlQwx_4GbTVMcITxfJU8K3W5uDAjHTctk"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
