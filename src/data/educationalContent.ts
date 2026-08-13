import type { EducationalSection } from "@/types";

export const educationalContent: EducationalSection[] = [
  {
    id: "habitat",
    title: "Hábitat",
    icon: "🌊",
    summary: "Una especie estrechamente vinculada a mares tropicales y arrecifes.",
    content: [
      "La tortuga carey vive en aguas tropicales y subtropicales de los principales océanos del mundo.",
      "Es frecuente encontrarla asociada a arrecifes de coral y otros ambientes costeros donde puede encontrar refugio y alimento.",
    ],
    sourceIds: ["noaa", "iucn", "smithsonian"],
  },
  {
    id: "alimentacion",
    title: "Alimentación",
    icon: "🍽️",
    summary: "Su dieta está muy relacionada con la vida del arrecife.",
    content: [
      "Las esponjas marinas forman una parte muy importante de su alimentación, aunque también puede consumir otros organismos del arrecife.",
      "Su pico estrecho y curvado le ayuda a extraer alimento de grietas y espacios difíciles de alcanzar.",
    ],
    sourceIds: ["noaa", "smithsonian"],
  },
  {
    id: "caracteristicas",
    title: "Características",
    icon: "🐢",
    summary: "Su pico y su caparazón son dos de sus rasgos más reconocibles.",
    content: [
      "Posee un pico pronunciado y curvo que recuerda al de un halcón, característica que da origen a su nombre común en inglés.",
      "Su caparazón presenta placas superpuestas y patrones de tonos claros y oscuros. Sus aletas están adaptadas para nadar y maniobrar en el medio marino.",
    ],
    sourceIds: ["noaa", "smithsonian"],
  },
  {
    id: "amenazas",
    title: "Amenazas",
    icon: "⚠️",
    summary: "La especie enfrenta varias presiones causadas directa o indirectamente por actividades humanas.",
    content: [
      "Entre sus principales amenazas se encuentran la captura incidental en pesquerías, la pérdida o degradación de hábitats y el aprovechamiento ilegal de su caparazón.",
      "La contaminación y los cambios que afectan playas, arrecifes y otros ecosistemas marinos también pueden perjudicar su supervivencia.",
    ],
    sourceIds: ["noaa", "iucn", "wwf", "cites"],
  },
  {
    id: "conservacion",
    title: "Conservación",
    icon: "🌱",
    summary: "Proteger a la tortuga carey también significa proteger los ecosistemas marinos de los que depende.",
    content: [
      "Su conservación requiere proteger playas y arrecifes, reducir la captura incidental y combatir el comercio ilegal de productos elaborados con caparazón de tortuga.",
      "También podemos contribuir evitando comprar productos derivados de tortugas marinas, reduciendo residuos y respetando las normas de protección de fauna silvestre.",
    ],
    sourceIds: ["noaa", "iucn", "cites", "wwf"],
  },
];
