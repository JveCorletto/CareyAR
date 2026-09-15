import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="inicio" className="hero section-anchor" aria-labelledby="hero-title">
      <div className="hero-content shell">
        <div className="hero-copy">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1 id="hero-title">{siteConfig.tagline}</h1>
          <p className="species-name">{siteConfig.speciesName}</p>
          <p className="scientific-name"><em>{siteConfig.scientificName}</em></p>
          <p className="hero-description">
            Descubre cómo vive esta interesante tortuga marina, explora sus características en 3D y pon a prueba lo aprendido con un mini quiz. Conoce sobre su biología y ecología.
          </p>
          <a className="button button-primary" href="#explorar">
            Explorar tortuga
            <span aria-hidden="true"> ↓</span>
          </a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="ocean-orb">
            <span className="hero-turtle">🐢</span>
            <span className="bubble bubble-one" />
            <span className="bubble bubble-two" />
            <span className="bubble bubble-three" />
          </div>
        </div>
      </div>
    </section>
  );
}
