import { Container } from "react-bootstrap";
import styles from "./educationSection.module.scss";

export default function EducationSection() { 
  return (
    <section className="section" id="education">
      <Container className="container d-flex flex-column justify-content-center align-items-center gap-4">
        <h2>FORMAÇÕES</h2>
        <div className={`shadow ${styles.education} d-flex justify-content-center flex-column`}>
          <p className="mb-0">
            Graduação em Ciência da Computação pela Universidade Estácio de Sá (2021 - 2024).
          </p>
          <p className="mb-0">Curso de +200h de Desenvolvedor Full Stack JavaScript pela One Bit Code (2024)</p>
          <p className="mb-0">
            Programa Jovem Programador do SENAC-SC com carga horária total de 440h (Em andamento)
          </p>
        </div>
      </Container>
    </section>
  );
}