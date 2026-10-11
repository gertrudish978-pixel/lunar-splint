import { innovations, spec } from "@/lib/content";
import MassCalculator from "./MassCalculator";
import Pill from "./Pill";

export default function Design() {
  return (
    <section id="design">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Our scenario</p>
          <h2>Achilles partial tear</h2>
          <p>
            We chose the hardest scenario in the brief. The Achilles tendon connects the calf to the heel, and our
            purpose statement notes that in low gravity the calf-muscle unit stores and releases far less elastic
            energy. Our goal is a splint that is lightweight, adjustable, fits any user&apos;s limb geometry and is
            strong enough for long-term habitat use.
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
            <h3>Innovations we&apos;re exploring</h3>
            <p className="sub">
              The brief requires at least one lunar-specific innovation built into the geometry. These are the ones our
              research points to so far.
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

        <div className="two spaced">
          <div className="prose">
            <p className="eyebrow">Mass budget</p>
            <h3>Every gram costs $1,000</h3>
            <p>
              The brief asks every team to estimate filament mass and its launch cost, then argue why printing one
              custom splint beats launching a full set of fixed sizes. This calculator follows the brief&apos;s
              five-step method. The defaults are example numbers, not our design.
            </p>
          </div>
          <MassCalculator />
        </div>
      </div>
    </section>
  );
}
