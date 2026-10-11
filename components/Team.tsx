import { team, teachers } from "@/lib/content";

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">The team</p>
          <h2>Who&apos;s building it</h2>
        </div>
        <div className="team">
          {team.map((m) => (
            <div className="member" key={m.name}>
              <div className="initials" aria-hidden="true">
                {m.initials}
              </div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
        <div className="mentors">
          <span>
            <b>Teachers:</b> {teachers}
          </span>
          <span>
            <b>Program:</b> NASA HUNCH, Lunar Splint Design Challenge
          </span>
        </div>
      </div>
    </section>
  );
}
