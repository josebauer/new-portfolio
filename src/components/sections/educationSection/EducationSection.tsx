"use client";

import { Container } from "react-bootstrap";
import styles from "./educationSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import certificates from "@/data/certificates.json";
import { useEffect } from "react";
import AOS from "aos";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function EducationSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="section" id="education">
      <Container className="container d-flex flex-column justify-content-center align-items-center gap-4">
        <h2 data-aos="fade-right">FORMAÇÕES</h2>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            pagination: false,
            arrows: true,
            breakpoints: {
              1200: { perPage: 2 },
              765: { perPage: 1 },
            },
          }}
          aria-label="Certificados"
          className={styles.education}
        >
          {Array.isArray(certificates) &&
            certificates.map((certificate) => (
              <SplideSlide key={certificate.id}>
                <div
                  className={`${styles.certificate} d-flex flex-column align-items-center`}
                  data-aos="zoom-in"
                >
                  {certificate.link || certificate.imageUrl ? (
                    <Link href={certificate.link} target="_blank">
                      <Image
                        className={styles.thumbnail}
                        src={certificate.imageUrl}
                        alt={certificate.description}
                        width={300}
                        height={200}
                      />
                    </Link>
                  ) : (
                    <div className={styles.noImage}>
                      Certificado Indisponível.
                      <br />
                      {certificate.sensitiveData ? "Contém dados sensíveis" : (
                        "Curso em Andamento"
                      )}
                    </div>
                  )}
                  <p className={styles.description}>
                    {certificate.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </Container>
    </section>
  );
}
