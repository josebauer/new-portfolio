"use client"

import styles from "./header.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed-top bg-white ${isScrolled ? "shadow-sm" : ""}`}>
      <Navbar expand="lg" className="bg-body-primary p-3">
        <Container className="d-flex align-items-center">
          <NavbarBrand className={styles.logo} href="#">JHBAUER</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="gap-2 gap-lg-5 mx-auto">
              <NavLink className={styles.navLink} href="#about-me">Sobre mim</NavLink>
              <NavLink className={styles.navLink} href="#">Tecnologias</NavLink>
              <NavLink className={styles.navLink} href="#">Projetos</NavLink>
            </Nav>
            <Nav className={`${styles.navIcons} gap-2 gap-lg-0`} >
              <NavLink target="_blank" href="https://github.com/josebauer">
                <Image src="/icons/github-logo.svg" alt="logo GitHub" width={25} height={25} />
              </NavLink>
              <NavLink target="_blank" href="https://linkedin.com/in/jose-henrique-bauer/">
                <Image src="/icons/linkedIn-logo-black.svg" alt="logo LikedIn" width={25} height={25} />
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  )
}