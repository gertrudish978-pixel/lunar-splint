import { innovations, spec } from "@/lib/content";
import ConceptSketch from "./ConceptSketch";
import MassCalculator from "./MassCalculator";
import MassEstimate from "./MassEstimate";
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
            <h3>Our lunar innovations</h3>
            <p className="sub">
              The brief requires at least one lunar-specific innovation built into the geometry. We combine two, which the
              brief encourages, and both come straight from our notebook research.
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
            <p className="eyebrow">Concept sketch</p>
            <h3>How the pieces fit together</h3>
            <p>
              A rigid shell runs down the back of the calf, behind the heel and under the foot, and holds the foot
              pointed down so the healing tendon stays slack. The lattice liner sits between shell and skin, and three
              ratchet straps close it. Our CAD model will follow this layout.
            </p>
          </div>
          <ConceptSketch />
        </div>

        <div className="stack spaced">
          <div className="prose">
            <p className="eyebrow">Mass &amp; print time</p>
            <h3>About 144 grams, printed in under 7 hours</h3>
            <p>
              We estimated each part with the brief&apos;s mass method. The full splint lands inside the typical
              80–150 g range for an ankle splint, and prints well inside the 4–8 hour window.
            </p>
          </div>
          <MassEstimate />
        </div>

        <div className="two spaced">
          <div className="prose">
            <p className="eyebrow">Try it yourself</p>
            <h3>Every gram costs $1,000</h3>
            <p>
              The brief asks every team to estimate filament mass and its launch cost, then argue why printing one
              custom splint beats launching a full set of fixed sizes. This calculator follows the brief&apos;s
              five-step method. It starts with our shell numbers; change them to see how mass and cost move.
            </p>
          </div>
          <MassCalculator />
        </div>
      </div>
    </section>
  );
}
