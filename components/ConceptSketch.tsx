// Annotated side view of the splint concept. A planning sketch, not the CAD model.
export default function ConceptSketch() {
  return (
    <figure className="sketch">
      <div className="sketch-scroll">
        <svg viewBox="0 0 760 440" role="img" aria-labelledby="sk-title sk-desc">
          <title id="sk-title">Concept sketch of the lunar Achilles splint, side view</title>
          <desc id="sk-desc">
            A rigid posterior shell runs from mid-calf down behind the heel and under the foot, with the footplate set
            for about 20 degrees of point-down. A lattice liner lines the shell. Three ratchet straps wrap the calf, ankle and
            forefoot. Side openings leave skin visible.
          </desc>
          <defs>
            <pattern id="sk-lattice" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="3.4" fill="none" stroke="var(--tpu)" strokeWidth="1.4" />
            </pattern>
          </defs>
          {/* leg outline */}
          <path d="M300 30 L300 250 Q300 300 330 320 L520 372 Q560 382 560 396 L330 396 Q262 396 250 330 L240 30"
            fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* lattice liner */}
          <path d="M228 60 L228 320 Q234 398 320 408 L520 408 L520 396 L330 396 Q262 396 250 330 L240 60 Z"
            fill="url(#sk-lattice)" stroke="var(--tpu)" strokeWidth="1.5" />
          {/* rigid shell */}
          <path d="M212 50 L212 322 Q220 420 320 424 L540 424 Q556 424 556 410 L540 408 L320 408 Q234 398 228 320 L228 50 Z"
            fill="var(--peek)" stroke="var(--peek)" strokeWidth="1.5" />
          {/* side openings */}
          <rect x="214" y="150" width="12" height="40" rx="5" fill="var(--surface)" />
          <rect x="214" y="210" width="12" height="40" rx="5" fill="var(--surface)" />
          {/* straps */}
          <g stroke="var(--ink)" strokeWidth="7" strokeLinecap="round" fill="none">
            <path d="M212 90 Q270 72 306 92" />
            <path d="M226 300 Q300 270 340 330" />
            <path d="M440 410 Q470 360 520 380" />
          </g>
          <g fill="var(--ink)">
            <rect x="200" y="82" width="14" height="18" rx="2" />
            <rect x="214" y="292" width="14" height="18" rx="2" />
            <rect x="432" y="402" width="14" height="18" rx="2" />
          </g>
          {/* callouts */}
          <g className="sk-call">
            <line x1="206" y1="140" x2="110" y2="140" />
            <text x="16" y="124" className="sk-h">Rigid PEEK shell</text>
            <text x="16" y="142" className="sk-t">Resists twisting from</text>
            <text x="16" y="158" className="sk-t">habitat stumbles</text>

            <line x1="236" y1="250" x2="110" y2="250" />
            <text x="16" y="234" className="sk-h">Lattice liner (TPU)</text>
            <text x="16" y="252" className="sk-t">Softens as swelling</text>
            <text x="16" y="268" className="sk-t">rises, no re-fitting</text>

            <line x1="206" y1="90" x2="110" y2="60" />
            <text x="16" y="40" className="sk-h">Ratchet strap ×3</text>
            <text x="16" y="58" className="sk-t">One-handed, no Velcro</text>

            <line x1="226" y1="200" x2="300" y2="200" />
            <text x="310" y="196" className="sk-h">Side openings</text>
            <text x="310" y="214" className="sk-t">Skin checks and airflow</text>

            <line x1="290" y1="414" x2="290" y2="436" />
            <text x="300" y="436" className="sk-t">Footplate shaped from the limb scan, set for ≈20° point-down</text>
          </g>
        </svg>
      </div>
      <figcaption>Annotated concept sketch, side view. A planning drawing for the CAD model, not to scale.</figcaption>
    </figure>
  );
}
