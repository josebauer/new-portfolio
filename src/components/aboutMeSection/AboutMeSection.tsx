import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./aboutMeSection.module.scss";

export default function AboutMeSection() {
  return (
    <section className="d-flex align-items-center" id="about-me">
      <Container className="d-flex flex-column align-items-center gap-4">
        <Image
          className={styles.image}
          src="https://avatars.githubusercontent.com/u/104539756?v=4"
          alt="vercel"
          width={400} 
          height={400} 
        />
        <h2 className={styles.aboutMe}>SOBRE MIM</h2>
        <p className={styles.textAboutMe}>
          Olá! Meu nome é José Henrique Bauer, tenho 22 anos e sou formado em Ciência da Computação. Sou estudande de desenvolvimento web e estou sempre em busca de novos aprendizados para evoluir como profissional.<br />< br /> Atualmente, estou a procura de uma oportunidade como Desenvolvedor Web Júnior para aplicar meus conhecimentos e crescer na área.
        </p>
      </Container>
    </section>
  )
}