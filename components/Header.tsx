"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
          <Heart className="h-5 w-5 text-stone-500" fill="currentColor" />
          <span>KindReply</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/workplace/" className="hover:text-foreground transition-colors">
            Workplace
          </Link>
          <Link href="/workplace/categories/" className="hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/type-and-release/" className="hover:text-foreground transition-colors">
            Type &amp; Release
          </Link>
          <Link href="/about/" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/cover-letter-writer/" className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors border-l border-border pl-4">
            Cover Letter
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <Link
            href="/workplace/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Workplace
          </Link>
          <Link
            href="/workplace/categories/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/type-and-release/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Type &amp; Release
          </Link>
          <Link
            href="/cover-letter-writer/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Cover Letter
          </Link>
          <Link
            href="/about/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
