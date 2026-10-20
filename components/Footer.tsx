import { digitalRecords, school } from "@/lib/content";
import { asset } from "@/lib/asset";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="foot-logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="team-logo" src={asset("/images/lunova-logo.svg")} alt="Lunova logo" width={140} height={125} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/school-logo.png")} alt={`${school} logo`} width={72} height={72} />
          </div>
          <strong>Team Lunova</strong>
          <span>{school}</span>
          <span>NASA HUNCH 2026–27 · Lunar Splint Design Challenge</span>
        </div>
        <div>
          <h3>References</h3>
          <ol>
            <li>
              Ad Hoc Committee of Members of the Space Medicine Association and the Society of NASA Flight Surgeons.
              (2008). Human health and performance for long-duration spaceflight.{" "}
              <i>Aviation, Space, and Environmental Medicine, 79</i>(6), 629–635.{" "}
              <a href="https://doi.org/10.3357/ASEM.2314.2008" {...ext}>doi.org/10.3357/ASEM.2314.2008</a>
            </li>
            <li>
              Bernaldo, A. (2026, April 27). 3D printed splints: Materials, design &amp; safety guide. Siraya Tech.{" "}
              <a href="https://siraya.tech/blogs/news/3d-printed-splints" {...ext}>siraya.tech</a>
            </li>
            <li>
              PubMed reference supplied with the challenge:{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/26564680/" {...ext}>pubmed.ncbi.nlm.nih.gov/26564680</a>
            </li>
            <li>Lunar Splint Design Challenge, Student Project Brief (Habitat Use Only).</li>
          </ol>
        </div>
        <div>
          <h3>Project</h3>
          <ol className="plain">
            {digitalRecords.map((r) => (
              <li key={r.href}>
                <a href={r.href} {...ext}>{r.label}</a>
              </li>
            ))}
            <li><a href="https://www.nasahunch.com/" {...ext}>About NASA HUNCH</a></li>
            <li>
              <a href="https://makerworld.com/en/models/236391-reusable-zip-tie" {...ext}>
                Reusable zip tie model (closure inspiration)
              </a>
            </li>
          </ol>
        </div>
        <div className="fine">
          <span>Team Lunova · NASA HUNCH 2026–27 student project</span>
          <span>A student design project. Not a medical device.</span>
        </div>
      </div>
    </footer>
  );
}
