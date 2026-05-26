import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-foreground">Human Workplace</p>
            <p className="text-xs text-muted-foreground mt-1">
              Real replies for hard moments. Professional, kind, and human.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/workplace/" className="hover:text-foreground transition-colors">
              Workplace
            </Link>
            <Link href="/about/" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/privacy/" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Human Workplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
