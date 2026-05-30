"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import {
  cellColClass,
  getCellSize,
  getProjectRows,
} from "@/lib/project-grid";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

const EASE = [0.22, 1, 0.36, 1] as const;
const rows = getProjectRows(projects);

const headerVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const noMotion = { opacity: 1, y: 0 };

const cardViewport = { once: true, amount: 0.4 } as const;

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        className="mb-12 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={
          reduceMotion
            ? { hidden: noMotion, visible: noMotion }
            : headerVariants
        }
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Réalisations
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projets sélectionnés
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 md:gap-8">
        {rows.map(({ rowIndex, cells }) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8"
          >
            {cells.map((project, cellIndex) => {
              const size = getCellSize(rowIndex, cellIndex, cells.length);

              return (
                <motion.div
                  key={project.id}
                  className={cn(cellColClass[size], "flex")}
                  initial="hidden"
                  whileInView="visible"
                  viewport={cardViewport}
                  variants={
                    reduceMotion
                      ? { hidden: noMotion, visible: noMotion }
                      : cardVariants
                  }
                >
                  <ProjectCard project={project} size={size} />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
