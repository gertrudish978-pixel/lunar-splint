import Hero from "@/components/Hero";
import HomeExtras from "@/components/HomeExtras";
import PageLinks from "@/components/PageLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <PageLinks />
        <HomeExtras />
      </main>
    </>
  );
}
