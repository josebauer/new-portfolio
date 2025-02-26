import { Container } from "react-bootstrap";
import styles from "./technologiesSection.module.scss";
import Image from "next/image";

export default function TechnologiesSection() {
  return (
    <section className={styles.section} id="technologies">
      <Container className="d-flex flex-column align-items-center justify-content-center gap-4">
        <h2 className={styles.technologies}>TECNOLOGIAS</h2>
        <div className={styles.cardTech}>
          <p className={styles.description}>Essas são as tecnologias com as quais tive mais experiência e maior domínio, mas estou sempre aberto a aprender novas ferramentas conforme a necessidade.</p>
          <div className={styles.techIcons}>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/nextjs-icon.svg" alt="Next.js" width={40} height={40} />
              <p>Next.js</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/logo-react.svg" alt="React" width={40} height={40} />
              <p>React</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/logo-sass.svg" alt="Sass" width={40} height={40} />
              <p>Sass</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/typescript.svg" alt="TypeScript" width={40} height={40} />
              <p>TypeScript</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/logo-js.svg" alt="JavaScript" width={40} height={40} />
              <p>JavaScript</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/node-js-icon.svg" alt="Node.js" width={40} height={40} />
              <p>Node.js</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/postgresql.svg" alt="PostgreSQL" width={40} height={40} />
              <p>PostgreSQL</p>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Image src="/icons/technologies/git-logo.svg" alt="Git" width={40} height={40} />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}