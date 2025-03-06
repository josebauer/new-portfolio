import { Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./errorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <main>
      <section>
        <Container className="text-center">
          <p className={styles.error404}>ERRO 404</p>
          <p className={styles.errorDescription}>{message}</p>
          <Link className="btn btn-outline-primary mt-3" href="/">
            Voltar ao início
          </Link>
        </Container>
      </section>
    </main>
  );
}