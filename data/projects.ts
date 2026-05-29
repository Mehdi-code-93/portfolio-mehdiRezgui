import type { Project } from "./types";

/** Ordre du tableau = ordre d'affichage (2 cartes par ligne, alternance large/small). */
export const projects: Project[] = [
  {
    id: "restogenerator",
    title: "Restorator",
    stack: "Java, SpringBoot, MySQL",
    href: "#",
    repoUrl: "#",
    accent: "var(--project-restogenerator)",
    image: "/assets/imgResto.jpeg",
    mockupBg: "var(--project-mockup-light)",
  },
  {
    id: "mynetflix",
    title: "Newflix",
    stack: "React, API",
    href: "#",
    repoUrl: "#",
    accent: "var(--project-mynetflix)",
    image: "/assets/imgNetflix1.jpeg",
    mockupBg: "var(--project-mockup-dark)",
  },
  {
    id: "mysnap",
    title: "Snapap",
    stack: "React Native, Api",
    href: "#",
    repoUrl: "#",
    accent: "var(--project-mysnap)",
    image: "/assets/imgSnap1.jpeg",
    mockupBg: "var(--project-mockup-light)",
  },
  {
    id: "myspotify",
    title: "Spot Music",
    stack: "React, API, Docker",
    href: "#",
    repoUrl: "#",
    accent: "var(--project-myspotify)",
    image: "/assets/imgSpotify.jpeg",
    mockupBg: "var(--project-mockup-dark)",
  },
];
