import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DontMiss from "@/components/DontMiss";
import About from "@/components/About";
import Retrospective from "@/components/Retrospective";
import Rescues from "@/components/Rescues";
import News from "@/components/News";
import TicketSection from "@/components/TicketSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DontMiss />
      <About />
      <Rescues />
      <News />
      <Retrospective />
      <TicketSection />
      <Footer />
    </>
  );
}
