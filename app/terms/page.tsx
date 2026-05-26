import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Human Workplace",
  description:
    "By using Human Workplace, you agree to these terms. Our content is for informational purposes only.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
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
              <span className="text-foreground">Terms of Service</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              Terms of Service
            </h1>

            <div className="prose prose-stone max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing and using Human Workplace, you accept and agree to be
                bound by the terms and provisions of this agreement.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Use of content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on Human Workplace is provided for informational and
                educational purposes. You are free to copy, modify, and use the reply
                templates for personal or professional use. You may not resell or
                redistribute our content as a competing product.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                No professional advice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The content on this site does not constitute legal, HR, or financial
                advice. We are not responsible for any outcomes resulting from the use
                of our templates. When in doubt, consult a qualified professional.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Human Workplace is provided "as is" without any warranties, expressed
                or implied. We do not guarantee that our content will be suitable for
                your specific situation.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Changes to terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify these terms at any time. Continued use
                of the site after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these terms, please contact us at{" "}
                <a
                  href="mailto:hello@human-workplace.pages.dev"
                  className="text-foreground underline underline-offset-2 hover:text-stone-600"
                >
                  hello@human-workplace.pages.dev
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
