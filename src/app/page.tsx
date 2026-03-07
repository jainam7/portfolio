import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
