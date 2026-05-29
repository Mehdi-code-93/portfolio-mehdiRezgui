import { profile } from "@/data/profile";

export function AboutMe() {
  return (
    <section
      id="apropos"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            À propos
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {profile.aboutTitle}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {profile.passions.map((passion) => (
              <li
                key={passion.id}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-card-foreground">
                  {passion.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {passion.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
