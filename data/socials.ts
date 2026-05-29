import { Github, Linkedin } from "lucide-react";
import type { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehdi-rezgui",
    icon: Linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Mehdi-code-93",
    icon: Github,
  },
];
