import AboutMeSection from "@/components/sections/aboutMeSection/AboutMeSection";
import FirstSection from "@/components/sections/firstSection/FirstSection";
import ProjectsSection from "@/components/sections/projectsSection/ProjectsSection";
import TechnologiesSection from "@/components/sections/technologiesSection/TechnologiesSection";

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