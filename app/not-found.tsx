import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section
      style={{ maxWidth: 720, margin: "0 auto", padding: "120px 28px", textAlign: "center" }}
    >
      <div className="eyebrow" style={{ marginBottom: 20 }}>
        404
      </div>
      <h1
        style={{
          margin: "0 0 18px",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: "var(--fw-heavy)" as never,
          letterSpacing: "var(--track-display)",
          color: "var(--ink-700)",
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p style={{ margin: "0 0 32px", fontSize: 18, color: "var(--graphite)", lineHeight: 1.6 }}>
        Like a demo in production, it looked real until you clicked it. Try the{" "}
        <Link href="/" className="link-inline">
          home page
        </Link>{" "}
        instead.
      </p>
      <Button href="/">Back to safety</Button>
    </section>
  );
}
