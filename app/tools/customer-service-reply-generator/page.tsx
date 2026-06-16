import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";
import { supportReplyPages } from "@/data/supportReplyPages";

const page = supportReplyPages['tools/customer-service-reply-generator'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `https://kindreply.co/${page.slug}/` },
  openGraph: {
    type: "website",
    url: `https://kindreply.co/${page.slug}/`,
    siteName: "KindReply",
    title: page.title,
    description: page.description,
  },
};

export default function Page() {
  return <WorkplaceSeoPage config={page.config} />;
}
