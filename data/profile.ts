import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mehdi Rezgui",
  role: "Développeur Full-Stack",
  tagline: "Je conçois des expériences web fluides, accessibles et maintenables.",
  heroDescription:
    "Passionné par la conception de produits digitaux, j'allie réflexion UX et expertise technique. Mon approche ? Transformer des besoins complexes en solutions intuitives, en m'assurant que chaque choix de design est aussi élégant visuellement que techniquement robuste.",
  aboutTitle: "Au-delà du digitale",
  aboutParagraphs: [
    "Quand je ne suis pas derrière mon écran, je recharge les batteries autour de passions qui nourrissent ma créativité et mon énergie au quotidien.",
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
  cvPath: "/assets/CV_2026-06-01_Mehdi_Rezgui.pdf",
  profileImage: "/assets/imageProfil2.png",
};
