"use client";

import { useState } from "react";
import type { FlipItem } from "@/lib/content";

// A card that flips over on click: a big number on the front, the full list on the back.
export default function FlipCard({ value, label, heading, items }: { value: string; label: string; heading: string; items: FlipItem[] }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div className={`flip${flipped ? " flipped" : ""}`}>
      <div
        role="button"
        tabIndex={0}
        className="flip-inner"
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className="flip-face flip-front" aria-hidden={flipped}>
          <b>{value}</b>
          <strong>{label}</strong>
          <span className="flip-hint">Click to flip ↻</span>
        </div>
        <div className="flip-face flip-back" aria-hidden={!flipped}>
          <span className="eyebrow">{heading}</span>
          <ol>
            {items.map((r) => (
              <li key={r.title} className={r.badge === "Our pick" ? "pick" : undefined}>
                <strong>
                  {r.title} {r.badge && <em>{r.badge}</em>}
                </strong>
                <span>{r.body}</span>
              </li>
            ))}
          </ol>
          <span className="flip-hint">Click to flip back ↺</span>
        </div>
      </div>
    </div>
  );
}
