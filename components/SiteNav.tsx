"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Offerings", href: "/offerings/", key: "offerings" },
  { label: "Resources", href: "/resources/", key: "resources" },
  { label: "About", href: "/about/", key: "about" },
  { label: "Contact", href: "/contact/", key: "contact" },
];

export default function SiteNav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname.replace(/\/+$/, "") === href.replace(/\/+$/, "");

  return (
    <header className="site-header">
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
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
            fontSize: 20,
            letterSpacing: "-0.02em",
            color: "var(--ink-700)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo/chevron-blue.svg"
            alt="MLE Path"
            style={{ width: 26, height: 21, display: "block" }}
          />
          <span>
            MLE <span style={{ color: "var(--blue-500)" }}>Path</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`nav-link${isActive(l.href) ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Main mobile">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`nav-mobile-link${isActive(l.href) ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
