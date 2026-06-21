import type { Metadata } from "next";
import EmailWriterLandingPage from "@/components/EmailWriterLandingPage";
import { getEmailWriterPage } from "@/data/emailWriterPages";

const page = getEmailWriterPage("polite-email-rewriter");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "https://kindreply.co/polite-email-rewriter/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/polite-email-rewriter/",
    siteName: "KindReply",
    title: page.title,
    description: page.description,
  },
};

export default function Page() {
  return <EmailWriterLandingPage page={page} />;
}
