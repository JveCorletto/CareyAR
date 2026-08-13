import type { Hotspot } from "@/types";

interface HotspotInfoProps {
  hotspot: Hotspot;
  onClose: () => void;
}

export function HotspotInfo({ hotspot, onClose }: HotspotInfoProps) {
  return (
    <aside className="hotspot-info" aria-live="polite" aria-label={`Detalle: ${hotspot.title}`}>
      <div>
        <p className="hotspot-info-kicker">Punto interactivo</p>
        <h3>{hotspot.title}</h3>
        <p>{hotspot.description}</p>
      </div>
      <button className="icon-button" type="button" onClick={onClose} aria-label={`Cerrar información sobre ${hotspot.title}`}>
        ×
      </button>
    </aside>
  );
}
