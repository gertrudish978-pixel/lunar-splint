"use client";

import { useEffect, useState } from "react";

// Live countdown to a fixed moment, rendered as days / hours / minutes.
export default function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return <span className="countdown">&nbsp;</span>;
  const ms = Math.max(0, target - now);
  if (ms === 0) return <span className="countdown">Happening now</span>;
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return (
    <span className="countdown" aria-live="off">
      <b>{d}</b>d <b>{h}</b>h <b>{m}</b>m to go
    </span>
  );
}
