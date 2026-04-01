import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import RaceFormats from "@/components/RaceFormats";
import HowItWorks from "@/components/HowItWorks";
import Rankings from "@/components/Rankings";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <RaceFormats />
      <HowItWorks />
      <Rankings />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
