import type { Metadata } from "next";
import Link from "next/link";
import PathSteps from "@/components/PathSteps";
import { NEWSLETTER_URL } from "@/data/socials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ilya Reznik — 15 years building AI/ML systems at Adobe, Twitter, Meta, and Shopify. Since 2020, 1,000+ engineers helped to break in, clear interviews, and get promoted.",
  alternates: { canonical: "/about/" },
  openGraph: {
    images: ["/assets/photos/ilya-headshot-gray.jpg"],
  },
};

const transitionSteps = [
  {
    title: "Why ML?",
    body: "Does an ML career actually fit you? What do you hope to achieve by moving into AI/ML?",
  },
  {
    title: "Fall in love",
    body: "Do a project you care about. Find the real challenges and frame your future learning.",
  },
  {
    title: "Learn",
    body: "Now take the class. Only now do you have enough context for it to be useful.",
  },
  {
    title: "Showcase",
    body: "Show you can do ML in situations that matter — a validated project, not a toy.",
  },
  {
    title: "Get a job",
    body: "Know which level and tier to target, then prepare. Preparation offsets less experience.",
  },
];

const interviewCategories = [
  {
    title: "DSA",
    body: "Pattern recognition plus fluency in your language. Rewards consistent effort over cramming.",
  },
  {
    title: "ML system design",
    body: "Best prep is designing systems. A few key concepts — and mocks — elevate your game.",
  },
  {
    title: "ML coding",
    body: "Code up a model or fix a bug in one. Knowing a few libraries well goes a long way.",
  },
  {
    title: "Fundamentals",
    body: "Any statistics or ML question is fair game. Understanding here makes you a better MLE, period.",
  },
  {
    title: "Behavioral",
    body: "Storytelling and listening — the HM round, the project deep dive. In other words: be human.",
  },
];

const h2Style: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: "var(--fs-h3)",
  fontWeight: "var(--fw-heavy)" as never,
  letterSpacing: "var(--track-heading)",
  color: "var(--ink-700)",
};

const pStyle: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: 17,
  color: "var(--graphite)",
  lineHeight: 1.65,
};

export default function About() {
  return (
    <>
      {/* Bio */}
      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "72px 28px 0",
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 320 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            About
          </div>
          <h1
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: "var(--fw-heavy)" as never,
              letterSpacing: "var(--track-display)",
              lineHeight: "var(--lh-tight)" as never,
              color: "var(--ink-700)",
            }}
          >
            I&apos;m Ilya. I build ML and AI systems — and the engineers who run them.
          </h1>
          <p style={pStyle}>
            I&apos;ve spent 15 years building AI/ML systems: leading ML for Adobe Analytics, owning
            model evaluations at Twitter, running a Staff-level team on Meta Ads, and managing
            Applied AI at Shopify — where I was also a hiring manager.
          </p>
          <p style={pStyle}>
            I recently spent a year back in the trenches inside a production AI org, so my advice
            is current — not a memory of how hiring worked in 2019. In the last six months alone
            I&apos;ve made 50+ hiring decisions as a hiring-committee member.
          </p>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Since 2020 I&apos;ve helped 1,000+ engineers break in, clear interviews, and get
            promoted — through the{" "}
            <a href={NEWSLETTER_URL} className="link-inline">
              newsletter
            </a>
            ,{" "}
            <a href="https://www.youtube.com/@MLEpath" className="link-inline">
              YouTube
            </a>
            , and the{" "}
            <Link href="/offerings/" className="link-inline">
              programs
            </Link>
            .
          </p>
        </div>
        <div style={{ flex: "0 0 340px", maxWidth: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photos/ilya-headshot-gray.jpg"
            alt="Ilya Reznik"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--silver)",
            }}
          />
        </div>
      </section>

      {/* 5-step transition path */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "84px 28px 0" }}>
        <h2 style={h2Style}>The 5-step transition path</h2>
        <p
          style={{
            margin: "0 0 28px",
            maxWidth: 640,
            fontSize: 16,
            color: "var(--graphite)",
            lineHeight: 1.6,
          }}
        >
          Your journey is your own, but I have seen these five steps work again and again. The
          trick is to do them <em>in order</em>.
        </p>
        <PathSteps steps={transitionSteps.map((s) => s.title)} current={0} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 20,
            marginTop: 28,
          }}
        >
          {transitionSteps.map((step) => (
            <div key={step.title}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--ink-700)",
                  marginBottom: 6,
                }}
              >
                {step.title}
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "var(--graphite)", lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 interview categories */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "84px 28px 84px" }}>
        <h2 style={h2Style}>The 5 interview categories</h2>
        <p
          style={{
            margin: "0 0 28px",
            maxWidth: 640,
            fontSize: 16,
            color: "var(--graphite)",
            lineHeight: 1.6,
          }}
        >
          Every ML loop is assembled from five kinds of rounds — and each has a different ideal
          preparation strategy.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 20,
          }}
        >
          {interviewCategories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "var(--white)",
                border: "1px solid var(--silver)",
                borderRadius: "var(--radius-md)",
                padding: 22,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--ink-700)",
                  marginBottom: 6,
                }}
              >
                {cat.title}
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "var(--graphite)", lineHeight: 1.6 }}>
                {cat.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
