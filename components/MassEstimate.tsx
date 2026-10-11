import { massEstimate } from "@/lib/content";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function MassEstimate() {
  const rows = massEstimate.parts.map((p) => ({
    ...p,
    grams: (p.volume * (p.infill / 100) + p.shell) * p.density,
  }));
  const total = rows.reduce((t, r) => t + r.grams, 0);
  const hours = total / massEstimate.printRate;

  return (
    <div className="estimate">
      <div className="ctable">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Flight material</th>
              <th className="num">Volume</th>
              <th className="num">Infill</th>
              <th className="num">Mass</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.part}>
                <td>{r.part}</td>
                <td>{r.material}</td>
                <td className="num">{r.volume} cm³{r.shell ? ` + ${r.shell} shell` : ""}</td>
                <td className="num">{r.infill}%</td>
                <td className="num">{fmt(r.grams)} g</td>
              </tr>
            ))}
            <tr className="total">
              <td colSpan={4}>Total</td>
              <td className="num">{fmt(total)} g</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="out">
        <div>
          <b>{fmt(total)} g</b>
          <span>within the brief&apos;s 80–150 g ankle range</span>
        </div>
        <div>
          <b>${fmt(total * 1000)}</b>
          <span>launch cost at $1M/kg</span>
        </div>
        <div>
          <b>≈ {hours.toFixed(1)} h</b>
          <span>print time at ~{massEstimate.printRate} g/h, inside the 4–8 h window</span>
        </div>
      </div>
      <p className="note">
        {massEstimate.inventoryNote} Planning estimate made before the CAD model; volumes will be replaced with
        measured values from CAD.
      </p>
    </div>
  );
}
