import Image from "next/image";
import aboutImage from "@/assets/sobreDesktop.png";
import { technologies } from "@/services/technologies";

const skillGroups = technologies.map(
  ({ category, technologiesOne, technologiesTwo }) => ({
    category,
    items: `${technologiesTwo} | ${technologiesOne}`
      .split("|")
      .map((technology) => technology.trim())
      .filter(Boolean),
  }),
);

export default function Sobre() {
  return (
    <main className="about-page">
      <section className="about-section" aria-labelledby="about-title">
        <div className="about-intro">
          <header className="about-heading">
            <h1 id="about-title">Olá, eu sou o Geraldo.</h1>
          </header>

          <figure className="about-portrait">
            <Image
              src={aboutImage}
              alt="Ilustração de uma pessoa encapuzada cobrindo parte do rosto com a mão."
              sizes="(max-width: 900px) 58vw, 320px"
            />
          </figure>

          <div className="about-story">
            <p>
              Entrei na área de tecnologia em 2022, quando decidi estudar
              desenvolvimento de software de forma mais séria através da
              formação Full-Stack da Kenzie Academy Brasil. Foi nesse período
              que comecei a construir meus primeiros projetos e a entender o
              quanto eu gostava de transformar ideias em algo que realmente
              funciona.
            </p>

            <p>
              Desde então, grande parte da minha trajetória foi construída na
              prática. Em 2023 participei do MoradaApp como Desenvolvedor
              Backend voluntário através da comunidade SouJunior. Foi minha
              primeira experiência trabalhando em equipe em um projeto real,
              lidando com desafios que vão muito além de escrever código e
              aprendendo bastante sobre colaboração e desenvolvimento de
              software na prática.
            </p>

            <p>
              Em 2024 iniciei minha graduação e, alguns meses depois, tive a
              oportunidade de atuar como estagiário na Compass UOL. Essa
              experiência me permitiu conhecer de perto a rotina de
              desenvolvimento em uma grande empresa e ampliou bastante minha
              visão sobre tecnologia, processos e trabalho em equipe.
            </p>

            <p>
              Hoje sigo construindo minha experiência através de projetos
              próprios, freelances e estudos constantes. Meu principal foco
              está no ecossistema .NET, especialmente com C# e ASP.NET Core,
              mas ao longo da minha jornada também trabalhei com React, Next.js,
              TypeScript e React Native, participando do desenvolvimento de
              aplicações web, APIs e soluções voltadas para diferentes
              necessidades.
            </p>

            <p>
              Tenho um interesse especial por desenvolvimento backend,
              arquitetura de software e boas práticas de programação. Gosto de
              entender não apenas como implementar uma funcionalidade, mas
              também como construir aplicações que sejam organizadas, fáceis de
              manter e preparadas para crescer com o tempo.
            </p>

            <p>
              Acredito que aprender faz parte da profissão. Por isso continuo
              estudando, criando projetos e buscando experiências que me
              permitam evoluir como desenvolvedor e ajudar pessoas e empresas a
              transformar ideias em soluções reais.
            </p>
          </div>
        </div>

        <section className="about-skills" aria-labelledby="skills-title">
          <h2 id="skills-title">Tecnologias e conhecimentos</h2>
          <p className="about-scroll-hint">
            Deslize para explorar <span aria-hidden="true">-&gt;</span>
          </p>
          <div
            className="about-skills-grid"
            role="region"
            aria-label="Tecnologias e conhecimentos, navegue horizontalmente em telas pequenas"
            tabIndex={0}
          >
            {skillGroups.map(({ category, items }) => (
              <article className="about-skill-card" key={category}>
                <h3>{category}</h3>
                <ul>
                  {items.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}