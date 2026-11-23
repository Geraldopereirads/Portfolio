import { BiSolidFilePdf } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Geraldopereirads",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5522997773136",
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/geraldo-pereirads",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-profile">
          <div className="footer-profile-heading">
            <span>Geraldo</span>
            <a
              className="footer-email"
              href="mailto:geraldo.pereirads@hotmail.com"
            >
              geraldo.pereirads@hotmail.com
            </a>
          </div>
          <p>Full-Stack com foco em .Net</p>
        </div>

        <nav className="footer-social-links" aria-label="Redes sociais">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
          <a href="/curriculo.pdf" download aria-label="Baixar curriculo em PDF">
            <BiSolidFilePdf aria-hidden="true" />
          </a>
        </nav>
      </div>

      <div className="footer-copyright">
        <span aria-hidden="true">©</span>
        <span>Copyright 2026. Made by Geraldo</span>
      </div>
    </footer>
  );
}
