"use client"

import { Container } from "react-bootstrap";
import styles from "./firstSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function FirstSection() {
  const [showName, setShowName] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {

    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="first-section">
      <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
        <div className={styles.textWrapper}>
          <p className={styles.name}>
            {showName ? (
              <ReactTyped
                strings={["JOSÉ HENRIQUE BAUER"]}
                typeSpeed={50}
                backSpeed={0}
                showCursor={true}
                loop={false}
                cursorChar="|"
                onComplete={(self) => {
                  self.cursor.remove();
                  setTimeout(() => {
                    setShowTitle(true);
                  }, 500);
                }}
              />
            ) : (
              <span className={styles.placeholder}>JOSÉ HENRIQUE BAUER</span>
            )}
          </p>

          <h1 className={styles.title}>
            {showTitle ? (
              <ReactTyped
                strings={["DESENVOLVEDOR WEB"]}
                typeSpeed={50}
                backSpeed={0}
                showCursor={true}
                loop={false}
                cursorChar="|"
                onComplete={(self) => {
                  self.cursor.remove();
                  setTimeout(() => {
                    setShowContacts(true);
                  }, 500);
                }}
              />
            ) : (
              <span className={styles.placeholder}>DESENVOLVEDOR WEB</span>
            )}
          </h1>
        </div>

        <div className={styles.contacts}>
          {showContacts ? (
            <Container className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex gap-3 gap-sm-4 gap-md-5 justify-content-center align-items-center" data-aos="fade-up">
                <Link className={styles.contactIcon} target="_blank" href="https://github.com/josebauer" >
                  <Image src="/icons/contact/github-logo.svg" alt="GitHub Logo" width={30} height={30} />
                </Link>
                <Link className={styles.contactIcon} target="_blank" href="https://linkedin.com/in/jose-henrique-bauer/">
                  <Image src="/icons/contact/linkedIn-logo-black.svg" alt="LinkedIn Logo" width={30} height={30} />
                </Link>
                <Link className={styles.contactIcon} href="tel:(47)997594781">
                  <Image src="/icons/contact/phone.svg" alt="Ícone Telefone" width={30} height={30} />
                </Link>
                <Link className={styles.contactIcon} href="mailto:josebauer.dev@gmail.com">
                  <Image src="/icons/contact/email-icon.svg" alt="Ícone email" width={30} height={30} />
                </Link>
              </div>
              <Link href="#about-me" aria-label="Ir para a seção Sobre Mim" data-aos="fade-up">
                <Image className="mt-5" src="/icons/arrow-down.gif" alt="Seta para baixo" unoptimized width={60} height={60} />
              </Link>
            </Container>
          ):(
            <span className={styles.placeholder}>
              josebauer.dev@gmail.com
            </span>
          )}
        </div>
      </Container>
    </section>
  )
}