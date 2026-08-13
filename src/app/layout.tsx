import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareyAR | Explora la Tortuga Carey",
  description: "Experiencia educativa interactiva en 3D y realidad aumentada sobre la tortuga carey.",
  openGraph: {
    title: "CareyAR | Explora la Tortuga Carey",
    description: "Experiencia educativa interactiva en 3D y realidad aumentada sobre la tortuga carey.",
    type: "website",
    locale: "es_SV",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#063B5C",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
