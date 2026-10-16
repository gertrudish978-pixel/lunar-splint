import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";

const display = Inter({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--nf-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--nf-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--nf-mono" });

export const metadata: Metadata = {
  title: "Lunova · Lunar Splint Project",
  description:
    "A high school NASA HUNCH team designing OrthoPrint, a 3D-printable splint for a lateral ankle ligament tear on a lunar base.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Nav />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
