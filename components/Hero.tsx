import Image from "next/image";
import { Download, Mail } from "lucide-react";
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
      className="mx-auto w-full max-w-[1400px] px-6 pt-6 md:pt-10"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-8 xl:gap-12">
        <div className="flex flex-col gap-6 lg:max-w-md">
          <div>
            <p className="text-base text-muted-foreground md:text-lg">
              Bonjour, moi c&apos;est
            </p>
            <h1 className="mt-1 text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {firstName}
            </h1>
          </div>

          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            {profile.heroDescription}
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
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
                  "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90",
                )}
              >
                <Download className="h-4 w-4" aria-hidden />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>

        {/* Colonne centre — portrait */}
        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
          <div
            className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/70"
            aria-hidden
          />
          <div className="relative z-10 aspect-[3/4] w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]">
            <Image
              src={profile.profileImage}
              alt={`Photo de profil de ${profile.name}`}
              fill
              priority
              quality={95}
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 50vw, 460px"
            />
          </div>
        </div>

        {/* Colonne droite — expertises */}
        <div className="relative flex flex-col gap-5 py-4 lg:py-0">
          <div
            className="pointer-events-none absolute left-4 top-8 bottom-8 hidden w-px bg-border lg:block"
            aria-hidden
          />

          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              className={cn(
                "relative lg:pl-6",
                index === 1 && "lg:pl-10",
              )}
            >
              <span
                className="absolute left-0 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-primary lg:block"
                aria-hidden
              />
              <HeroExpertiseCard area={area} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
