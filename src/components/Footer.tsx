import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>Experiencia educativa sobre la tortuga carey.</p>
        </div>
        <a href="#inicio">Volver al inicio ↑</a>
      </div>
    </footer>
  );
}
