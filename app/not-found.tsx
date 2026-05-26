import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found — Human Workplace",
  description: "The page you are looking for does not exist. Browse our workplace reply templates.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-stone-300 mb-4">404</h1>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            This page could not be found.
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for may have been moved or does not exist.
            Check out our workplace reply templates instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to home</span>
            </Link>
            <Link
              href="/workplace/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <span>Browse replies</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
