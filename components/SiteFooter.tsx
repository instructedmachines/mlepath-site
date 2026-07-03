import Link from "next/link";
import { socials, CONTACT_EMAIL, NEWSLETTER_URL } from "@/data/socials";
import { SocialIcon } from "@/components/icons";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--black)", fontFamily: "var(--font-sans)" }}>
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "48px 28px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              textDecoration: "none",
              fontWeight: "var(--fw-heavy)" as never,
              fontSize: 19,
              letterSpacing: "-0.02em",
              color: "var(--ivory)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/chevron-white.svg"
              alt=""
              style={{ width: 24, height: 20, display: "block" }}
            />
            <span>
              MLE <span style={{ color: "var(--blue-400)" }}>Path</span>
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="footer-icon">
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            borderTop: "1px solid var(--graphite-900)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">
              {CONTACT_EMAIL}
            </a>
            <a href={NEWSLETTER_URL} className="footer-link">
              Newsletter <span style={{ color: "var(--blue-400)" }}>»</span>
            </a>
          </div>
          <div style={{ fontSize: 14, color: "var(--text-on-dark-mut)" }}>
            © 2026 MLE Path
          </div>
        </div>
      </div>
    </footer>
  );
}
