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

export type Project = {
  id: string;
  title: string;
  stack: string;
  href: string;
  repoUrl?: string;
  accent: string;
  image: string;
  /** Optionnel — déduit automatiquement selon large/small si absent */
  textAlign?: ProjectTextAlign;
  imageAlign?: ProjectImageAlign;
  mockupBg?: string;
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
