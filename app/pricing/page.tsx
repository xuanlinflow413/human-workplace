import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

export const metadata: Metadata = {
  title: "KindReply Pricing — Reply Packs and Pro Credits",
  description: "Start with a $4.99 one-time pack for job-search and support replies, or upgrade to KindReply Pro for monthly credits and premium templates.",
  alternates: {
    canonical: "/pricing/",
  },
  openGraph: {
    title: "KindReply Pricing — Reply Packs and Pro Credits",
    description: "Buy a low-risk reply pack first, then upgrade to Pro when job-search or customer-support messaging becomes a recurring workflow.",
    url: "https://kindreply.co/pricing/",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
