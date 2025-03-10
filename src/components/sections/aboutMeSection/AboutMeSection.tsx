"use client"

import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./aboutMeSection.module.scss";
import AOS from "aos";
import { useEffect } from "react";

export default function AboutMeSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.section} id="about-me">
      <Container className="d-flex flex-column align-items-center gap-4">
        <Image
          className={styles.image}
          src="https://avatars.githubusercontent.com/u/104539756?v=4"
          alt="vercel"
          width={250}
          height={250}
          data-aos="zoom-in"
        />
        <h2 data-aos="fade-right" data-aos-duration="1000">SOBRE MIM</h2>
        <p className={styles.textAboutMe} data-aos="fade-right">
          Olá! Meu nome é José Henrique Bauer, tenho 22 anos e sou formado em Ciência da Computação. Sou estudante de desenvolvimento web e estou sempre em busca de novos aprendizados para evoluir como profissional.<br />< br /> Atualmente, estou a procura de uma oportunidade como Desenvolvedor Web Júnior para aplicar meus conhecimentos e crescer na área.
        </p>
      </Container>
    </section>
  )
}