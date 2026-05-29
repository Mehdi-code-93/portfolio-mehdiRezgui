"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project, ProjectImageAlign, ProjectTextAlign } from "@/data/types";
import type { ProjectCellSize } from "@/lib/project-grid";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  size: ProjectCellSize;
};

const textAlignClass: Record<ProjectTextAlign, string> = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

const imageWrapAlignClass: Record<ProjectImageAlign, string> = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
};

const imageWidthClass: Record<ProjectImageAlign, string> = {
  center: "w-full",
  left: "w-[92%] md:w-[88%]",
  right: "w-[92%] md:w-[88%]",
};

const layoutDefaults: Record<
  ProjectCellSize,
  { textAlign: ProjectTextAlign; imageAlign: ProjectImageAlign }
> = {
  large: { textAlign: "right", imageAlign: "left" },
  small: { textAlign: "center", imageAlign: "center" },
  full: { textAlign: "center", imageAlign: "center" },
};

export function ProjectCard({ project, size }: ProjectCardProps) {
  const textAlign = project.textAlign ?? layoutDefaults[size].textAlign;
  const imageAlign = project.imageAlign ?? layoutDefaults[size].imageAlign;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{ backgroundColor: project.accent }}
      className="group relative flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-[2.5rem] p-8 md:min-h-[440px] md:p-10"
    >
      <Link
        href={project.href}
        className="absolute inset-0 z-20 rounded-[2.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Voir le projet ${project.title}`}
      />

      <header
        className={cn("relative z-10 max-w-[85%]", textAlignClass[textAlign])}
      >
        <h3
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "var(--project-title)" }}
        >
          {project.title}
        </h3>
        <span
          className="mt-1 text-sm font-medium md:text-base"
          style={{ color: "var(--project-subtitle)" }}
        >
          {project.stack}
        </span>
      </header>

      <div
        className={cn(
          "relative z-10 mt-auto flex min-h-0 flex-1 flex-col pt-8",
          imageWrapAlignClass[imageAlign],
        )}
      >
        <div
          style={{ backgroundColor: project.mockupBg }}
          className={cn(
            "relative min-h-48 w-full flex-1 overflow-hidden rounded-3xl shadow-lg md:min-h-52",
            imageWidthClass[imageAlign],
          )}
        >
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes={
              size === "large" || size === "full"
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </div>
      </div>
    </motion.article>
  );
}
