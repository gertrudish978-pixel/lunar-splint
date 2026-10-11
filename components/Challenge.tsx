import { constraints, massSteps, requirements, rubric, scenarios, splintMass } from "@/lib/content";
import FlipCard from "./FlipCard";

export default function Challenge() {
  return (
    <section id="challenge">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">The challenge</p>
          <h2>Why the Moon needs its own splint</h2>
          <p>
            The Lunar Splint Design Challenge comes from NASA&apos;s Exploration Medical Integrated Product Team (XMIPT)
            through the HUNCH program. High school teams design a splint that a lunar base can print on demand from a
            scan of the injured astronaut.
          </p>
        </div>
        <div className="prose narrow">
        <p>
          Astronauts on a lunar base face a high and poorly understood risk of musculoskeletal injury. Bone density
          drops during the trip, bulky suits make falls on rocky ground more likely, and suit mechanics load the
          same joints over and over.
        </p>
        <p>
          When an injury happens, getting back to Earth takes days at minimum. A splint on the Moon has to work as a
          long-term treatment device, worn day and night for weeks, and not only as emergency stabilization.
        </p>
        <p>
          Earth splints can&apos;t be stockpiled at $1M per kilogram, and they come in fixed sizes that fit poorly
          on limbs that have changed in space. No splint exists yet that is designed for the lunar environment.
          That is the gap we are designing for.
        </p>
        </div>
        <div className="flips">
          <FlipCard value="5" label="injury scenarios to choose from" heading="The 5 injury scenarios" items={scenarios} />
          <FlipCard value="6" label="design requirements to meet" heading="The 6 design requirements" items={requirements} />
          <FlipCard value="100" label="point judging rubric" heading="How the 100 points split" items={rubric} />
        </div>
        <div className="flips solo">
          <FlipCard value={splintMass.value} label={splintMass.label} heading="How to calculate the mass budget" items={massSteps} />
        </div>
        <p className="source">Figures from the official Lunar Splint Design Challenge student brief (habitat-use-only edition).</p>
        <div className="constraints">
          {constraints.map((c) => (
            <article key={c.title}>
              <p className="mono">{c.tag}</p>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
