import { siteConfig } from "@/config/site";
import { scientificSources } from "@/data/sources";

export function Credits() {
  return (
    <section id="fuentes" className="credits-section section-anchor" aria-labelledby="credits-title">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Fuentes y créditos</p>
          <h2 id="credits-title">Información para aprender con confianza</h2>
          <p>El contenido educativo se apoya en organismos científicos y de conservación reconocidos.</p>
        </div>

        <div className="sources-grid">
          {scientificSources.map((source) => (
            <article className="source-card" key={source.id}>
              <h3>{source.organization}</h3>
              <p>{source.title}</p>
              <a href={source.reference} target="_blank" rel="noreferrer">
                Consultar fuente <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <article className="model-credit-card">
          <div>
            <p className="eyebrow">Crédito del modelo 3D</p>
            <h3>{siteConfig.modelCredit.name}</h3>
          </div>
          <dl>
            <div>
              <dt>Autor</dt>
              <dd>{siteConfig.modelCredit.author}</dd>
            </div>
            <div>
              <dt>Licencia</dt>
              <dd>{siteConfig.modelCredit.license}</dd>
            </div>
            <div>
              <dt>Origen</dt>
              <dd>{siteConfig.modelCredit.sourceUrl}</dd>
            </div>
          </dl>
          <p className="credit-reminder">
            Sustituye estos placeholders únicamente cuando hayas confirmado el autor, la licencia y la fuente original del modelo definitivo.
          </p>
        </article>
      </div>
    </section>
  );
}
