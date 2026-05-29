import Link from "next/link";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/#projets", label: "Projets" },
  { href: "/#apropos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
