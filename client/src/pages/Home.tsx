import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
