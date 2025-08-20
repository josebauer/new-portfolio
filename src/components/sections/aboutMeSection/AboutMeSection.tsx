"use client"

import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import styles from "./aboutMeSection.module.scss";
import AOS from "aos";
import { useEffect } from "react";

export default function AboutMeSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.section} id="about-me">
      <Container className="d-flex flex-column justify-content-center align-items-center gap-4">
      <h2 data-aos="fade-right" data-aos-duration="1000">SOBRE MIM</h2>
        <div className={`${styles.aboutMe} shadow d-flex justify-content-center align-items-center flex-column flex-md-row`} data-aos="fade-right">
          <Image
          className={styles.image}
          src="https://avatars.githubusercontent.com/u/104539756?v=4"
          alt="vercel"
          width={150}
          height={150}
          />
          <p className="mb-0">
            Olá! Meu nome é José Henrique Bauer, tenho 23 anos e sou formado em Ciência da Computação. Sou estudante de desenvolvimento web e estou sempre em busca de novos aprendizados para evoluir como profissional.<br />< br /> Atualmente, estou a procura de uma oportunidade como Desenvolvedor Web Júnior para aplicar meus conhecimentos e crescer na área.
          </p>
        </div>
        <Button as="a" className={styles.downloadButton} variant="dark" href="/files/Currículo_José_Henrique_Bauer.pdf" target="_blank" download data-aos="fade-up" data-aos-duration="1000">
          Baixar Currículo
          <Image
            className={styles.downloadIcon}
            src="/icons/download.svg"
            alt="Download"
            width={24}
            height={24}
          />
        </Button>
      </Container>
    </section>
  )
} 