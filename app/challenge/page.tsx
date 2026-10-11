import type { Metadata } from "next";
import Challenge from "@/components/Challenge";

export const metadata: Metadata = { title: "Challenge · Lunova" };

export default function ChallengePage() {
  return (
    <main className="subpage">
      <Challenge />
    </main>
  );
}
