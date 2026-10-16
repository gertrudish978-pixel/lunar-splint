"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import { pages } from "@/lib/pages";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src={asset("/images/school-logo.png")} alt="" width={36} height={36} />
          <span>
            Lunova
            <small>NASA HUNCH 2026–27</small>
          </span>
        </Link>
        <ul>
          {pages.map((p) => {
            const active = path?.replace(/\/$/, "").endsWith(`/${p.slug}`);
            return (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}/`}
                  aria-current={active ? "page" : undefined}
                  className={p.slug === "pdr" ? "nav-cta" : undefined}
                >
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
