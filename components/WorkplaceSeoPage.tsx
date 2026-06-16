import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export type WorkplaceSeoPageConfig = {
  eyebrow: string;
  h1: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  cards: Array<{ title: string; text: string }>;
  templates: Array<{ title: string; body: string }>;
  tips: string[];
  related: Array<{ href: string; label: string; text: string }>;
};

export default function WorkplaceSeoPage({ config }: { config: WorkplaceSeoPageConfig }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <FileText className="h-3.5 w-3.5 text-stone-400" />
              <span>{config.eyebrow}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">{config.h1}</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{config.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={config.primaryCta.href} className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>{config.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={config.secondaryCta.href} className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                {config.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {config.cards.map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Copy-ready starting points</h2>
            <div className="space-y-4">
              {config.templates.map((template) => (
                <div key={template.title} className="rounded-xl border border-border bg-muted/20 p-5">
                  <h3 className="font-medium text-foreground">{template.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{template.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">Before you send it</h2>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {config.tips.map((tip) => (
                <li key={tip} className="rounded-lg border border-border bg-card p-4">{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Related workplace templates</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {config.related.map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all">
                  <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
