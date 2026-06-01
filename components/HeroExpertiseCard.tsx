import Image from "next/image";
import type { ExpertiseArea } from "@/data/types";
import { cn } from "@/lib/utils";

type HeroExpertiseCardProps = {
  area: ExpertiseArea;
};

const offsetClass: Record<NonNullable<ExpertiseArea["offset"]>, string> = {
  left: "mr-auto ml-0 max-w-[160px]",
  right: "ml-auto mr-0 max-w-[160px]",
  none: "mx-auto max-w-[160px]",
};

export function HeroExpertiseCard({ area }: HeroExpertiseCardProps) {
  const offset = area.offset ?? "none";

  return (
    <article
      className={cn(
        "w-full rounded-2xl p-3",
        offsetClass[offset],
      )}
    >
      <div className="relative aspect-[16/12] overflow-hidden rounded-xl ring-4 ring-white shadow-[0_10px_30px_rgb(0,0,0,0.04)]">
        <Image
          src={area.image}
          alt={area.imageAlt}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>
      <p className="mt-3 p-2 py-2 text-center text-sm font-semibold bg-white rounded-lg ring-4 ring-white shadow-[0_15px_30px_rgb(0,0,0,0.07)] text-card-foreground">
        {area.title}
      </p>
    </article>
  );
}
