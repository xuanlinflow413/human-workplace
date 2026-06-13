import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

export const metadata: Metadata = {
  title: "KindReply Pricing — Job Pack and Pro Credits",
  description: "Start with a $4.99 one-time Job Pack or upgrade to KindReply Pro for monthly credits, premium templates, ATS optimization, and polished job-search messages.",
  alternates: {
    canonical: "/pricing/",
  },
  openGraph: {
    title: "KindReply Pricing — Job Pack and Pro Credits",
    description: "Buy a low-risk Job Pack first, then upgrade to Pro when job-search messaging becomes a recurring workflow.",
    url: "https://kindreply.co/pricing/",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
