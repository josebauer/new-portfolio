"use client"

import { Container } from "react-bootstrap";
import styles from "./firstSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

export default function FirstSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="first-section">
      <Container className="d-flex flex-column justify-content-center align-items-center pt-5" data-aos="fade-down">
        <p className={styles.name}>JOSÉ HENRIQUE BAUER</p>
        <h1 className={styles.title}>DESENVOLVEDOR WEB</h1>
        <Container className="d-flex gap-3 gap-sm-4 gap-md-5 justify-content-center align-items-center" data-aos="zoom-in">
          <Link className={styles.contactIcon} target="_blank" href="https://github.com/josebauer" >
            <Image src="/icons/contact/github-logo.svg" alt="GitHub Logo" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} target="_blank" href="https://linkedin.com/in/jose-henrique-bauer/">
            <Image src="/icons/contact/linkedIn-logo-black.svg" alt="LinkedIn Logo" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} href="tel:(47) 9 9759-4781">
            <Image src="/icons/contact/phone.svg" alt="Ícone Telefone" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} href="mailto:josebauer.dev@gmail.com">
            <Image src="/icons/contact/email-icon.svg" alt="Ícone email" width={30} height={30} />
          </Link>
        </Container>
        <Link href="#about-me">
          <Image className="mt-5" src="/icons/arrow-down.gif" alt="Seta para baixo" width={60} height={60} />
        </Link>
      </Container>
    </section>
  )
}