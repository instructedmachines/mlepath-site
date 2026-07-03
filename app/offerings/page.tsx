import type { Metadata } from "next";
import Button from "@/components/Button";
import Callout from "@/components/Callout";
import { offerings } from "@/data/offerings";

export const metadata: Metadata = {
  title: "Offerings",
  description:
    "Three ways to work with me: the 4-Week Interview Accelerator, the 6-Month Transition to MLE Program, and 1-on-1 ML System Design Mocks. No TAs, no outsourced grading.",
  alternates: { canonical: "/offerings/" },
};

const accelerator = offerings.find((o) => o.id === "accelerator")!;
const transition = offerings.find((o) => o.id === "transition")!;
const mock = offerings.find((o) => o.id === "mock")!;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "4-Week Interview Accelerator",
      description:
        "A four-week, cohort-based ML/AI interview preparation sprint with weekly 1-on-1 sessions, tailored to each candidate's target companies.",
      url: "https://mlepath.com/offerings/#accelerator",
      provider: { "@type": "Organization", name: "MLE Path", url: "https://mlepath.com" },
    },
    {
      "@type": "Course",
      name: "6-Month Transition to MLE Program",
      description:
        "A six-month program for SWEs, data scientists, and data engineers transitioning into ML/AI engineering, built around an individual project, deep fundamentals, and an open-source capstone.",
      url: "https://mlepath.com/offerings/#transition",
      provider: { "@type": "Organization", name: "MLE Path", url: "https://mlepath.com" },
    },
    {
      "@type": "Service",
      name: "1-on-1 ML System Design Mock",
      description:
        "A 45-minute mock ML system design interview with immediate, actionable feedback.",
      url: "https://mlepath.com/offerings/#mock",
      provider: { "@type": "Organization", name: "MLE Path", url: "https://mlepath.com" },
    },
  ],
};

const bullet = (
  <span
    style={{ color: "var(--blue-500)", fontWeight: "var(--fw-demibold)" as never, flex: "none" }}
  >
    »
  </span>
);

const acceleratorFeatures = [
  "Four weekly 1-on-1 sessions with me — no TAs, no outsourced grading",
  "Weekly live cohort deep dives",
  "Friday office hours",
  "Full curriculum with lifetime access",
  "Peer mocks and a private Discord",
  "One year of office hours after graduation",
];

const transitionSteps: { title: string; body: string }[] = [
  { title: "Individual project", body: " — your own idea, with my architecture reviews." },
  { title: "Deep fundamentals", body: " — classical ML, Bayesian methods, RL, MLOps." },
  {
    title: '"Tiger Team" capstone',
    body: " — the cohort trains and ships a specialized transformer from scratch, open source, to real users.",
  },
  {
    title: "Interview Accelerator seat",
    body: " — included at the end, when you're ready to use it.",
  },
];

const sectionCard: React.CSSProperties = {
  background: "var(--white)",
  border: "1px solid var(--silver)",
  borderTop: "3px solid var(--blue-500)",
  borderRadius: "var(--radius-lg)",
  padding: 40,
};

const h2Style: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: "var(--fs-h2)",
  fontWeight: "var(--fw-heavy)" as never,
  letterSpacing: "var(--track-heading)",
  color: "var(--ink-700)",
};

const bodyStyle: React.CSSProperties = {
  margin: "0 0 14px",
  maxWidth: 680,
  fontSize: 17,
  color: "var(--graphite)",
  lineHeight: 1.65,
};

export default function Offerings() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "72px 28px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Offerings
        </div>
        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-display)",
            lineHeight: "var(--lh-tight)" as never,
            color: "var(--ink-700)",
          }}
        >
          Three ways to work with me. All of them are me.
        </h1>
        <p style={{ margin: 0, maxWidth: 640, fontSize: 18, color: "var(--graphite)", lineHeight: 1.6 }}>
          No TAs, no outsourced grading, no LLM &quot;support.&quot; Every session, review, and
          piece of feedback comes from one practitioner. Pricing lives on each program&apos;s page.
        </p>

        <div style={{ marginTop: 32, maxWidth: 720 }}>
          <Callout eyebrow="Not sure which?" title="Find your row">
            Interviewing soon and already an MLE or AI engineer — the Accelerator. Loop within
            about two weeks — the Mock. No production ML experience yet — the Transition Program.
          </Callout>
        </div>
      </section>

      {/* Accelerator */}
      <section
        id="accelerator"
        style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "84px 28px 0" }}
      >
        <div style={sectionCard}>
          <div className="eyebrow-muted" style={{ marginBottom: 12 }}>
            For current MLEs and AI engineers heading into interviews
          </div>
          <h2 style={h2Style}>4-Week Interview Accelerator</h2>
          <p style={bodyStyle}>
            The modern loop is fractured. Meta runs AI-assistant coding rounds; elsewhere, rigorous
            math fundamentals are back. There is no one prep that fits every loop — so this one is
            tailored to your target companies, whether that is FAANG, a high-growth startup, or a
            frontier lab.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 24 }}>
            The most valuable part, according to graduates: real, aggressive pushback on your
            designs — before a hiring committee delivers it instead.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "10px 32px",
              marginBottom: 28,
            }}
          >
            {acceleratorFeatures.map((f) => (
              <div key={f} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                {bullet}
                <span style={{ fontSize: 15, color: "var(--graphite)", lineHeight: 1.55 }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <Button href={accelerator.ctaHref}>{accelerator.ctaLabel}</Button>
            <span style={{ fontSize: 14, color: "var(--ink-muted)" }}>
              Cohorts are capped small — they have sold out.
            </span>
          </div>
        </div>
      </section>

      {/* Transition program */}
      <section
        id="transition"
        style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "48px 28px 0" }}
      >
        <div style={sectionCard}>
          <div className="eyebrow-muted" style={{ marginBottom: 12 }}>
            For SWEs, data scientists, and data engineers crossing into ML and AI engineering
          </div>
          <h2 style={h2Style}>6-Month Transition to MLE Program</h2>
          <p style={{ ...bodyStyle, marginBottom: 24 }}>
            Certificates and toy portfolios don&apos;t get you hired — proof of work does. This
            program is built around producing it, with me acting as your Tech Lead throughout.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 28,
              maxWidth: 720,
            }}
          >
            {transitionSteps.map((step, i) => (
              <div key={step.title} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                <span
                  style={{
                    flex: "none",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: "var(--fw-demibold)" as never,
                    background: "var(--blue-50)",
                    color: "var(--blue-700)",
                    border: "1.5px solid var(--blue-200)",
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 16, color: "var(--graphite)", lineHeight: 1.55 }}>
                  <b style={{ color: "var(--ink-700)", fontWeight: "var(--fw-demibold)" as never }}>
                    {step.title}
                  </b>
                  {step.body}
                </span>
              </div>
            ))}
          </div>
          <Button href={transition.ctaHref}>{transition.ctaLabel}</Button>
        </div>
      </section>

      {/* Mock */}
      <section
        id="mock"
        style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "48px 28px 84px" }}
      >
        <div style={sectionCard}>
          <div className="eyebrow-muted" style={{ marginBottom: 12 }}>
            For candidates whose loop is days away
          </div>
          <h2 style={h2Style}>1-on-1 ML System Design Mock</h2>
          <p style={{ ...bodyStyle, marginBottom: 24 }}>
            45 minutes on a realistic scenario, then immediate, blunt feedback — plus guidance on
            how to handle the rest of your loop. When the interview is next week, this is the
            highest-leverage hour you can buy.
          </p>
          <Button href={mock.ctaHref}>{mock.ctaLabel}</Button>
        </div>
      </section>
    </>
  );
}
