"use client";

import { useState, useCallback } from "react";

export default function TypeReleaseTool() {
  const [text, setText] = useState("");
  const [isReleased, setIsReleased] = useState(false);
  const [isDissolving, setIsDissolving] = useState(false);

  const handleRelease = useCallback(() => {
    if (!text.trim() || isDissolving) return;
    setIsDissolving(true);
    setTimeout(() => {
      setIsDissolving(false);
      setIsReleased(true);
    }, 1500);
  }, [text, isDissolving]);

  const handleClear = useCallback(() => {
    setText("");
    setIsReleased(false);
    setIsDissolving(false);
  }, []);

  const hasText = text.trim().length > 0;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Textarea */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type the thing you don't want to send."
          disabled={isReleased || isDissolving}
          className={`
            w-full min-h-[200px] rounded-xl border border-border bg-card
            p-5 text-base leading-relaxed text-foreground
            placeholder:text-muted-foreground/60
            focus:outline-none focus:ring-2 focus:ring-stone-300
            resize-y transition-opacity duration-[1500ms] ease-out
            disabled:bg-muted disabled:cursor-not-allowed
            ${isDissolving ? "opacity-0 blur-[2px]" : "opacity-100 blur-0"}
          `}
        />
      </div>

      {/* Privacy note */}
      <p className="mt-3 text-xs text-muted-foreground">
        Everything stays in your browser. Nothing is saved or sent.
      </p>

      {/* Buttons */}
      <div className="mt-5 flex items-center gap-3">
        {!isReleased ? (
          <button
            onClick={handleRelease}
            disabled={!hasText || isDissolving}
            className={`
              inline-flex items-center justify-center rounded-lg px-5 py-2.5
              text-sm font-medium transition-all
              ${
                hasText && !isDissolving
                  ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }
            `}
          >
            {isDissolving ? "Releasing..." : "Release"}
          </button>
        ) : null}

        {(hasText || isReleased) && !isDissolving && (
          <button
            onClick={handleClear}
            disabled={isDissolving}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Release feedback */}
      {isReleased && !isDissolving && (
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            You don&apos;t have to send every thought to let it leave your body.
          </p>
        </div>
      )}
    </div>
  );
}
