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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative flex min-h-[4.5rem] w-full items-center px-4 sm:px-6">
        <Link
          href="/"
          className="relative z-10 shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <nav
          className="absolute inset-0 hidden items-center justify-center md:flex"
          aria-label="Navigation principale"
        >
          <ul className="grid w-[min(100vw-8rem,18rem)] grid-cols-3 items-center sm:w-[20rem]">
            {navItems.map((item) => (
              <li key={item.href} className="text-center">
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 ml-auto shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
