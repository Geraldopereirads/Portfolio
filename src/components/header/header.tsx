"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiSolidFilePdf } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { NavigationLinks } from "@/page/navigation/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`site-header${isMenuOpen ? " menu-is-open" : ""}`}>
      <div className="site-header-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <Link className="site-logo" href="/inicio" aria-label="Geraldo - início">
          <Image
            className="profile-photo"
            src="https://github.com/Geraldopereirads.png"
            alt=""
            width={24}
            height={24}
          />
          <span>Geraldo</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Navegação principal">
          <NavigationLinks />
        </nav>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Navegação principal"
        >
          <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      )}

      {isMenuOpen && (
        <div className="mobile-social-links" aria-label="Redes sociais">
          <a
            href="https://github.com/Geraldopereirads"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/5522997773136"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/geraldo-pereirads"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="/curriculo.pdf" download aria-label="Baixar currículo em PDF">
            <BiSolidFilePdf aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
