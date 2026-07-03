import type { Metadata } from "next";
import NewsletterBlock from "@/components/NewsletterBlock";
import { socials, CONTACT_EMAIL } from "@/data/socials";
import { SocialIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about a program, a talk, or your specific situation — email ilya@mlepath.com. One inbox, and I read it.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "72px 28px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Contact
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
          One inbox. I read it.
        </h1>
        <p style={{ margin: 0, maxWidth: 620, fontSize: 18, color: "var(--graphite)", lineHeight: 1.6 }}>
          Questions about a program, a talk, or your specific situation — email is fastest.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="card-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginTop: 28,
            background: "var(--white)",
            border: "1px solid var(--silver)",
            borderRadius: "var(--radius-md)",
            padding: "18px 26px",
            textDecoration: "none",
            fontSize: 20,
            fontWeight: "var(--fw-demibold)" as never,
            color: "var(--blue-700)",
          }}
        >
          <span style={{ color: "var(--blue-500)", fontSize: 22 }}>»</span> {CONTACT_EMAIL}
        </a>
      </section>

      {/* Socials */}
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
          Elsewhere
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="card-hover"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "var(--white)",
                border: "1px solid var(--silver)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-sunken)",
                  border: "1px solid var(--silver-soft)",
                  color: "var(--graphite)",
                  flex: "none",
                }}
              >
                <SocialIcon icon={s.icon} size={s.icon === "youtube" ? 20 : 17} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: "var(--fw-demibold)" as never,
                    color: "var(--ink-700)",
                  }}
                >
                  {s.name}
                </span>
                <span style={{ fontSize: 14, color: "var(--ink-muted)" }}>{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "64px 28px 84px" }}>
        <NewsletterBlock
          heading="The most reliable way to hear from me"
          body="Weekly, specific, no hype. Unsubscribe any time."
        />
      </section>
    </>
  );
}
