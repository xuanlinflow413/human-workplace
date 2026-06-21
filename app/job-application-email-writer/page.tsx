import type { Metadata } from "next";
import EmailWriterLandingPage from "@/components/EmailWriterLandingPage";
import { getEmailWriterPage } from "@/data/emailWriterPages";

const page = getEmailWriterPage("job-application-email-writer");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "https://kindreply.co/job-application-email-writer/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/job-application-email-writer/",
    siteName: "KindReply",
    title: page.title,
    description: page.description,
  },
};

export default function Page() {
  return <EmailWriterLandingPage page={page} />;
}
