import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, TriangleAlert } from "lucide-react";

export const Route = createFileRoute("/analyze")({
  validateSearch: (search: Record<string, unknown>) => ({
    idea:
      typeof search.idea === "string" && search.idea.trim().length > 0
        ? search.idea.trim()
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Idea Analysis — FoundrLens AI" },
      {
        name: "description",
        content: "Analyze a startup idea: problem, customers, strengths, risks and next steps.",
      },
      { property: "og:title", content: "Idea Analysis — FoundrLens AI" },
      {
        property: "og:description",
        content: "Analyze a startup idea: problem, customers, strengths, risks and next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnalyzePage,
});

const sections = [
  "Problem being solved",
  "Target customers",
  "Strengths",
  "Risks and weaknesses",
  "Competitors to investigate",
  "MVP feature recommendations",
  "Customer validation questions",
  "Recommended next steps",
] as const;

function AnalyzePage() {
  const { idea } = Route.useSearch();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto w-full max-w-[880px] px-4 pb-24 pt-10 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to home
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Idea Analysis</h1>
          <DemoBadge label="Demo view" />
        </div>

        {idea ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Analyzing: <span className="text-foreground">{idea}</span>
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            No idea submitted yet — describe one on the{" "}
            <Link to="/" className="text-primary hover:underline">
              homepage
            </Link>
            .
          </p>
        )}

        {/* Demo banner: no fake AI output is shown. */}
        <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-warning/30 bg-card px-4 py-3">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Demo mode.</span> This is a UI preview —
            AI-generated analysis will appear here once the backend is connected. The sections
            below show where each part of the analysis will render.
          </p>
        </div>

        {/* Idea overview — echoes the submitted idea */}
        <section aria-labelledby="overview-heading" className="mt-8">
          <h2
            id="overview-heading"
            className="text-sm font-medium uppercase tracking-wide text-tertiary"
          >
            Startup idea overview
          </h2>
          <div className="mt-3 rounded-[10px] border border-border bg-card p-5">
            {idea ? (
              <p className="text-[15px] leading-relaxed text-foreground">{idea}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Submit an idea from the homepage search bar to see it summarized here.
              </p>
            )}
          </div>
        </section>

        {/* Placeholder sections — loading skeleton until analysis exists */}
        <section aria-label="Analysis sections" className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section}
                className="rounded-[10px] border border-border bg-card p-5"
              >
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{section}</h3>
                <div className="mt-3 space-y-2" aria-hidden>
                  <div className="h-3 w-full animate-pulse rounded bg-accent" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-accent" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-accent" />
                </div>
                <p className="mt-3 text-xs text-tertiary">Awaiting analysis — backend not connected.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
