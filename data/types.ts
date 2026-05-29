import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type TechItem = {
  id: string;
  name: string;
};

export type ProjectTextAlign = "left" | "center" | "right";

export type ProjectImageAlign = "center" | "left" | "right";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  stack: string;
  repoUrl?: string;
  accent: string;
  image: string;
  textAlign?: ProjectTextAlign;
  imageAlign?: ProjectImageAlign;
  mockupBg?: string;
  /** Résumé court affiché en en-tête de la page détail */
  summary: string;
  /** Paragraphes de présentation du projet */
  description: string[];
  /** Défis rencontrés et surmontés */
  challenges: string[];
  /** Compétences ou enseignements tirés du projet */
  learnings: string[];
  /** Captures ou visuels de démonstration */
  gallery: ProjectGalleryImage[];
};

export type Passion = {
  id: string;
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  passions: Passion[];
  email: string;
  cvPath: string;
  profileImage: string;
};
