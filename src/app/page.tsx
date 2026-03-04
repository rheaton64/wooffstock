import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Entertainment from "@/components/Entertainment";
import Music from "@/components/Music";
import Honoree from "@/components/Honoree";
import Rescues from "@/components/Rescues";
import News from "@/components/News";
import TicketSection from "@/components/TicketSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Entertainment />
      <Music />
      <Honoree />
      <Rescues />
      <News />
      <TicketSection />
      <Footer />
    </>
  );
}
