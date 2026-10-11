import { deliverables, reviews } from "@/lib/content";
import Pill from "./Pill";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Roadmap</p>
          <h2>Five deliverables, three reviews</h2>
          <p>The challenge asks for five deliverables, and HUNCH reviews the prototype at three stages.</p>
        </div>
        <div className="road">
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
