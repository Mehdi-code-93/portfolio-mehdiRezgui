import { techStack } from "@/data/tech-stack";
import { cn } from "@/lib/utils";

function TechBadge({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-border bg-card px-5 py-2",
        "text-sm font-medium text-card-foreground",
      )}
    >
      {name}
    </span>
  );
}

export function TechCarousel() {
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-label="Technologies maîtrisées"
      className="mt-12 sm:mt-0 border-y border-border bg-muted/50 py-10"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {items.map((tech, index) => (
            <TechBadge key={`${tech.id}-${index}`} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
