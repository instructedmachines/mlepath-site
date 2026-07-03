import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

/** DS Button (lg). Internal hrefs use Next Link; external/anchor use <a>. */
export default function Button({ href, variant = "primary", children }: ButtonProps) {
  const className = `btn btn-lg btn-${variant}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
