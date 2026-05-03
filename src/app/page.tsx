import { Approach } from "@/components/Approach";
import { BentoGrid } from "@/components/BentoGrid";
import { CalendlySection } from "@/components/CalendlySection";
import { Chatbot } from "@/components/Chatbot";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sectors } from "@/components/Sectors";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sectors />
        <Features />
        <BentoGrid />
        <Approach />
        <CalendlySection />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
