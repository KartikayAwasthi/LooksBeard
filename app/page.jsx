import Image from "next/image";
import Link from "next/link";
import Services from "./components/Services";
import Work from "./components/Work";
import ContactFrom from "./components/ContactForm";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="mt-24">
      
      

      <section id="home" className="scroll-section">
        <Hero/>
      </section>

    <section id="services" className="scroll-section">
  <Services />
</section>

<section id="work" className="scroll-section">
  <Work />
</section>

<section id="about" className="scroll-section">
  <About />
</section>

<section id="contact" className="scroll-section">
  <ContactFrom />
</section>


    </main>
  );
}
