"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Heart, Coins, LogIn, LogOut, ChevronDown, CreditCard } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useAnalytics } from "@/lib/analytics";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, getLoginUrl, logout, isPro, creditsBalance } = useAuth();
  const { trackLoginClicked, trackBuyCreditsClicked } = useAnalytics();

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    setUserMenuOpen(false);
  }, [logout]);

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
          <Link href="/salary-negotiation-generator/" className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors border-l border-border pl-4">
            Salary
          </Link>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm hover:bg-muted transition-colors"
              >
                {isPro && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                    👑 PRO
                  </span>
                )}
                <span className="max-w-[120px] truncate text-muted-foreground">{user.email}</span>
                {isPro && creditsBalance !== null && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
                    <span>👑 PRO · {creditsBalance} Credits</span>
                  </span>
                )}
                {!isPro && creditsBalance !== null && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
                    <Coins className="h-3 w-3" />
                    {creditsBalance}
                  </span>
                )}
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
                    {isPro && creditsBalance !== null && (
                      <p className="text-xs text-amber-700 mt-0.5 font-medium">
                        👑 PRO · {creditsBalance} Credits
                      </p>
                    )}
                    {!isPro && creditsBalance !== null && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {creditsBalance} credits remaining
                      </p>
                    )}
                  </div>
                  <Link
                    href="/cover-letter-writer/?buy=credits"
                    onClick={() => {
                      trackBuyCreditsClicked("header_user_menu");
                      setUserMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    Buy Credits
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                trackLoginClicked("header");
                window.location.href = getLoginUrl();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
            >
              <LogIn className="h-3 w-3" />
              Sign in
            </button>
          )}
        </div>

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
            href="/salary-negotiation-generator/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Salary Negotiation
          </Link>
          <Link
            href="/about/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          {user && (
            <>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-medium text-foreground">{user.email}</p>
                {creditsBalance !== null && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {creditsBalance} credits
                  </p>
                )}
                <Link
                  href="/cover-letter-writer/?buy=credits"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center gap-2 text-sm text-foreground hover:text-foreground/80"
                >
                  <CreditCard className="h-4 w-4" />
                  Buy Credits
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="mt-2 flex items-center gap-2 text-sm text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
