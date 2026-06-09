import Image from "next/image";
import type { ExpertiseArea } from "@/data/types";
import { cn } from "@/lib/utils";

type HeroExpertiseCardProps = {
  area: ExpertiseArea;
  className?: string;
};

const offsetClass: Record<NonNullable<ExpertiseArea["offset"]>, string> = {
  left: "lg:mr-auto lg:ml-0",
  right: "lg:ml-auto lg:mr-0",
  none: "lg:mx-auto",
};

export function HeroExpertiseCard({ area, className }: HeroExpertiseCardProps) {
  const offset = area.offset ?? "none";

  return (
    <article
      className={cn(
        "w-full max-w-[140px] sm:max-w-none h-full flex flex-col",
        offsetClass[offset],
        className,
      )}
    >
      <div
        className="relative aspect-[16/12] shrink-0 overflow-hidden rounded-lg border-[3px] border-[var(--hero-expertise-ring)]"
        style={{ boxShadow: "var(--hero-expertise-image-shadow)" }}
      >
        <Image
          src={area.image}
          alt={area.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 25vw, 150px"
        />
      </div>
      <p
        className="mt-2 flex grow items-center justify-center rounded-md border-[3px] border-[var(--hero-expertise-ring)] px-2 py-1.5 text-center text-xs font-semibold text-card-foreground sm:text-sm"
        style={{
          backgroundColor: "var(--hero-expertise-label)",
          boxShadow: "var(--hero-expertise-shadow)",
        }}
      >
        {area.title}
      </p>
    </article>
  );
}
