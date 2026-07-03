import type { ReactNode } from "react";

interface CalloutProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/** DS Callout — tinted card with eyebrow, title, body. */
export default function Callout({ eyebrow, title, children }: CalloutProps) {
  return (
    <div className="callout">
      <div className="eyebrow" style={{ marginBottom: 6 }}>
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: "var(--fw-demibold)" as never,
          color: "var(--ink-700)",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p style={{ margin: 0, fontSize: 16, color: "var(--graphite)", lineHeight: 1.6 }}>
        {children}
      </p>
    </div>
  );
}
