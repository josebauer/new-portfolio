"use client"

import { Card } from "react-bootstrap";
import styles from "./projectCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export type ProjectType = {
  id: number
  name: string
  shortDescription: string
  longDescription?: string
  technologiesUsed: string[]
  features: string[]
  imagesUrl: string[]
  gitHubUrl: string[]
  demonstrationUrl?: string
}

interface Props {
  project: ProjectType
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className={styles.card}>
      <Image
        src={project.imagesUrl[0].toString()}
        alt={project.name}
        className={styles.projectImage}
        width={400}
        height={250}
        quality={100}
      />
      <Card.Body className="d-flex flex-column align-items-start justify-content-between">
        <Card.Title>
          {project.name}
        </Card.Title>
        <Card.Text className={styles.text} >
          {project.shortDescription}
        </Card.Text>
        <div className="d-flex gap-4 align-items-center">
          <Link className={`btn btn-outline-primary`} href={`/project/${project.id}`}>
            Ver detalhes
          </Link>
          <Link target="_blank" href={project.gitHubUrl[0].toString()}>
            <Image src="/icons/contact/github-logo.svg" height={25} width={25} alt="Repositório no GitHub" />
          </Link>
          {project.demonstrationUrl ? (
          <Link target="_blank" href={project.demonstrationUrl.toString()}>
            <Image src="/icons/network.svg" height={25} width={25} alt="Ver projeto funcionando" />
          </Link>
          ) : ""}
        </div>

      </Card.Body>
    </Card>
  )
}