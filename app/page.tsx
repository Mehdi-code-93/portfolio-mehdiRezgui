import { AboutMe } from "@/components/AboutMe";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechCarousel } from "@/components/TechCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechCarousel />
        <Projects />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
