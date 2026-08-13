export const siteConfig = {
  name: "CareyAR",
  tagline: "Explora la Tortuga Carey",
  speciesName: "Tortuga Carey",
  scientificName: "Eretmochelys imbricata",
  description:
    "Experiencia educativa interactiva en 3D y realidad aumentada sobre la tortuga carey.",
  modelPath: "/models/tortuga-carey.glb",
  posterPath: "/images/turtle-poster.webp",
  optionalIosModelPath: "/models/tortuga-carey.usdz",
  publicUrl: "[Agregar URL pública de producción]",
  modelCredit: {
    name: "Model 50A - Hawksbill Sea Turtle",
    author: "DigitalLife3D",
    license: "Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)",
    sourceUrl: "https://skfb.ly/oyxDD",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
  },
} as const;
