import Image from "next/image";
import imageDesktop from "@/assets/ImageDesktop.png";
import imageMobile from "@/assets/ImageMobile.png";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <h1 id="home-title">
              <span>Geraldo</span>{" "}
              <strong>Full-Stack</strong> com foco em <strong>.NET</strong>
            </h1>

            <p>
              He crafts responsive websites where
              <br />
              technologies meet creativity
            </p>

            <a className="home-contact-button" href="#contato">
              Contact me!!
            </a>
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
            Minha jornada na programação começou pela curiosidade de entender
            como as coisas funcionam e, com o tempo, isso acabou se
            transformando em algo que faço todos os dias.
          </p>

          <p>
            Atualmente atuo como Desenvolvedor Full-Stack com foco em Backend
            .NET, trabalhando em projetos próprios e freelances enquanto continuo
            aprofundando meus conhecimentos em desenvolvimento de software,
            arquitetura e boas práticas de programação.
          </p>

          <p>
            Gosto de aprender construindo. Grande parte do que sei hoje veio da
            prática, desenvolvendo aplicações web, APIs e também explorando o
            desenvolvimento mobile com React Native. Ao longo dessa jornada tive
            contato com tecnologias como C#, ASP.NET Core, React, Next.js,
            TypeScript e React Native, sempre buscando criar soluções que sejam
            úteis, organizadas e fáceis de evoluir.
          </p>

          <a className="home-read-more" href="#sobre">
            Read more <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
