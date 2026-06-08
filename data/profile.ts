import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mehdi Rezgui",
  role: "Développeur Full-Stack",
  tagline: "Je conçois et développe des expériences numériques de bout en bout, de l'interface utilisateur jusqu'au code.",
  heroDescription:
    "Passionné par la conception de produits digitaux, j'allie réflexion UX et expertise technique. Mon objectif : transformer des besoins complexes en solutions intuitives, de l'interface jusqu'au code.",
  aboutTitle: "Ma démarche hybride",
  aboutParagraphs: [
    "Ma force réside dans ma double vision : je comprends les enjeux UX et les contraintes techniques du développement. Cette approche me permet d'anticiper la faisabilité dès la phase de design pour livrer des produits cohérents, performants et maintenables.",
    "En dehors de mes projets, ma créativité est nourrie par mes passions : le sport (tennis, handball), la lecture de mangas, et un vif intérêt pour l'entrepreneuriat. Cette curiosité m'amène à garder une veille technologique constante, toujours à l'affût de nouvelles façons d'améliorer l'expérience utilisateur et l'efficacité des solutions que je conçois.",
  ],
passions: [
    {
      id: "sport",
      title: "Sport & Esprit d'équipe",
      description:
        "Tennis, handball et musculation — le terrain et la salle m'enseignent la discipline, la persévérance et la force du collectif.",
    },
    {
      id: "manga",
      title: "Mangas",
      description:
        "Lecteur passionné de mangas pour leur richesse narrative et visuelle, j'y puise une attention particulière portée au détail et à l'émotion.",
    },
    {
      id: "entrepreneuriat",
      title: "Entrepreneuriat",
      description:
        "Passionné par la création de valeur, j'aime explorer les mécanismes qui transforment une idée en un produit utile, pérenne et centré sur l'utilisateur.",
    },
    {
      id: "design-tech",
      title: "Veille Tech & Design",
      description:
        "J'explore les tendances tech et design, avec un focus permanent sur la performance, l'accessibilité et la qualité du code.",
    },
  ],
  email: "contact@mehdirezgui.dev",
  cvPath: "/assets/CV_2026-06-01_Mehdi_Rezgui.pdf",
  profileImage: "/assets/imageProfil2.png",
};
