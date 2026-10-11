"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

// Live countdown to a fixed moment, ticking every second.
export default function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = now === null ? null : Math.max(0, target - now);
  const units =
    ms === null
      ? [["--", "Days"], ["--", "Hours"], ["--", "Min"], ["--", "Sec"]]
      : [
          [String(Math.floor(ms / 86_400_000)), "Days"],
          [pad(Math.floor((ms % 86_400_000) / 3_600_000)), "Hours"],
          [pad(Math.floor((ms % 3_600_000) / 60_000)), "Min"],
          [pad(Math.floor((ms % 60_000) / 1000)), "Sec"],
        ];

  return (
    <div className="countdown" role="timer" aria-label="Time until PDR">
      <span className="live">
        <i aria-hidden="true" /> {ms === 0 ? "Happening now" : "Live countdown"}
      </span>
      <div className="units">
        {units.map(([v, l]) => (
          <div key={l}>
            <b>{v}</b>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
