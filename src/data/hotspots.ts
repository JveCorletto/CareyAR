import type { Hotspot } from "@/types";

/**
 * IMPORTANTE:
 * Las posiciones y normales siguientes son PLACEHOLDERS deliberados.
 * No representan coordenadas anatómicas reales del modelo definitivo.
 * Deben recalibrarse después de colocar public/models/tortuga-carey.glb.
 */
export const hotspots: Hotspot[] = [
  {
    id: "caparazon",
    title: "Caparazón",
    description:
      "Su caparazón presenta placas superpuestas y una coloración con patrones que ayudan a distinguir a la tortuga carey de otras tortugas marinas.",
    position: "0m 0.10m 0m",
    normal: "0m 1m 0m",
    ariaLabel: "Información sobre el caparazón",
  },
  {
    id: "pico",
    title: "Pico",
    description:
      "Su boca estrecha y curvada recuerda al pico de un halcón. Le permite alcanzar alimento dentro de grietas y espacios pequeños del arrecife.",
    position: "0m 0.02m -0.28m",
    normal: "0m 0m 1m",
    ariaLabel: "Información sobre el pico",
  },
  {
    id: "aletas",
    title: "Aletas",
    description:
      "Sus extremidades están transformadas en aletas que le permiten impulsarse, maniobrar y desplazarse eficientemente por el océano.",
    position: "0.10m 0.04m -0.08m",
    normal: "1m 0m 0m",
    ariaLabel: "Información sobre las aletas",
  },
];