import Image from "next/image";
import { Download } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { HeroExpertiseCard } from "./HeroExpertiseCard";
import { cn } from "@/lib/utils";

const firstName = profile.name.split(" ")[0];

export function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto w-full max-w-[1400px] px-4 pt-6 sm:px-6 md:pt-8"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-10 md:gap-12",
          "md:grid-cols-2 md:items-center",
          "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12",
        )}
      >
        {/* Présentation */}
        <div
          className={cn(
            "flex flex-col gap-5 sm:gap-6",
            "mx-auto w-full max-w-md text-center",
            "md:mx-0 md:max-w-lg md:text-left",
            "lg:col-start-1 lg:row-start-1",
          )}
        >
          <div>
            <p className="text-base text-muted-foreground sm:text-lg">
              Bonjour, moi c&apos;est
            </p>
            <h1 className="mt-1 text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {firstName}
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.heroDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}

            <a
              href={profile.cvPath}
              download
              className={cn(
                "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground sm:w-auto",
                "transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90",
              )}
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div
          className={cn(
            "relative mx-auto flex w-full justify-center",
            "max-w-[300px] sm:max-w-[340px]",
            "md:col-start-2 md:row-start-1 md:max-w-[380px]",
            "lg:col-start-2 lg:row-start-1 lg:max-w-[420px] xl:max-w-[460px]",
          )}
        >
          <div
            className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: "var(--hero-portrait-halo)" }}
            aria-hidden
          />
          <div className="relative z-10 aspect-[3/4] w-full">
            <Image
              src={profile.profileImage}
              alt={`Photo de profil de ${profile.name}`}
              fill
              priority
              quality={95}
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 460px"
            />
          </div>
        </div>

        {/* Expertises */}
        <div
          className={cn(
            "w-full",
            "md:col-span-2 md:col-start-1 md:row-start-2",
            "lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:self-center",
          )}
        >
          <div
            className={cn(
              "relative",
            "grid grid-cols-3 gap-2 sm:gap-4",
              "md:mx-auto md:max-w-3xl",
              "lg:mx-0 lg:flex lg:max-w-none lg:flex-col lg:gap-5",
            )}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-6 bottom-6 hidden w-px -translate-x-1/2 bg-border sm:block lg:left-4 lg:translate-x-0"
              aria-hidden
            />

            {expertiseAreas.map((area, index) => (
              <div
                key={area.id}
                className={cn(
                  "relative flex justify-center px-0.5 sm:px-1 h-full",
                  "lg:block lg:justify-start lg:pl-6",
                  index === 1 && "lg:pl-10",
                )}
              >
                <span
                  className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary sm:block lg:left-0 lg:translate-x-0"
                  aria-hidden
                />
                <HeroExpertiseCard
                  area={area}
                  className="sm:max-w-[120px] md:max-w-[130px] lg:max-w-[148px] xl:max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
