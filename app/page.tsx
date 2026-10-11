import Challenge from "@/components/Challenge";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Research from "@/components/Research";
import Roadmap from "@/components/Roadmap";
import Survey from "@/components/Survey";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <a className="skip" href="#challenge">Skip to content</a>
      <Nav />
      <Hero />
      <main>
        <Challenge />
        <Design />
        <Survey />
        <Research />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </>
  );
}
