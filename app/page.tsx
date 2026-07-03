import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import NewsletterBlock from "@/components/NewsletterBlock";
import { offerings } from "@/data/offerings";
import { socials, CONTACT_EMAIL } from "@/data/socials";

export const metadata: Metadata = {
  description:
    "The market is oversaturated with demos. It is starving for engineers. Break into ML/AI engineering, clear the modern interview loop, and grow once you are in.",
  alternates: { canonical: "/" },
};

const CLIENT_LOGOS: { src: string; alt: string; height: number; radius?: number }[] = [
  { src: "/assets/clients/meta.png", alt: "Meta", height: 34 },
  { src: "/assets/clients/google.png", alt: "Google", height: 38 },
  { src: "/assets/clients/apple.png", alt: "Apple", height: 38 },
  { src: "/assets/clients/uber.png", alt: "Uber", height: 38, radius: 8 },
  { src: "/assets/clients/snap.png", alt: "Snap", height: 36 },
  { src: "/assets/clients/stripe.png", alt: "Stripe", height: 30 },
  { src: "/assets/clients/notion.png", alt: "Notion", height: 38 },
  { src: "/assets/clients/block.png", alt: "Block", height: 30 },
  { src: "/assets/clients/anthropic.png", alt: "Anthropic", height: 34 },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Ilya Reznik",
      url: "https://mlepath.com/about/",
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: "ML/AI engineering coach",
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "Organization",
      name: "MLE Path",
      url: "https://mlepath.com",
      logo: "https://mlepath.com/assets/logo/chevron-blue.svg",
      sameAs: socials.map((s) => s.href),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        style={{ maxWidth: 900, margin: "0 auto", padding: "96px 28px 72px", textAlign: "center" }}
      >
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          For engineers building careers in AI/ML
        </div>
        <h1
          style={{
            margin: "0 0 22px",
            fontSize: "clamp(40px, 6.5vw, 68px)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-display)",
            lineHeight: "var(--lh-display)" as never,
            color: "var(--ink-700)",
          }}
        >
          The market is oversaturated with{" "}
          <span style={{ color: "var(--pink-500)" }}>demos.</span> It is starving for{" "}
          <span style={{ color: "var(--blue-500)" }}>engineers.</span>
        </h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 620,
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--graphite)",
          }}
        >
          MLE Path is how working engineers break into ML and AI engineering roles, clear the
          modern interview loop, and grow once they are in. Built and taught by one practitioner —
          fifteen years in production ML, not a course factory.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <Button href="/offerings/">See the offerings</Button>
          <Button href="#which" variant="secondary">
            Which one is for me?
          </Button>
        </div>
      </section>

      {/* Credibility strip */}
      <section style={{ background: "var(--black)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "56px 28px 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 32,
            }}
          >
            {[
              { figure: "15 years", label: "building AI/ML systems in production", color: "var(--ivory)" },
              { figure: "1,000+", label: "engineers helped since 2020", color: "var(--green-500)" },
              { figure: "ex-Meta", label: "Staff Engineer, Ads", color: "var(--ivory)" },
              { figure: "ex-Shopify", label: "Applied AI manager & hiring manager", color: "var(--ivory)" },
            ].map((item) => (
              <div key={item.figure}>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: "var(--fw-heavy)" as never,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: item.color,
                  }}
                >
                  {item.figure}
                </div>
                <div style={{ fontSize: 14, color: "var(--text-on-dark-mut)", marginTop: 8 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "72px 28px 0" }}>
        <h2
          style={{
            margin: "0 0 6px",
            fontSize: "var(--fs-h4)",
            fontWeight: "var(--fw-demibold)" as never,
            letterSpacing: "var(--track-heading)",
            color: "var(--ink-700)",
            maxWidth: 680,
          }}
        >
          Since 2020, my frameworks and coaching have helped engineers land ML and AI roles at:
        </h2>
        <div style={{ fontSize: 14, color: "var(--ink-muted)", marginBottom: 32 }}>
          (not an exclusive list)
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 44, flexWrap: "wrap" }}>
          {CLIENT_LOGOS.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={{
                height: logo.height,
                width: "auto",
                display: "block",
                ...(logo.radius ? { borderRadius: logo.radius } : {}),
              }}
            />
          ))}
        </div>
      </section>

      {/* Which one is for me */}
      <section
        id="which"
        style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "84px 28px 0" }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            fontSize: "var(--fs-h2)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-heading)",
            color: "var(--ink-700)",
          }}
        >
          Which one is for me?
        </h2>
        <p
          style={{
            margin: "0 0 28px",
            fontSize: 17,
            color: "var(--graphite)",
            maxWidth: 640,
            lineHeight: 1.6,
          }}
        >
          Three offerings, three situations. Find your row.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid var(--silver)",
            borderRadius: "var(--radius-md)",
            background: "var(--white)",
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          {offerings.map((o, i) => (
            <Link
              key={o.id}
              href={`/offerings/#${o.id}`}
              className="which-row"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 14,
                padding: "18px 24px",
                textDecoration: "none",
                borderBottom: i < offerings.length - 1 ? "1px solid var(--silver-soft)" : "none",
              }}
            >
              <span
                style={{
                  color: "var(--blue-500)",
                  fontWeight: "var(--fw-demibold)" as never,
                  fontSize: 18,
                  flex: "none",
                }}
              >
                »
              </span>
              <span style={{ fontSize: 16, color: "var(--graphite)", flex: 1, minWidth: 240 }}>
                {o.situation}
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--blue-700)",
                  whiteSpace: "nowrap",
                }}
              >
                {o.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Offering cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {offerings.map((o) => (
            <div
              key={o.id}
              className="card-hover"
              style={{
                background: "var(--white)",
                border: "1px solid var(--silver)",
                borderTop: "3px solid var(--blue-500)",
                borderRadius: "var(--radius-md)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div className="eyebrow-muted">{o.eyebrow}</div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--ink-700)",
                  lineHeight: 1.25,
                }}
              >
                {o.title}
              </div>
              <p style={{ margin: 0, fontSize: 15, color: "var(--graphite)", lineHeight: 1.6, flex: 1 }}>
                {o.cardBlurb}
              </p>
              <Link href={`/offerings/#${o.id}`} className="link-arrow">
                Details »
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "84px 28px" }}>
        <NewsletterBlock
          heading="The career advice I wish someone had given me"
          body="What is actually changing in ML hiring, and what to do about it — written for one engineer: you. No hype, no rockets. Unsubscribe any time."
        />
      </section>
    </>
  );
}
