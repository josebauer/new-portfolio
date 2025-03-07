"use client"

import { Button, Card, Modal } from "react-bootstrap";
import styles from "./projectCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

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
          
          {project.gitHubUrl.length > 1 ? (
            <button className={styles.githubButton} onClick={openModal}>
              <Image src="/icons/contact/github-logo.svg" height={25} width={25} alt="Repositório no GitHub" />
            </button>
          ) : (
            <Link target="_blank" href={project.gitHubUrl[0]}>
              <Image src="/icons/contact/github-logo.svg" height={25} width={25} alt="Repositório no GitHub" />
            </Link>
          )}

          {project.demonstrationUrl && (
            <Link target="_blank" href={project.demonstrationUrl}>
              <Image src="/icons/network.svg" height={25} width={25} alt="Ver projeto funcionando" />
            </Link>
          )}
        </div>

        <Modal show={showModal} onHide={closeModal} centered >
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Ver repositório</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Link href={project.gitHubUrl[0]} target="_blank" className="btn btn-outline-primary w-100 my-2">
              Front-end
            </Link>
            <Link href={project.gitHubUrl[1]} target="_blank" className="btn btn-outline-primary w-100 my-2">
              Back-end
            </Link>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={closeModal}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}