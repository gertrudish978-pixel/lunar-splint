import type { Metadata } from "next";
import Design from "@/components/Design";

export const metadata: Metadata = { title: "Design · Lunova" };

export default function DesignPage() {
  return (
    <main className="subpage">
      <Design />
    </main>
  );
}
