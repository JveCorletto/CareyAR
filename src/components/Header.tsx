import { siteConfig } from "@/config/site";

const navigation = [
  ["Inicio", "#inicio"],
  ["Explorar", "#explorar"],
  ["Hábitat", "#habitat"],
  ["Alimentación", "#alimentacion"],
  ["Características", "#caracteristicas"],
  ["Amenazas", "#amenazas"],
  ["Conservación", "#conservacion"],
  ["Quiz", "#quiz"],
  ["Fuentes", "#fuentes"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de CareyAR">
          <span className="brand-mark" aria-hidden="true">🐢</span>
          <span>{siteConfig.name}</span>
        </a>
        <nav className="nav-scroll" aria-label="Navegación principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
