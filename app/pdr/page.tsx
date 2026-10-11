import type { Metadata } from "next";
import Pdr from "@/components/Pdr";

export const metadata: Metadata = { title: "PDR Checklist · Lunova" };

export default function PdrPage() {
  return (
    <main className="subpage">
      <Pdr />
    </main>
  );
}
