import type { Metadata } from "next";
import Roadmap from "@/components/Roadmap";

export const metadata: Metadata = { title: "Roadmap · Lunova" };

export default function RoadmapPage() {
  return (
    <main className="subpage">
      <Roadmap />
    </main>
  );
}
