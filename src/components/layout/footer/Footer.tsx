import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="d-flex flex-column align-items-center mt-5 gap-4">
        <p className={styles.contact}>Contato</p>
        <div className={styles.links}>
          <div className="d-flex gap-2">
            <Image src="/icons/contact/github-logo.svg" alt="GitHub logo" width={25} height={25} />
            <Link className={styles.linkItem} target="_blank" href="https://github.com/josebauer">
              /josebauer
            </Link>
          </div>
          <div className="d-flex gap-2">
            <Image src="/icons/contact/email-icon.svg" alt="email" width={25} height={25} />
            <Link className={styles.linkItem} href="mailto:josebauer.dev@gmail.com">
              josebauer.dev@gmail.com
            </Link>
          </div>
          <div className="d-flex gap-2">
            <Image src="/icons/contact/linkedIn-logo-black.svg" alt="LinkedIn" width={25} height={25} />
            <Link className={styles.linkItem} target="_blank" href="https://www.linkedin.com/in/jose-henrique-bauer/">
              /in/jose-henrique-bauer
            </Link>
          </div>
          <div className="d-flex gap-2">
            <Image src="/icons/contact/phone.svg" alt="telefone" width={25} height={25} />
            <Link className={styles.linkItem} href="tel:(47)9997594781">
              (47) 9 9759-4781
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>José Henrique Bauer &copy; {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  )
}