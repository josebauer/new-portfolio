import AboutMeSection from "@/components/aboutMeSection/AboutMeSection";
import FirstSection from "@/components/firstSection/FirstSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import TechnologiesSection from "@/components/technologiesSection/TechnologiesSection";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
    </main>
  )
}