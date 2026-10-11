import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = { title: "Team · Lunova" };

export default function TeamPage() {
  return (
    <main className="subpage">
      <Team />
    </main>
  );
}
