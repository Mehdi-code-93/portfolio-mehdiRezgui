import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mehdi Rezgui",
  role: "Développeur Full-Stack",
  tagline: "Je conçois des expériences web fluides, accessibles et maintenables.",
  heroDescription:
    "Passionné par le craft logiciel, j'allie rigueur technique et sens du détail pour livrer des produits qui ont du sens — du prototype au déploiement.",
  aboutTitle: "Au-delà du code",
  aboutParagraphs: [
    "Quand je ne suis pas derrière mon éditeur, je recharge les batteries autour de passions qui nourrissent ma créativité et mon énergie au quotidien.",
    "Le sport m'apprend la discipline et la constance ; les mangas et la culture japonaise m'inspirent par leur narration et leur esthétique. Ces univers me rappellent qu'un bon produit, comme une bonne histoire, doit captiver dès les premières secondes.",
  ],
  passions: [
    {
      id: "sport",
      title: "Sport",
      description:
        "Musculation, course à pied — la régularité et le dépassement guident ma façon d'aborder les projets.",
    },
    {
      id: "manga",
      title: "Mangas & culture JP",
      description:
        "One Piece, seinen, cinéma d'animation — une source infinie d'inspiration visuelle et narrative.",
    },
    {
      id: "learning",
      title: "Veille & apprentissage",
      description:
        "Toujours en train d'explorer de nouveaux outils, patterns et bonnes pratiques du web moderne.",
    },
  ],
  email: "contact@mehdirezgui.dev",
  cvPath: "/assets/CV_2026-05-04_Mehdi_Rezgui_compressed.pdf",
  // profileImage: "/profile.svg",
  profileImage: "/assets/imageProfil2.png",
};
