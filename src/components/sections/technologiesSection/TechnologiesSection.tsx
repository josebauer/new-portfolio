"use client"

import { Container } from "react-bootstrap";
import styles from "./technologiesSection.module.scss";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

export default function TechnologiesSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.section} id="technologies">
      <Container className="d-flex flex-column align-items-center justify-content-center gap-4">
        <h2 data-aos="fade-down">TECNOLOGIAS</h2>
        <div className={`${styles.cardTech} shadow`} data-aos="fade-left">
          <p className={styles.description}>Essas são as tecnologias com as quais tive mais experiência e maior domínio, mas estou sempre aberto a aprender e usar novas ferramentas conforme a necessidade.</p>
          <ul className="d-flex flex-column gap-3">
            <li><span className={styles.techCategory}>Front-End:</span> Next.js, React, TypeScript, JavaScript, Bootstrap, Sass</li>
            <li><span className={styles.techCategory}>Back-End:</span> Node.js, Express, Python</li>
            <li><span className={styles.techCategory}>Banco de Dados:</span> PostgreSQL, MySQL</li>
            <li><span className={styles.techCategory}>Ferramentas:</span> Git, GitHub</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}