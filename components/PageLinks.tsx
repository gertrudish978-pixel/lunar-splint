import Link from "next/link";
import { pages } from "@/lib/pages";

// Cards linking to every section page, used on the home page.
export default function PageLinks() {
  return (
    <section className="explore">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Explore the project</p>
          <h2>Seven pages, one splint</h2>
        </div>
        <div className="cards">
          {pages.map((p, i) => (
            <Link key={p.slug} href={`/${p.slug}/`} className="card">
              <span className="card-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.label}</h3>
              <p>{p.blurb}</p>
              <span className="go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
