import { team, teamName } from "@/lib/content";
import { asset } from "@/lib/asset";
export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">The team</p>
          <h2>Team {teamName}</h2>
        </div>
        <div className="team">
          {team.map((m) => (
            <div className="member" key={m.name}>
              <img className="headshot" src={asset(m.photo)} alt={`Headshot of ${m.name}`} loading="lazy" />
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
