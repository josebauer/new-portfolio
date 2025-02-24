import { Container } from "react-bootstrap";
import styles from "./firstSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function FirstSection() {
  return (
    <section className="d-flex align-items-center justify-content-center">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className={styles.name}>JOSÉ HENRIQUE BAUER</p>
        <p className={styles.title}>DESENVOLVEDOR WEB</p>
        <Container className="d-flex gap-3 gap-sm-4 gap-md-5 justify-content-center align-items-center">
          <Link className={styles.contactIcon} target="_blank" href="https://github.com/josebauer" >
            <Image src="/icons/github-logo.svg" alt="GitHub Logo" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} target="_blank" href="https://linkedin.com/in/jose-henrique-bauer/">
            <Image src="/icons/linkedIn-logo-black.svg" alt="LinkedIn Logo" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} href="tel:(47) 9 9759-4781">
            <Image src="/icons/phone.svg" alt="Ícone Telefone" width={30} height={30} />
          </Link>
          <Link className={styles.contactIcon} href="mailto:josebauer.dev@gmail.com">
            <Image src="/icons/email-icon.svg" alt="Ícone email" width={30} height={30} />
          </Link>
        </Container>
      </Container>
    </section>
  )
}