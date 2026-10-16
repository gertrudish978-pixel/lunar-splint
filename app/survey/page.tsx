import type { Metadata } from "next";
import Survey from "@/components/Survey";

export const metadata: Metadata = { title: "Needs Assessment Survey · Lunova" };

export default function SurveyPage() {
  return (
    <main className="subpage">
      <Survey />
    </main>
  );
}
