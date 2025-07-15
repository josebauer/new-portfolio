'use client'

import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import styles from "./page.module.scss";
import projects from "@/data/projects.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { id } = useParams()

  if (!id || typeof id !== 'string') return null

  const project = projects.find(project => project.id === +id)

  if (!project)
    return <ErrorMessage message="O projeto que você tentou acessar não existe." />

  return (
    <main>
      <section>
        <Container className={styles.container}>
          <h1 className="text-center" data-aos="fade-down">{project.name}</h1>
          <div className={styles.imageWrapper} data-aos="fade-up">
            <Image src={project.imagesUrl[1]} alt={project.name} fill quality={100} sizes="(max-width: 768px) 100vw, 768px" style={{ objectFit: "contain" }} />
          </div>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {project.gitHubUrl.length > 1 ? (
              <div className="d-flex justify-content-center flex-wrap gap-4">
                <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[0]} data-aos="zoom-in">
                  <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                  <p>Repositório Front-end</p>
                </Link>
                <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[1]} data-aos="zoom-in">
                  <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                  <p>Repositório Back-end</p>
                </Link>
              </div>
            ) : (
              <Link className={`${styles.link} btn`}  target="_blank" href={project.gitHubUrl[0]} data-aos="zoom-in">
                <Image src="/icons/contact/github-logo.svg" alt="Repositório do GitHub" width={30} height={30} />
                <p>Repositório GitHub</p>
              </Link>
            )}
            {project.demonstrationUrl ? (
              <Link className={`${styles.link} btn`}  target="_blank" href={project.demonstrationUrl.toString()} data-aos="zoom-in">
                <Image src="/icons/network.svg" height={25} width={25} alt="Ver projeto funcionando" />
                <p>Projeto funcionando</p>
              </Link>
            ) : ""}
          </div>
        </Container>
      </section>
      <section>
        <Container className="pb-5">
          <p className={styles.subtitle} data-aos="fade-right" data-aos-duration="1000">Descrição do projeto:</p>
          <p className={styles.longDescription} data-aos="fade-right">{project.longDescription}</p>
          <p className={`${styles.subtitle} mt-4`} data-aos="fade-right" data-aos-duration="1000">Tecnologias utilizadas:</p>
          <ul data-aos="fade-right">
            {project.technologiesUsed.map((technologie, index) => (
              <li key={index}>{technologie}</li>
            ))}
          </ul>
          <p className={`${styles.subtitle} mt-4`} data-aos="fade-right" data-aos-duration="1000">Funcionalidades:</p>
          <ul data-aos="fade-right">
            {project.features.map((feature, index) => (
              <li className={styles.featuresItem} key={index}>{feature}</li>
            ))}
          </ul>
        </Container>
      </section>
      {project.demonstrationUrlVideo ? (
        <section>
          <Container>
            <h2 className={styles.demonstrationVideo} data-aos="fade-right" data-aos-duration="1000">Vídeo de Demonstração</h2>
              <div className={styles.videoWrapper} data-aos="fade-right" data-aos-duration="1000">
                <iframe
                  src={project.demonstrationUrlVideo}
                  allowFullScreen
                />
              </div>
          </Container>
        </section>
      ): ""}
    </main >
  )
}