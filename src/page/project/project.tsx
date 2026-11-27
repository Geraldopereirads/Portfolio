import { projects } from "@/services/project";
import ProjectPreview from "@/page/project/project-preview";

function getExternalUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-section" aria-labelledby="projects-title">
        <header className="projects-heading">
          <p className="projects-eyebrow">PORTFÓLIO</p>
          <h1 id="projects-title">Minha lista de projetos</h1>
          <p className="projects-intro">
            Uma seleção de projetos desenvolvidos com diferentes tecnologias.
          </p>
          <p className="projects-scroll-hint">
            Deslize para explorar <span aria-hidden="true">-&gt;</span>
          </p>
        </header>

        <div
          className="projects-grid"
          role="region"
          aria-label="Projetos, navegue horizontalmente em telas pequenas"
          tabIndex={0}
        >
          {projects.map((project) => {
            const githubUrl = getExternalUrl(project.github);
            const projectUrl = getExternalUrl(project.url);
            const liveUrl =
              projectUrl && projectUrl !== githubUrl ? projectUrl : undefined;
            const projectNotes = [
              !projectUrl && project.url
                ? { label: "Disponibilidade", value: project.url }
                : undefined,
              !githubUrl && project.github
                ? { label: "Código-fonte", value: project.github }
                : undefined,
            ].filter((note) => note !== undefined);
            const technologies = project.technologies
              .split("|")
              .map((technology) => technology.trim())
              .filter(Boolean);

            return (
              <article className="project-card" key={project.id}>
                <ProjectPreview image={project.image} title={project.title} />

                <div className="project-card-content">
                  <ul
                    className="project-technologies"
                    aria-label={`Tecnologias utilizadas em ${project.title}`}
                  >
                    {technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <h2>{project.title}</h2>

                  <div className="project-card-footer">
                    {projectNotes.length > 0 && (
                      <dl
                        className="project-notes"
                        aria-label={`Informações sobre ${project.title}`}
                      >
                        {projectNotes.map(({ label, value }) => (
                          <div className="project-note" key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {(liveUrl || githubUrl) && (
                      <div className="project-actions">
                        {liveUrl && (
                          <a
                            className="project-link project-link-primary"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver projeto <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        {githubUrl && (
                          <a
                            className="project-link"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
