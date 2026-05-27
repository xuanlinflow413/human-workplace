import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — KindReply",
  description:
    "KindReply does not collect personal data. We do not use cookies, analytics, or tracking. Read our full privacy policy.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="px-4 pt-12 pb-8 md:pt-16">
          <div className="mx-auto max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Privacy Policy</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-stone max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                At KindReply, we take your privacy seriously. This policy
                describes what information we collect and how we use it.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Information we do not collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KindReply is a static website. We do not collect, store, or
                process any personal information. Specifically:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-muted-foreground">
                  We do not use cookies or tracking pixels.
                </li>
                <li className="text-sm text-muted-foreground">
                  We do not use analytics tools like Google Analytics.
                </li>
                <li className="text-sm text-muted-foreground">
                  We do not have user accounts or login systems.
                </li>
                <li className="text-sm text-muted-foreground">
                  We do not store any data you copy from our pages.
                </li>
              </ul>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Information we do collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The only data we receive is standard server logs from our hosting
                provider (Cloudflare Pages), which may include your IP address,
                browser type, and pages visited. This data is used solely for
                security and performance monitoring and is not linked to any
                personal identity.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Third-party services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not use any third-party services that collect personal data.
                Our site is hosted on Cloudflare Pages, which operates under its
                own privacy policy.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Changes to this policy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Contact us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy, please contact
                us at{" "}
                <a
                  href="mailto:hello@kindreply.co"
                  className="text-foreground underline underline-offset-2 hover:text-stone-600"
                >
                  hello@kindreply.co
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
