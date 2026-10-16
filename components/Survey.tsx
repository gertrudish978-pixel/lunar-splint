import { concerns, surveyCharts, surveyTotal } from "@/lib/content";

export default function Survey() {
  return (
    <section id="survey">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Assessment survey · {surveyTotal} responses · Aug 26–27, 2026</p>
          <h2>What {surveyTotal} classmates told us</h2>
          <p>
            We surveyed students aged 14–19 at our school to learn how people think about splints, sizing and
            3D-printed medical devices. They aren&apos;t astronauts, but their answers shaped what we prioritize.
          </p>
        </div>
        <div className="charts">
          {surveyCharts.map((c) => (
            <div className="chart" key={c.title}>
              <h3>{c.title}</h3>
              <p className="q">{c.question}</p>
              {c.rows.map((r) => {
                const pct = (r.count / surveyTotal) * 100;
                return (
                  <div className={`bar${r.highlight ? " hi" : ""}`} key={r.label}>
                    <span>{r.label}</span>
                    <div className="track">
                      <div className="fill" style={{ width: `${pct.toFixed(1)}%` }} />
                    </div>
                    <span className="n">
                      {r.count} · {Math.round(pct)}%
                    </span>
                  </div>
                );
              })}
              <p className="take">{c.takeaway}</p>
            </div>
          ))}
        </div>

        <div className="concerns">
          <div className="head tight">
            <h3>Their concerns, and how we plan to answer them</h3>
            <p>The open-ended questions people asked, and how our design answers each one.</p>
          </div>
          <div className="ctable">
            <table>
              <thead>
                <tr>
                  <th>What people asked</th>
                  <th>Example response</th>
                  <th>Design response</th>
                </tr>
              </thead>
              <tbody>
                {concerns.map((c) => (
                  <tr key={c.topic}>
                    <td>{c.topic}</td>
                    <td>
                      <q>{c.quote}</q>
                    </td>
                    <td>{c.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
