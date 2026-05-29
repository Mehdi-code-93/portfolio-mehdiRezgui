import { projects } from "@/data/projects";
import {
  cellColClass,
  getCellSize,
  getProjectRows,
} from "@/lib/project-grid";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

const rows = getProjectRows(projects);

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Réalisations
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projets sélectionnés
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {rows.map(({ rowIndex, cells }) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8"
          >
            {cells.map((project, cellIndex) => {
              const size = getCellSize(rowIndex, cellIndex, cells.length);
              return (
                <div
                  key={project.id}
                  className={cn(cellColClass[size], "flex")}
                >
                  <ProjectCard project={project} size={size} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
