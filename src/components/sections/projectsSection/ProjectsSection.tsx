"use client"

import { Container } from "react-bootstrap";
import projects from "@/data/projects.json"
import Slide from "@/components/carousel/slide/Slide";
import AOS from "aos";
import { useEffect } from "react";

export default function ProjectsSection() {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <section id="projects">
      <Container className="d-flex flex-column justify-content-center align-items-center gap-4">
        <h2 data-aos="fade-down">PROJETOS</h2>
        <Slide projects={projects} />
      </Container>
    </section>
  )
}