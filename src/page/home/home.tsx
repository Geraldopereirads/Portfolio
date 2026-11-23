import Image from "next/image";
import Link from "next/link";
import imageDesktop from "@/assets/ImageDesktop.png";
import imageMobile from "@/assets/ImageMobile.png";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <h1 id="home-title">
              <span>Geraldo</span> <strong>Full-Stack</strong> com foco em{" "}
              <strong>.NET</strong>
            </h1>

            <p>Transformando ideias em aplicações reais.</p>

            <Link className="home-contact-button" href="/contato">
              Contact me!!
            </Link>
          </div>

          <div className="home-hero-art" aria-hidden="true">
            <div className="home-hero-dots" />
            <Image
              className="home-image-mobile"
              src={imageMobile}
              alt=""
              priority
            />
            <Image
              className="home-image-desktop"
              src={imageDesktop}
              alt=""
              priority
            />
          </div>
        </div>
      </section>

      <section className="home-about" aria-labelledby="about-title">
        <div className="home-about-inner">
          <h2 id="about-title">Olá, eu sou o Geraldo.</h2>

          <p>
            Atualmente atuo como Desenvolvedor Full-Stack com foco em Backend
            .NET, trabalhando em projetos próprios e freelances enquanto
            continuo aprofundando meus conhecimentos em desenvolvimento de
            software, arquitetura e boas práticas de programação.
          </p>

          <p>
            Grande parte do que aprendi veio da prática, desenvolvendo
            aplicações web, APIs e explorando também o desenvolvimento mobile.
            Ao longo dessa jornada trabalhei com tecnologias como C#, ASP.NET
            Core, React, Next.js, TypeScript e React Native, sempre buscando
            criar soluções úteis, organizadas e preparadas para evoluir.
          </p>
          <Link className="home-read-more" href="/sobre">
            leia mais <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
