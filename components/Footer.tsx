import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center">
        <p className="text-lg font-medium text-foreground">
          Merci d&apos;avoir parcouru mon portfolio
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {profile.name} · {year}
        </p>

        <a
          href="#contact"
          className={cn(
            "mt-6 inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5",
            "text-sm text-foreground transition-all duration-300",
            "hover:border-primary hover:text-primary",
          )}
        >
          Une dernière question ? Écrivez-moi
        </a>
      </div>
    </footer>
  );
}
