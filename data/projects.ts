import type { Project } from "./types";

/** Ordre du tableau = ordre d'affichage (2 cartes par ligne, alternance large/small). */
export const projects: Project[] = [
  {
    id: "restogenerator",
    title: "Restorator",
    stack: "Java, SpringBoot, MySQL",
    repoUrl: "#",
    accent: "var(--project-restogenerator)",
    image: "/assets/imgResto.jpeg",
    mockupBg: "var(--project-mockup-light)",
    summary:
      "Générateur de sites web pour restaurants, pensé pour automatiser la création de pages vitrines élégantes à partir de données structurées.",
    description: [
      "Restorator permet à un restaurateur de disposer rapidement d'un site professionnel sans compétences techniques. L'application génère des pages à partir d'un modèle de données centralisé : menu, horaires, localisation et galerie photos.",
      "Le back-end Spring Boot expose une API REST sécurisée ; MySQL stocke les contenus et les configurations de chaque établissement. L'interface d'administration simplifie la mise à jour du site en quelques clics.",
    ],
    challenges: [
      "Modéliser un schéma de base de données flexible pour des restaurants aux menus très différents.",
      "Générer des pages cohérentes visuellement tout en laissant de la personnalisation.",
      "Gérer la validation des données côté serveur pour éviter les contenus incomplets.",
    ],
    learnings: [
      "Conception d'une API REST avec Spring Boot et bonnes pratiques de séparation des couches.",
      "Modélisation relationnelle MySQL et requêtes optimisées pour des listes de plats.",
      "Importance de la validation métier dès la conception du back-end.",
    ],
    gallery: [
      { src: "/assets/imgResto.jpeg", alt: "Page d'accueil Restorator" },
      { src: "/assets/imgResto.jpeg", alt: "Interface d'administration" },
      { src: "/assets/imgResto.jpeg", alt: "Aperçu mobile du site généré" },
    ],
  },
  {
    id: "mynetflix",
    title: "Newflix",
    stack: "React, API",
    repoUrl: "#",
    accent: "var(--project-mynetflix)",
    image: "/assets/imgNetflix1.jpeg",
    mockupBg: "var(--project-mockup-light)",
    summary:
      "Clone de Netflix développé en React, connecté à une API externe pour afficher catalogues, catégories et fiches de contenus.",
    description: [
      "Newflix reproduit l'expérience de navigation d'une plateforme de streaming : grille de contenus, carrousels thématiques et page de détail pour chaque titre.",
      "L'application consomme une API REST pour récupérer films et séries, avec gestion du chargement et des états vides. L'interface sombre met l'accent sur les visuels et la lisibilité.",
    ],
    challenges: [
      "Structurer l'état global et les appels API sans surcharger les composants.",
      "Reproduire une grille responsive fluide avec de nombreuses images.",
      "Gérer les états de chargement et d'erreur de manière élégante.",
    ],
    learnings: [
      "Organisation d'une application React modulaire avec hooks personnalisés.",
      "Consommation d'API REST et gestion asynchrone des données.",
      "Design d'interfaces sombres accessibles et performantes.",
    ],
    gallery: [
      { src: "/assets/imgNetflix1.jpeg", alt: "Grille d'accueil Newflix" },
      { src: "/assets/imgNetflix1.jpeg", alt: "Carrousel de contenus" },
      { src: "/assets/imgNetflix1.jpeg", alt: "Fiche détail d'un titre" },
    ],
  },
  {
    id: "mysnap",
    title: "Snapap",
    stack: "React Native, Api",
    repoUrl: "#",
    accent: "var(--project-mysnap)",
    image: "/assets/imgSnap1.jpeg",
    mockupBg: "var(--project-mockup-light)",
    summary:
      "Application mobile inspirée de Snapchat, développée en React Native avec authentification et messagerie via API.",
    description: [
      "Snapap est une application mobile cross-platform qui reprend les codes d'un réseau social éphémère : capture, partage de stories et messagerie instantanée.",
      "React Native permet un déploiement iOS et Android à partir d'une seule base de code. L'API back-end gère l'authentification, le stockage des médias et les conversations.",
    ],
    challenges: [
      "Adapter l'UX mobile aux contraintes de performance sur appareils variés.",
      "Intégrer l'authentification et la gestion de session de bout en bout.",
      "Synchroniser les messages et médias en temps quasi réel.",
    ],
    learnings: [
      "Fondamentaux de React Native : navigation, composants natifs et styles.",
      "Intégration d'une API d'authentification et gestion des tokens.",
      "Optimisation des images et des listes longues sur mobile.",
    ],
    gallery: [
      { src: "/assets/imgSnap1.jpeg", alt: "Écran de connexion Snapap" },
      { src: "/assets/imgSnap1.jpeg", alt: "Fil de stories" },
      { src: "/assets/imgSnap1.jpeg", alt: "Interface de messagerie" },
    ],
  },
  {
    id: "myspotify",
    title: "Spot Music",
    stack: "React, API, Docker",
    repoUrl: "#",
    accent: "var(--project-myspotify)",
    image: "/assets/imgSpotify.jpeg",
    mockupBg: "var(--project-mockup-light)",
    summary:
      "Clone Spotify en React avec API dédiée, conteneurisé via Docker pour un déploiement reproductible.",
    description: [
      "Spot Music recrée l'interface d'un lecteur musical en streaming : sidebar de navigation, playlists, recherche et grille d'artistes.",
      "Le front React communique avec une API Node.js containerisée. Docker Compose orchestre les services pour un environnement de développement et de déploiement homogène.",
    ],
    challenges: [
      "Reproduire une interface riche avec sidebar, grilles et lecteur audio.",
      "Configurer Docker pour lier front-end, API et base de données.",
      "Maintenir une architecture claire entre services conteneurisés.",
    ],
    learnings: [
      "Conteneurisation avec Docker et orchestration via Docker Compose.",
      "Architecture client / serveur découplée et déployable indépendamment.",
      "Gestion de playlists et état utilisateur côté front React.",
    ],
    gallery: [
      { src: "/assets/imgSpotify.jpeg", alt: "Accueil Spot Music" },
      { src: "/assets/imgSpotify.jpeg", alt: "Vue bibliothèque et playlists" },
      { src: "/assets/imgSpotify.jpeg", alt: "Grille d'artistes et albums" },
    ],
  },
];
