import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

export function getProjectPath(id: string) {
  return `/projects/${id}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.id);
}
