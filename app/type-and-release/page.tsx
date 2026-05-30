import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypeReleaseTool from "@/components/TypeReleaseTool";
import CrisisResources from "@/components/CrisisResources";
import Link from "next/link";
import { ArrowRight, Feather } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "Type & Release | Write It Down, Let It Go",
  description:
    "A private online space to write the message, thought, or feeling you do not want to send. Nothing is saved or uploaded.",
  keywords: [
    "write don't send",
    "private journaling",
    "release thoughts",
    "emotional release tool",
    "write and let go",
    "safe space to vent",
  ],
  authors: [{ name: "KindReply" }],
  creator: "KindReply",
  publisher: "KindReply",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kindreply.co/type-and-release/",
    siteName: "KindReply",
    title: "Type & Release | Write It Down, Let It Go",
    description:
      "A private online space to write the message, thought, or feeling you do not want to send. Nothing is saved or uploaded.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Type & Release | Write It Down, Let It Go",
    description:
      "A private online space to write the message, thought, or feeling you do not want to send.",
    creator: "@kindreply",
  },
  alternates: {
    canonical: "/type-and-release/",
  },
};

export default function TypeAndReleasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Feather className="h-3.5 w-3.5 text-stone-400" />
              <span>A KindReply space</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Type & Release
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              A private place to write the thing you don&apos;t want to send.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              No saving. No sending. Just space.
            </p>
          </div>
        </section>

        {/* Tool Area */}
        <section className="px-4 py-8">
          <TypeReleaseTool />
        </section>

        {/* How to use */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              How to use this
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Write it down
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Type whatever is on your mind. No filters needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Press Release
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Watch it fade. The words don&apos;t need to go anywhere to
                    matter.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Let it go
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Take a breath. The thought has been heard — by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to use */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              When this helps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  The message you shouldn&apos;t send
                </h3>
                <p className="text-sm text-muted-foreground">
                  That text you&apos;re typing at 2am. Write it here first.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Work frustration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vent without burning bridges.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Family tension
                </h3>
                <p className="text-sm text-muted-foreground">
                  Say what you feel without the fallout.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Overthinking loops
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get the thought out of your head and onto the page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy note */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Your privacy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Everything you type stays in your browser. We do not save, upload,
              or transmit anything you write here. When you close or refresh this
              page, it&apos;s gone.
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-stone max-w-none">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Why Writing Without Sending Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sometimes the most important message is the one you do not send.
                When emotions run high — after a difficult meeting, a harsh email,
                or a moment of burnout — our first instinct is to react immediately.
                But research shows that writing down your thoughts without sending
                them can reduce emotional intensity by up to 50%.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Type &amp; Release is a simple but powerful tool based on expressive
                writing techniques used in therapy and stress management. By putting
                your unfiltered thoughts into words, you create distance between
                yourself and the emotion. You see the situation more clearly. And
                most importantly, you give yourself the space to respond with
                intention rather than react on impulse.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                The Science Behind Writing It Down
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Studies from the University of Texas and others have found that
                expressive writing — writing about stressful or emotional experiences
                for 15-20 minutes — can lead to improved mood, reduced anxiety, and
                even better immune function. The act of translating thoughts into
                written words engages different parts of the brain than simply
                thinking or speaking, helping you process emotions more effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you type out that angry email or frustrated message, you are
                not just venting — you are organizing your thoughts. You are
                identifying what actually bothers you. And often, you realize that
                the version you would have sent in the heat of the moment is not the
                version that serves you best.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                When to Use Type &amp; Release
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Before sending a resignation email:</strong>{" "}
                  Write the raw version first. Then use our{" "}
                  <a href="/workplace/how-to-resign-gracefully/" className="text-foreground underline">
                    resignation templates
                  </a>{" "}
                  to craft the professional version.
                </li>
                <li>
                  <strong className="text-foreground">After receiving critical feedback:</strong>{" "}
                  Process your initial reaction privately before responding.
                </li>
                <li>
                  <strong className="text-foreground">During burnout:</strong>{" "}
                  Express what you are feeling before deciding whether to request{" "}
                  <a href="/workplace/email-template-for-burnout-leave/" className="text-foreground underline">
                    time off for burnout
                  </a>.
                </li>
                <li>
                  <strong className="text-foreground">When overwhelmed by workload:</strong>{" "}
                  Clarify your thoughts before{" "}
                  <a href="/workplace/how-to-tell-your-boss-youre-overwhelmed/" className="text-foreground underline">
                    talking to your manager
                  </a>.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                How It Works
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Type &amp; Release is designed to be as simple as possible. There
                are no accounts, no saving, and no cloud storage. Everything you type
                exists only in your browser&apos;s memory. When you press the
                Release button, the text fades away — a symbolic and literal letting
                go. Refresh the page, and it is completely gone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This privacy-first approach means you can be completely honest.
                Write the things you would never say out loud. Express the
                frustration, the fear, the anger — whatever is weighing on you. The
                page does not judge, does not save, and does not share. It simply
                gives you space.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                When Not To Send The Message
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There is a specific moment when Type &amp; Release is most valuable: the gap between feeling something and deciding what to do about it. That gap is where most professional damage happens. The email sent in anger. The Slack message drafted at midnight. The resignation letter written after one bad meeting.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Research from Columbia Business School found that people who wait even ten minutes between feeling an emotion and acting on it make significantly better decisions. Ten minutes. Not a day, not a week. Just enough time for the initial surge to pass.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Type &amp; Release creates that ten-minute buffer. You write the message you want to send — every word of it, uncensored, unfiltered. Then you release it. The text fades. And you are left with the clarity of having expressed yourself without the consequences of having sent it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is not about suppression. It is about timing. The same message sent at 2am reads differently at 9am. The same frustration expressed in person lands better than the same words in an email. Type &amp; Release gives you the space to choose the right channel, the right tone, and the right moment.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Unsent Letters and Emotional Processing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The practice of writing letters you never send is older than email. Abraham Lincoln famously wrote angry letters to his generals, then filed them away unsent. Mark Twain drafted blistering responses to critics, then let them sit in a drawer. The unsent letter has always been a tool for processing emotion without creating collateral damage.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What these historical examples reveal is that the value is in the writing, not the sending. When you articulate your frustration, your fear, or your disappointment in words, you move from reacting to reflecting. You see patterns. You identify what is actually bothering you versus what is just a symptom. And you often discover that the real issue is different from what you initially felt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For example, someone who starts writing about a rude colleague might realize halfway through that their frustration is not about the colleague at all — it is about feeling undervalued by their manager. That insight changes everything. It turns a potentially destructive message into a constructive conversation about recognition and growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The unsent letter also serves as a record of your own emotional landscape. Over time, you might notice that you always feel the same way after certain types of meetings, or that your frustration peaks on specific days of the week. These patterns are valuable data. They help you anticipate difficult moments and prepare for them proactively rather than reactively.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Other Ways To Release A Thought
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Type &amp; Release is one tool among many. Different situations call for different approaches. Here are four alternatives that complement the writing practice:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Voice memo to yourself:</strong> Some thoughts flow better spoken than written. Record a voice note on your phone, say everything you need to say, then delete it. The act of hearing your own voice express frustration can be surprisingly clarifying.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Physical movement:</strong> A ten-minute walk after a difficult conversation can process emotion as effectively as writing. The rhythm of walking, the change of environment, and the shift in perspective all help your brain integrate what happened.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Talking to a trusted colleague:</strong> Not venting — processing. The difference is intention. Venting dumps emotion without purpose. Processing seeks understanding. A good colleague can ask questions that help you see the situation from another angle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Scheduled worry time:</strong> Set a 15-minute window each day for processing difficult emotions. When something frustrating happens outside that window, write it down and save it for your scheduled time. This prevents emotions from hijacking your entire day.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each of these methods shares the same principle: create space between stimulus and response. Type &amp; Release is the fastest and most private option. The others add layers of physicality, social connection, or structured timing. Experiment to find what works for your specific situation.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                From Release to Action
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After releasing your thoughts, you may find clarity on what to do
                next. If your writing revealed a workplace issue that needs
                addressing, KindReply has templates to help you communicate
                professionally: from{" "}
                <a href="/workplace/how-to-ask-for-a-raise/" className="text-foreground underline">
                  asking for a raise
                </a>{" "}
                to{" "}
                <a href="/workplace/how-to-decline-extra-work/" className="text-foreground underline">
                  declining extra work
                </a>{" "}
                to{" "}
                <a href="/workplace/how-to-respond-to-a-rude-email-professionally/" className="text-foreground underline">
                  responding to rude emails
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal is not to suppress your feelings — it is to express them
                safely, process them fully, and then choose your response with a
                clear mind. Type &amp; Release is the first step in that journey.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                A Tool for Mental Wellness at Work
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Workplace stress is one of the leading causes of burnout, anxiety,
                and decreased productivity. Having a private outlet for difficult
                emotions is not a luxury — it is a necessity for maintaining mental
                health in demanding professional environments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Many professionals find that regular expressive writing helps them
                identify patterns in their stress triggers, improve their emotional
                regulation, and develop healthier communication habits over time. It
                is a small practice with compounding benefits.
              </p>
            </article>
          </div>
        </section>

        {/* Related pages */}
        <section className="px-4 py-10 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              More from KindReply
            </h2>
            <div className="space-y-3">
              <Link
                href="/workplace/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    Workplace Replies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real replies for hard conversations at work
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="/about/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    About KindReply
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Why we built this
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </section>

        {/* Crisis resources */}
        <CrisisResources />
      </main>

      <Footer />
    </div>
  );
}
