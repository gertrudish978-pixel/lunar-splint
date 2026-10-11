import { heroStats, pdr } from "@/lib/content";
import Link from "next/link";
import Countdown from "./Countdown";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Team Lunova · NASA HUNCH · 2026–27</p>
          <h1>
            A splint printed <em>on the Moon.</em>
          </h1>
          <p className="lede">
            We are Lunova, a high school team designing OrthoPrint, a custom-fit, 3D-printable splint for an astronaut
            with a lateral ankle ligament tear on a lunar base, where the nearest hospital is days away.
          </p>
          <div className="ctas">
            <Link className="btn primary" href="/design/">See the design</Link>
            <Link className="btn" href="/survey/">Read our survey</Link>
          </div>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/concept-print.jpg")}
            alt="Illustration of a white lattice lower-leg splint being 3D printed inside a space station printer, with Earth visible through a window."
          />
          <figcaption>
            Concept illustration, AI-generated (ChatGPT image tool, logged in our notebook 09/07/2026). Not our final
            design.
          </figcaption>
        </figure>
      </div>
      <div className="wrap mission-wrap">
        <div className="mission">
          <div className="next">
            <p className="eyebrow">Next milestone</p>
            <strong>PDR · {pdr.dates}</strong>
            <small>
              Preliminary Design Review · {pdr.region}, {pdr.location} · 40–50% prototype
            </small>
            <Countdown to={pdr.start} />
          </div>
          {heroStats.map((s) => (
            <div className="stat" key={s.value}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
