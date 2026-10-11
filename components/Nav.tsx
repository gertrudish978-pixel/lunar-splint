const links = [
  ["challenge", "Challenge"],
  ["design", "Design"],
  ["survey", "Survey"],
  ["research", "Research"],
  ["roadmap", "Roadmap"],
  ["team", "Team"],
];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="brand" href="#top">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="11" r="2.4" fill="currentColor" />
            <circle cx="19" cy="13" r="1.6" fill="currentColor" />
            <circle cx="14" cy="20" r="2" fill="currentColor" />
            <path d="M4 22 Q15 16 26 22" fill="none" stroke="var(--peek)" strokeWidth="2.4" />
          </svg>
          LunOva
        </a>
        <ul>
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
