import Link from "next/link";
import { digitalRecords, school, team, teachers, timeline } from "@/lib/content";
import { asset } from "@/lib/asset";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

// Home page sections below the page cards: where we are, the team, and our records.
export default function HomeExtras() {
  const now = timeline.findIndex((t) => t.current);
  const upcoming = timeline.slice(Math.max(0, now - 1), now + 3);
  return (
    <>
      <section className="home-band">
        <div className="wrap two">
          <div className="head">
            <p className="eyebrow">Where we are</p>
            <h2>On the road to PDR</h2>
            <p>Our timeline from the presentation. The full plan and the five deliverables are on the roadmap.</p>
            <p>
              <Link className="text-link" href="/roadmap/">See the full roadmap →</Link>
            </p>
          </div>
          <ol className="news">
            {upcoming.map((t) => (
              <li key={t.when} className={t.current ? "current" : t.done ? "done" : undefined}>
                <b>{t.when}</b>
                <span>{t.what}</span>
                {t.current && <em>Now</em>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head center">
            <p className="eyebrow">Meet the team</p>
            <h2>Three students, one splint</h2>
            <p>
              {school} · Teachers: {teachers}
            </p>
          </div>
          <div className="faces">
            {team.map((m) => (
              <figure key={m.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(m.photo)}  alt={`Headshot of ${m.name}`} />
                <figcaption>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="center-cta">
            <Link className="btn" href="/team/">More about the team</Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="head center">
            <p className="eyebrow">Digital records</p>
            <h2>Everything behind the design</h2>
            <p>Our notebook, problem statement, survey results, slides and brochure, all in one place.</p>
          </div>
          <ul className="record-buttons">
            {digitalRecords.map((r) => (
              <li key={r.href}>
                <a href={r.href} {...ext}>{r.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
