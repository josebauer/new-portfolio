'use client'

import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import styles from "./page.module.scss";
import projects from "@/data/projects.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Project() {
  const { id } = useParams()

  if (!id || typeof id !== 'string') return null

  const project = projects.find(project => project.id === +id)

  if (!project)
    return <ErrorMessage message="O projeto que você tentou acessar não existe." />

  return (
    <main>
      <section>
        <Container className="d-flex flex-column align-items-center justify-content-center pt-5 gap-4">
          <h1 className="text-center">{project.name}</h1>
          <Image src={project.imagesUrl[1]} alt={project.name} width={1024} height={768} quality={100} layout="intrinsic" />
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {project.gitHubUrl.length > 1 ? (
              <div className="d-flex justify-content-center flex-wrap gap-4">
                <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[0]}>
                  <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                  <p>Repositório Front-end</p>
                </Link>
                <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[1]}>
                  <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                  <p>Repositório Back-end</p>
                </Link>
              </div>
            ) : (
              <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[0]}>
                <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                <p>Repositório GitHub</p>
              </Link>
            )}
            {project.demonstrationUrl ? (
              <Link className={`${styles.link} btn`}  target="_blank" href={project.demonstrationUrl.toString()}>
                <Image src="/icons/network.svg" height={25} width={25} alt="Ver projeto funcionando" />
                <p>Projeto funcionando</p>
              </Link>
            ) : ""}
          </div>
        </Container>
      </section>
      <section>
        <Container className="pb-5">
          <p className={styles.subtitle}>Descrição do projeto:</p>
          <p className={styles.longDescription}>{project.longDescription}</p>
          <p className={`${styles.subtitle} mt-4`}>Tecnologias utilizadas:</p>
          <ul>
            {project.technologiesUsed.map((technologie, index) => (
              <li key={index}>{technologie}</li>
            ))}
          </ul>
          <p className={`${styles.subtitle} mt-4`}>Funcionalidades:</p>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Container>
      </section>
    </main >
  )
}