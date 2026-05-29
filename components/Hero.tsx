import Image from "next/image";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto grid max-w-6xl gap-12 px-6 pt-5 md:grid-cols-2 md:items-center"
    >
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {profile.role}
        </p>
        <h1 className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">{profile.tagline}</p>
        <p className="max-w-lg text-base leading-relaxed text-foreground/80">
          {profile.heroDescription}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
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

      <div className="relative mx-auto w-4/5 max-w-sm md:max-w-none">
        <div
          className=""
          aria-hidden
        />
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
          <Image
            src={profile.profileImage}
            alt={`Photo de profil de ${profile.name}`}
            fill
            priority
            quality={95}
            className="object-contain"
            sizes="(max-width: 768px)"
          />
        </div>
      </div>
    </section>
  );
}
