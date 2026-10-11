import { deliverables, reviews, timeline } from "@/lib/content";
import Pill from "./Pill";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Roadmap</p>
          <h2>Timeline, deliverables and reviews</h2>
          <p>Our project timeline from the team presentation, then the five deliverables the challenge asks for.</p>
        </div>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.when} className={t.done ? "done" : t.current ? "current" : undefined}>
              <b>{t.when}</b>
              <span>{t.what}</span>
            </li>
          ))}
        </ol>
        <div className="road spaced">
          <ol>
            {deliverables.map((d, i) => (
              <li key={d.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{d.title}</strong>
                  <span>{d.body}</span>
                </div>
                <Pill status={d.status} />
              </li>
            ))}
          </ol>
        </div>
        <div className="reviews">
          {reviews.map((r) => (
            <article key={r.name} className={r.current ? "on" : undefined}>
              <b>{r.name}</b>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
