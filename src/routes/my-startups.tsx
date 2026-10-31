import { createFileRoute } from "@tanstack/react-router";
import { Compass, Lightbulb } from "lucide-react";
import { Navbar, DemoBadge } from "@/components/foundrlens/navbar";
import { exampleStartups } from "@/components/foundrlens/recently-explored";

export const Route = createFileRoute("/my-startups")({
  head: () => ({
    meta: [
      { title: "My Startups — FoundrLens AI" },
      {
        name: "description",
        content: "Your saved startup ideas and explored opportunities on FoundrLens AI.",
      },
      { property: "og:title", content: "My Startups — FoundrLens AI" },
      {
        property: "og:description",
        content: "Your saved startup ideas and explored opportunities on FoundrLens AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyStartupsPage,
});

function MyStartupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto w-full max-w-[880px] px-4 pb-24 pt-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">My Startups</h1>
          <DemoBadge label="Demo data" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Saved ideas appear here once you're signed in and a database is connected.
        </p>

        <div className="mt-10 flex flex-col items-center rounded-[10px] border border-border bg-card px-6 py-14 text-center">
          <Lightbulb className="size-5 text-tertiary" aria-hidden />
          <p className="mt-3 text-sm font-medium text-foreground">No saved startups yet</p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Analyze an idea on the homepage or save opportunities from the explorer — they'll show
            up here.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a
              href="/analyze"
              className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Analyze an idea
            </a>
            <a
              href="/explore"
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Compass className="size-4" aria-hidden />
              Explore opportunities
            </a>
          </div>
        </div>

        {/* Example ideas until a user database is connected */}
        <section aria-labelledby="example-ideas-heading" className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="example-ideas-heading"
              className="text-sm font-medium uppercase tracking-wide text-tertiary"
            >
              Example ideas
            </h2>
            <DemoBadge />
          </div>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-[10px] border border-border bg-card">
            {exampleStartups.map((startup) => (
              <li key={startup.name} className="px-5 py-3.5">
                <span className="text-sm font-medium text-foreground">{startup.name}</span>
                <p className="mt-0.5 text-sm text-muted-foreground">{startup.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
