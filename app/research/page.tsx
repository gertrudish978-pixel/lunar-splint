import type { Metadata } from "next";
import Research from "@/components/Research";

export const metadata: Metadata = { title: "Research · Lunova" };

export default function ResearchPage() {
  return (
    <main className="subpage">
      <Research />
    </main>
  );
}
