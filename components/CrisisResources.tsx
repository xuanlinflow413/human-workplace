export default function CrisisResources() {
  return (
    <section className="px-4 py-10 border-t border-border">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs text-muted-foreground leading-relaxed">
          This tool is not medical advice. If you are in immediate danger or crisis,{" "}
          contact local emergency services or a crisis hotline.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <a
            href="https://988lifeline.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            988 Lifeline
          </a>
          <a
            href="https://findahelpline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            Find A Helpline
          </a>
          <a
            href="https://www.samhsa.gov/find-help/national-helpline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            SAMHSA
          </a>
        </div>
      </div>
    </section>
  );
}
