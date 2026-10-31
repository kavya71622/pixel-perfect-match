import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, SendHorizonal } from "lucide-react";
import { Navbar, DemoBadge } from "@/components/foundrlens/navbar";

export const Route = createFileRoute("/co-founder")({
  head: () => ({
    meta: [
      { title: "AI Co-Founder — FoundrLens AI" },
      {
        name: "description",
        content: "Chat with an AI co-founder to pressure-test and plan your startup.",
      },
      { property: "og:title", content: "AI Co-Founder — FoundrLens AI" },
      {
        property: "og:description",
        content: "Chat with an AI co-founder to pressure-test and plan your startup.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoFounderPage,
});

const suggestedQuestions = [
  "Pressure-test my startup idea",
  "What should I validate first?",
  "Help me plan my next 30 days",
  "How do I find my first users?",
];

function CoFounderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto w-full max-w-[880px] px-4 pb-24 pt-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">AI Co-Founder</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Pressure-test your idea, plan execution, and get unstuck — on demand.
            </p>
          </div>
          <DemoBadge label="Demo view" />
        </div>

        <div className="mt-8 flex flex-col items-center rounded-[10px] border border-border bg-card px-6 py-16 text-center">
          <MessageSquare className="size-5 text-tertiary" aria-hidden />
          <p className="mt-3 text-sm font-medium text-foreground">Chat coming soon</p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            The conversation view is ready — messaging becomes available once the AI backend is
            connected.
          </p>
        </div>

        <section aria-labelledby="suggested-heading" className="mt-8">
          <h2
            id="suggested-heading"
            className="text-sm font-medium uppercase tracking-wide text-tertiary"
          >
            What you'll be able to ask
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <li
                key={question}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {question}
              </li>
            ))}
          </ul>
        </section>

        {/* Disabled composer preview */}
        <div className="mt-8 flex items-center gap-3 rounded-[10px] border border-input bg-card px-4 py-3 opacity-60">
          <input
            type="text"
            disabled
            placeholder="Chat becomes available once the AI backend is connected."
            aria-label="Message the AI co-founder"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-tertiary"
          />
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-md bg-secondary text-muted-foreground"
          >
            <SendHorizonal className="size-4" />
          </span>
        </div>
      </main>
    </div>
  );
}
