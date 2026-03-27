import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { TerminalEasterEgg } from "@/components/ui/terminal-easter-egg";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageTransition>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </PageTransition>
      <ScrollToTop />
      <TerminalEasterEgg />
    </>
  );
};

export default Index;
