import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mehdi Rezgui",
  role: "Développeur Full-Stack",
  tagline: "Je conçois et développe des expériences numériques de bout en bout, de l'interface utilisateur jusqu'au code.",
  heroDescription:
    "Passionné par la conception de produits digitaux, j'allie réflexion UX et expertise technique. Mon objectif : transformer des besoins complexes en solutions intuitives, de l'interface jusqu'au code.",
  aboutTitle: "Ma démarche hybride",
  aboutParagraphs: [
    "Ma force réside dans ma double vision : je comprends les enjeux UX et les contraintes techniques du développement. Cette approche me permet d'anticiper la faisabilité dès la phase de design pour livrer des produits cohérents et maintenables.",
    "En dehors de mes projets, ma créativité est nourrie par mes passions : le sport pour la discipline, et la narration des mangas qui m'inspire une attention particulière portée aux détails et à l'expérience utilisateur dans tout ce que je conçois.",
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
      id: "design-tech",
      title: "Veille Design & Tech",
      description:
        "J'explore les tendances UI/UX et les standards du Web moderne, avec un focus sur la performance, l'accessibilité et la qualité du code.",
    },
  ],
  email: "contact@mehdirezgui.dev",
  cvPath: "/assets/CV_2026-06-01_Mehdi_Rezgui.pdf",
  profileImage: "/assets/imageProfil2.png",
};
