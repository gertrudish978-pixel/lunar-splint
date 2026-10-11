import { gallery } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Research() {
  return (
    <section id="research">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Research &amp; inspiration</p>
          <h2>From our design notebook</h2>
          <p>
            Our notebook runs from August 11 to September 18, 2026. Early on we realized a cast and a splint are
            different things, and switched to a splint because that is what the challenge asks for. These are the ideas
            and samples that shaped our thinking.
          </p>
        </div>
        <div className="gallery">
          {gallery.map((g) => (
            <figure key={g.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(g.src)} alt={g.alt} className={g.contain ? "contain" : undefined} loading="lazy" />
              <figcaption>
                {g.caption}
                <small>{g.meta}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="interview">
          <div>
            <p className="eyebrow">Interview · school athletic trainer · 9/18</p>
            <p>
              We asked our trainer what she uses on student athletes. She showed us moldable splint materials for
              fingers, arms and legs, and explained the difference between a splint and a brace.
            </p>
          </div>
          <div>
            <p className="eyebrow">What we learned</p>
            <p>
              A splint is for injuries that need almost no motion, while a brace allows some movement. She advised
              making it firm and tight. Our next question for her is how a tendon tear like ours should be treated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
