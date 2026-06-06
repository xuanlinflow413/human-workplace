import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bestMcpUrl = "https://bestmcpservers.com/ai-prd-generator/";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "AI PRD Generator Moved to BestMCPServers | KindReply",
  description:
    "KindReply now focuses on workplace writing and cover-letter tools. The AI PRD Generator has moved to BestMCPServers for AI builder workflows and product planning.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kindreply.co/ai-prd-generator/",
    siteName: "KindReply",
    title: "The AI PRD Generator now lives on BestMCPServers",
    description:
      "Use the builder-focused AI PRD Generator on BestMCPServers for AI agents, MCP servers, SaaS products, and developer tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KindReply workplace writing tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI PRD Generator now lives on BestMCPServers",
    description:
      "Use the builder-focused AI PRD Generator on BestMCPServers for AI agents, MCP servers, SaaS products, and developer tools.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: bestMcpUrl,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kindreply.co/" },
    { "@type": "ListItem", position: 2, name: "AI PRD Generator moved", item: "https://kindreply.co/ai-prd-generator/" },
  ],
};

export default function AIPRDGeneratorMovedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="flex-1">
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Tool moved
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              The AI PRD Generator now lives on BestMCPServers
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              KindReply is focused on workplace writing, email replies, and cover-letter support. For product planning, AI builder workflows, MCP servers, and developer-focused PRDs, use the AI PRD Generator on BestMCPServers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={bestMcpUrl} className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                Open AI PRD Generator
              </a>
              <a href="https://bestmcpservers.com/tools/" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Explore AI builder tools
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Why it moved</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Product requirements for AI builders are different from traditional writing tasks. AI agents, MCP servers, and developer tools need requirements for tool permissions, data access, model behavior, evaluation, monitoring, cost, and failure modes. BestMCPServers brings the AI PRD Generator together with related templates, cost tools, agent guides, and MCP resources so builders can plan before they ship.
            </p>
            <div className="mt-5">
              <Link href="/cover-letter-writer/" className="text-sm font-medium text-stone-600 hover:text-foreground">
                Looking for workplace writing? Try KindReply Cover Letter Writer →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
