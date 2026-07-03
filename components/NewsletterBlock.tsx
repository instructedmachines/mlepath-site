import { NEWSLETTER_EMBED_URL } from "@/data/socials";

interface NewsletterBlockProps {
  heading: string;
  body: string;
}

export default function NewsletterBlock({ heading, body }: NewsletterBlockProps) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--silver)",
        borderRadius: "var(--radius-lg)",
        padding: 40,
        display: "flex",
        gap: 40,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 280 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          The newsletter
        </div>
        <h2
          style={{
            margin: "0 0 12px",
            fontSize: "var(--fs-h3)",
            fontWeight: "var(--fw-heavy)" as never,
            letterSpacing: "var(--track-heading)",
            color: "var(--ink-700)",
          }}
        >
          {heading}
        </h2>
        <p style={{ margin: 0, fontSize: 16, color: "var(--graphite)", lineHeight: 1.6 }}>
          {body}
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 300 }}>
        <iframe
          src={NEWSLETTER_EMBED_URL}
          title="Subscribe to the MLE Path newsletter"
          style={{
            width: "100%",
            height: 150,
            border: "1px solid var(--silver)",
            borderRadius: "var(--radius-md)",
            background: "var(--white)",
          }}
        />
      </div>
    </div>
  );
}
