import { Container } from "react-bootstrap";
import projects from "@/data/projects.json"
import Slide from "@/components/carousel/slide/Slide";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <Container className="d-flex flex-column justify-content-center align-items-center gap-4">
        <h2>PROJETOS</h2>
        <Slide projects={projects} />
      </Container>
    </section>
  )
}