import { criteriaMet, innovations, nextSteps, prototypeName, prototypeSlides, spec, testResults } from "@/lib/content";
import { asset } from "@/lib/asset";
import MassCalculator from "./MassCalculator";
import Pill from "./Pill";

export default function Design() {
  return (
    <section id="design">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Our scenario · {prototypeName}</p>
          <h2>Lateral ankle ligament tear</h2>
          <p>
            A rolled ankle on uneven habitat flooring can tear the ligaments on the outer side of the ankle, and healing
            takes 3 to 26 weeks. Our splint, {prototypeName}, is printed from a scan of the astronaut&apos;s leg,
            unlatches to fit on vertically, and holds the ankle firm with reusable straps.
          </p>
        </div>
        <div className="two">
          <div className="spec">
            <header>
              <span>Design spec sheet</span>
              <span>Rev. Oct 2026</span>
            </header>
            <dl>
              {spec.map((row) => (
                <div key={row.label} style={{ display: "contents" }}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.value} {row.status && <Pill status={row.status} />}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3>Our lunar innovations</h3>
            <p className="sub">
              The brief requires at least one lunar-specific innovation. We picked three from the brief&apos;s list.
            </p>
            <div className="innov">
              <ul>
                {innovations.map((i) => (
                  <li key={i.name}>
                    <span className="tag">{i.tag}</span>
                    <strong>{i.name}</strong>
                    <span>{i.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="spaced">
          <div className="prose">
            <p className="eyebrow">Prototype #1 &amp; testing</p>
            <h3>What we printed, and what broke</h3>
            <p>
              We printed test samples in PETG and TPU, bent them, and hung weights from them. Holes made the samples
              too flexible, so the shell is now solid and the straps carry the support.
            </p>
          </div>
          <div className="gallery spaced-sm">
            {prototypeSlides.map((g) => (
              <figure key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(g.src)} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="two spaced">
          <div className="spec">
            <header>
              <span>Test results</span>
              <span>Oct 2026</span>
            </header>
            <dl>
              {testResults.map((t) => (
                <div key={t.sample} style={{ display: "contents" }}>
                  <dt>{t.sample}</dt>
                  <dd>
                    {t.result} <Pill status={t.outcome === "Chosen" ? "ok" : "todo"} label={t.outcome} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="prose">
            <h3>Criteria it meets</h3>
            <ul className="checks">
              {criteriaMet.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3>Next tests</h3>
            <ul>
              {nextSteps.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="two spaced">
          <div className="prose">
            <p className="eyebrow">Mass &amp; print time</p>
            <h3>Every gram costs $1,000</h3>
            <p>
              Our real mass and print time will come from the final CAD model. Until then, this calculator follows the
              brief&apos;s five-step method with example numbers; change them to see how mass and launch cost move.
            </p>
          </div>
          <MassCalculator />
        </div>
      </div>
    </section>
  );
}
