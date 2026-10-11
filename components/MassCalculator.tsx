"use client";

import { useState } from "react";
import { materials } from "@/lib/content";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

// Follows the challenge brief's mass budget method:
// mass = (volume × infill + shell volume) × density; launch cost = mass × $1,000/g.
export default function MassCalculator() {
  const [volume, setVolume] = useState(240);
  const [infill, setInfill] = useState(25);
  const [shell, setShell] = useState(30);
  const [density, setDensity] = useState(materials[0].density);

  const grams = (volume * (infill / 100) + shell) * density;
  const band = grams < 80 ? "Lighter" : grams > 150 ? "Heavier" : "Within";

  return (
    <form className="calc" aria-label="Mass budget calculator" onSubmit={(e) => e.preventDefault()}>
      <div className="row">
        <label htmlFor="vol">
          Splint volume (cm³)
          <input id="vol" type="number" min={1} step={1} value={volume} onChange={(e) => setVolume(+e.target.value || 0)} />
        </label>
        <label htmlFor="infill">
          Infill (%)
          <input id="infill" type="number" min={5} max={100} step={5} value={infill} onChange={(e) => setInfill(+e.target.value || 0)} />
        </label>
        <label htmlFor="shell">
          Shell volume (cm³)
          <input id="shell" type="number" min={0} step={1} value={shell} onChange={(e) => setShell(+e.target.value || 0)} />
        </label>
      </div>
      <label htmlFor="mat">
        Material
        <select id="mat" value={density} onChange={(e) => setDensity(+e.target.value)}>
          {materials.map((m) => (
            <option key={m.name} value={m.density}>
              {m.label}
            </option>
          ))}
        </select>
      </label>
      <div className="out" aria-live="polite">
        <div>
          <b>{fmt(grams)} g</b>
          <span>filament mass</span>
        </div>
        <div>
          <b>${fmt(grams * 1000)}</b>
          <span>launch cost at $1M/kg</span>
        </div>
        <div>
          <b>{band}</b>
          <span>vs. 80–150 g typical ankle splint</span>
        </div>
      </div>
      <p className="note">Mass = (volume × infill + shell) × density. Defaults are our shell estimate.</p>
    </form>
  );
}
