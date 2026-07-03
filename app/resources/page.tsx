import type { Metadata } from "next";
import { tools } from "@/data/tools";
import { NEWSLETTER_URL } from "@/data/socials";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free interactive tools for the AI/ML job search you actually have — built from what hiring committees look for, not what recruiting blogs recycle.",
  alternates: { canonical: "/resources/" },
};

export default function Resources() {
  return (
    <>
      {/* Page header */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "72px 28px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Resources
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
          Tools for the job search you actually have
        </h1>
        <p style={{ margin: 0, maxWidth: 640, fontSize: 18, color: "var(--graphite)", lineHeight: 1.6 }}>
          Interactive tools, free to use. Built from what I see on hiring committees, not from what
          recruiting blogs recycle.
        </p>
      </section>

      {/* Tools */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "64px 28px 0" }}>
        <h2
          style={{
            margin: "0 0 24px",
            fontSize: "var(--fs-h3)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-heading)",
            color: "var(--ink-700)",
          }}
        >
          Tools
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {tools.map((tool) => (
            <a
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="tool-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "var(--white)",
                border: "1px solid var(--silver)",
                borderTop: "3px solid var(--blue-500)",
                borderRadius: "var(--radius-md)",
                padding: 28,
                textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    fontSize: "var(--fs-eyebrow)",
                    letterSpacing: "var(--track-eyebrow)",
                    textTransform: "uppercase",
                    fontWeight: "var(--fw-demibold)" as never,
                    color: "var(--blue-700)",
                    background: "var(--blue-50)",
                    border: "1px solid var(--blue-100)",
                    borderRadius: "var(--radius-pill)",
                    padding: "3px 12px",
                  }}
                >
                  Interactive tool
                </span>
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--ink-700)",
                  lineHeight: 1.25,
                }}
              >
                {tool.title}
              </div>
              <p style={{ margin: 0, fontSize: 15, color: "var(--graphite)", lineHeight: 1.6, flex: 1 }}>
                {tool.description}
              </p>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: "var(--fw-demibold)" as never,
                  color: "var(--blue-500)",
                }}
              >
                Open the tool »
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Guides & courses */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "64px 28px 84px" }}>
        <h2
          style={{
            margin: "0 0 24px",
            fontSize: "var(--fs-h3)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-heading)",
            color: "var(--ink-700)",
          }}
        >
          Guides &amp; courses
        </h2>
        <div
          style={{
            background: "var(--surface-sunken)",
            border: "1px dashed var(--silver)",
            borderRadius: "var(--radius-md)",
            padding: 32,
            maxWidth: 720,
          }}
        >
          <div className="eyebrow-muted" style={{ marginBottom: 10 }}>
            Coming soon
          </div>
          <p style={{ margin: 0, fontSize: 16, color: "var(--graphite)", lineHeight: 1.65, maxWidth: 560 }}>
            Written guides and self-paced courses are in the works. Meanwhile, the same material
            ships weekly on the{" "}
            <a href={NEWSLETTER_URL} className="link-inline">
              newsletter
            </a>{" "}
            and{" "}
            <a href="https://www.youtube.com/@MLEpath" className="link-inline">
              YouTube
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
