import { digitalRecords, nasaProject, nasaRequester, pdr, pdrChecklist, prototypeName, school, siteUrl, teachers, teamName } from "@/lib/content";
import { asset } from "@/lib/asset";
import Link from "next/link";
import Pill from "./Pill";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Pdr() {
  return (
    <section id="pdr">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Preliminary Design Review · {pdr.dates}</p>
          <h2>PDR checklist</h2>
          <p>
            Everything the Design Review Expectations and our weekly objectives ask the project website to show, and
            where to find it on this site.
          </p>
        </div>
        <div className="two">
          <div className="spec" id="header">
            <header>
              <span>Presentation header</span>
              <span>PDR 2026</span>
            </header>
            <dl>
              <dt>School</dt>
              <dd>{school}</dd>
              <dt>Teachers</dt>
              <dd>{teachers}</dd>
              <dt>NASA project</dt>
              <dd>
                {nasaProject}, from the {nasaRequester}
              </dd>
              <dt>Team project</dt>
              <dd>
                {teamName}: {prototypeName}
              </dd>
            </dl>
          </div>
          <div className="records">
            <h3>Digital records</h3>
            <ul className="plain">
              {digitalRecords.map((r) => (
                <li key={r.href}>
                  <a href={r.href} {...ext}>
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
            <figure className="qr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/qr-site.svg")} alt={`QR code linking to ${siteUrl}`} width={148} height={148} />
              <figcaption>
                QR code for the brochure. It opens this website: <span className="mono">{siteUrl.replace("https://", "")}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <figure className="board-preview spaced" id="board">
          <a href={asset("/docs/OrthoPrint-display-board.pdf")} {...ext}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/display-board.jpg")} alt="Our tri-fold presentation board design" />
          </a>
          <figcaption>
            Presentation board, 48 × 36 in tri-fold.{" "}
            <a href={asset("/docs/OrthoPrint-display-board.pdf")} {...ext}>Open the full-size PDF</a>
          </figcaption>
        </figure>
        <div className="checklist spaced">
          <ol>
            {pdrChecklist.map((c) => {
              const external = c.href?.startsWith("http");
              const label = c.href ? (
                external ? (
                  <a href={c.href} {...ext}>{c.item}</a>
                ) : c.href.startsWith("#") ? (
                  <a href={c.href}>{c.item}</a>
                ) : (
                  <Link href={c.href}>{c.item}</Link>
                )
              ) : (
                c.item
              );
              return (
                <li key={c.item}>
                  <div>
                    <strong>{label}</strong>
                    {c.note && <span>{c.note}</span>}
                  </div>
                  <Pill status={c.status} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
