import type { Metadata } from "next";
import { Big_Shoulders, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["600", "800"], variable: "--nf-display" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--nf-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--nf-mono" });

export const metadata: Metadata = {
  title: "Lunar Splint Project",
  description:
    "A high school NASA HUNCH team designing a 3D-printable splint for an Achilles partial tear on a lunar base.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
