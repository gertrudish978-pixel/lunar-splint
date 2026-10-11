"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/lib/pages";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <Link className="brand" href="/">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="11" r="2.4" fill="currentColor" />
            <circle cx="19" cy="13" r="1.6" fill="currentColor" />
            <circle cx="14" cy="20" r="2" fill="currentColor" />
            <path d="M4 22 Q15 16 26 22" fill="none" stroke="var(--peek)" strokeWidth="2.4" />
          </svg>
          Lunova
        </Link>
        <ul>
          {pages.map((p) => {
            const active = path?.replace(/\/$/, "").endsWith(`/${p.slug}`);
            return (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`} aria-current={active ? "page" : undefined}>
                  {p.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
