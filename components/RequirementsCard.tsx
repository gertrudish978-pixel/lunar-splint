"use client";

import { useState } from "react";
import { requirements } from "@/lib/content";

// A card that flips like a page: the front names the six requirements, the back lists them.
export default function RequirementsCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip${flipped ? " flipped" : ""}`}>
      <div
        role="button"
        tabIndex={0}
        className="flip-inner"
        aria-pressed={flipped}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
      >
        <div className="flip-face flip-front" aria-hidden={flipped}>
          <span className="eyebrow">From the student brief</span>
          <b>6</b>
          <strong>Design requirements we must meet</strong>
          <span className="flip-hint">Click to flip the page ↻</span>
        </div>
        <div className="flip-face flip-back" aria-hidden={!flipped}>
          <span className="eyebrow">The 6 design requirements</span>
          <ol>
            {requirements.map((r) => (
              <li key={r.title}>
                <strong>{r.title}</strong>
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
