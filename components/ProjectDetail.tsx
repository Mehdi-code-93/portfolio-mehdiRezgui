import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectDetailProps = {
  project: Project;
};

function SectionBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Link
        href="/#projets"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Retour aux projets
      </Link>

      <header
        className="mt-10 rounded-[2.5rem] border border-border p-8 md:p-12"
        style={{ backgroundColor: project.accent }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {project.stack}
        </p>
        <h1
          className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--project-title)" }}
        >
          {project.title}
        </h1>
        <p
          className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--project-subtitle)" }}
        >
          {project.summary}
        </p>

        {project.repoUrl && project.repoUrl !== "#" && (
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2",
                "text-sm text-foreground transition-colors hover:border-primary hover:text-primary",
              )}
            >
              <Github className="h-4 w-4" aria-hidden />
              Code source
            </a>
          </div>
        )}
      </header>

      <div className="mt-16 space-y-20">
        <SectionBlock label="Aperçu" title="Captures du projet">
          <div className="grid gap-6 md:grid-cols-3">
            {project.gallery.map((item, index) => (
              <div
                key={`${item.alt}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock label="Contexte" title="Le projet">
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            {project.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionBlock>

        <div className="grid gap-16 md:grid-cols-2">
          <SectionBlock label="Parcours" title="Défis surmontés">
            <ul className="space-y-4">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock label="Bilan" title="Ce que j'ai appris">
            <ul className="space-y-4">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-10">
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voir les autres projets
          </Link>

          <Link
            href="/#contact"
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5",
              "text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
            )}
          >
            Discutons de votre projet
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
