import type { EducationalSection } from "@/types";

interface InfoSectionProps {
  section: EducationalSection;
  index: number;
}

export function InfoSection({ section, index }: InfoSectionProps) {
  return (
    <section
      id={section.id}
      className={`info-section section-anchor ${index % 2 === 1 ? "info-section-alt" : ""}`}
      aria-labelledby={`${section.id}-title`}
    >
      <div className="shell info-layout">
        <div className="info-icon" aria-hidden="true">{section.icon}</div>
        <div className="info-card">
          <p className="eyebrow">Descubre</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <p className="info-summary">{section.summary}</p>
          <div className="info-copy">
            {section.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="source-note">Fuentes: {section.sourceIds.map((id) => id.toUpperCase()).join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
