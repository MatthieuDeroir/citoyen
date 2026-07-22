import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Citoyen — Livret du citoyen 2026",
    short_name: "Citoyen",
    description:
      "Entraînement interactif au Livret du citoyen : cartes, QCM et examen blanc officiel.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b0b1f",
    theme_color: "#000091",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
