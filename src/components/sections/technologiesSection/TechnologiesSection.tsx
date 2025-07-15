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
        <div className={styles.cardTech} data-aos="fade-left">
          <p className={styles.description}>Essas são as tecnologias com as quais tive mais experiência e maior domínio, mas estou sempre aberto a aprender a usar novas ferramentas conforme a necessidade.</p>
          <div className={styles.techIcons}>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/nextjs-icon.svg" alt="Next.js" width={40} height={40} />
              <p>Next.js</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/logo-react.svg" alt="React" width={40} height={40} />
              <p>React</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/logo-sass.svg" alt="Sass" width={40} height={40} />
              <p>Sass</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/typescript.svg" alt="TypeScript" width={40} height={40} />
              <p>TypeScript</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/logo-js.svg" alt="JavaScript" width={40} height={40} />
              <p>JavaScript</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/node-js-icon.svg" alt="Node.js" width={40} height={40} />
              <p>Node.js</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/python.png" alt="Python" width={40} height={40} />
              <p>Python</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/postgresql.svg" alt="PostgreSQL" width={40} height={40} />
              <p>PostgreSQL</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/mysql.png" alt="MySQL" width={40} height={40} />
              <p>MySQL</p>
            </div>
            <div className={styles.techIcon}>
              <Image src="/icons/technologies/git-logo.svg" alt="Git" width={40} height={40} />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}