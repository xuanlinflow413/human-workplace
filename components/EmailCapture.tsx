"use client";

import { useState } from "react";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  context?: string;
}

export default function EmailCapture({
  title = "Get Workplace Wisdom in Your Inbox",
  description = "One email per week. No spam. Just practical templates and insights for navigating work with confidence.",
  context = "footer",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Store in localStorage for now (no backend)
    const existing = JSON.parse(localStorage.getItem("kindreply_emails") || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem("kindreply_emails", JSON.stringify(existing));
    }
    setStatus("success");
    setEmail("");
  };

  const isInline = context === "inline";

  return (
    <div
      className={`${
        isInline
          ? "rounded-xl border border-[#E5E5E5] bg-[#F8F6F2] p-6 md:p-8"
          : "bg-[#1A1A1A] px-6 py-12"
      }`}
    >
      <div className={`mx-auto ${isInline ? "max-w-2xl" : "max-w-xl text-center"}`}>
        <h3
          className={`text-xl font-bold ${
            isInline ? "text-[#1A1A1A]" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm ${
            isInline ? "text-[#6B6B6B]" : "text-[#9B9B9B]"
          }`}
        >
          {description}
        </p>

        {status === "success" ? (
          <div
            className={`mt-4 rounded-lg ${
              isInline ? "bg-green-50 text-green-700" : "bg-[#333] text-green-400"
            } px-4 py-3 text-sm font-medium`}
          >
            Thanks! You are on the list. Check your inbox soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`mt-4 flex gap-2 ${isInline ? "flex-col sm:flex-row" : "flex-col"}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="your@email.com"
              className={`flex-1 rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] ${
                isInline
                  ? "border-[#E5E5E5] bg-white text-[#1A1A1A] placeholder:text-[#9B9B9B]"
                  : "border-[#333] bg-[#333] text-white placeholder:text-[#6B6B6B]"
              }`}
              required
            />
            <button
              type="submit"
              className={`rounded-lg px-6 py-3 text-sm font-medium transition ${
                isInline
                  ? "bg-[#1A1A1A] text-white hover:bg-[#333]"
                  : "bg-white text-[#1A1A1A] hover:bg-[#F8F6F2]"
              }`}
            >
              Subscribe
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-sm text-red-500">
            Please enter a valid email address.
          </p>
        )}

        <p
          className={`mt-3 text-xs ${
            isInline ? "text-[#9B9B9B]" : "text-[#6B6B6B]"
          }`}
        >
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </div>
  );
}
