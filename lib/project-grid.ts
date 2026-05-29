import type { Project } from "@/data/types";

export type ProjectCellSize = "large" | "small" | "full";

export type ProjectRow = {
  rowIndex: number;
  cells: Project[];
};

/** Découpe les projets par paires (1 ligne = 2 cartes max). */
export function getProjectRows(projects: Project[]): ProjectRow[] {
  const rows: ProjectRow[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push({
      rowIndex: rows.length,
      cells: projects.slice(i, i + 2),
    });
  }
  return rows;
}

/**
 * Ligne impaire (0, 2, 4…) : gauche large, droite small.
 * Ligne paire (1, 3, 5…) : gauche small, droite large.
 */
export function getCellSize(
  rowIndex: number,
  cellIndex: number,
  cellsInRow: number,
): ProjectCellSize {
  if (cellsInRow === 1) return "full";
  const leftIsLarge = rowIndex % 2 === 0;
  const isLarge = cellIndex === 0 ? leftIsLarge : !leftIsLarge;
  return isLarge ? "large" : "small";
}

export const cellColClass: Record<ProjectCellSize, string> = {
  large: "md:col-span-2",
  small: "md:col-span-1",
  full: "md:col-span-3",
};
