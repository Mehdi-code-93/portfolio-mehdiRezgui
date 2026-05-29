"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const inputClassName = cn(
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-card-foreground",
  "placeholder:text-muted-foreground outline-none transition-colors",
  "focus:border-primary focus:ring-2 focus:ring-primary/20",
);

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Discutons de votre projet
        </h2>
        <p className="mt-4 text-muted-foreground">
          Une idée, une mission ou une simple question ? Envoyez-moi un message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl space-y-5"
        noValidate
      >
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
            placeholder="vous@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={cn(inputClassName, "resize-y min-h-[120px]")}
            placeholder="Décrivez votre projet ou votre demande..."
          />
        </div>

        {state === "success" && (
          <p className="text-sm text-primary" role="status">
            Message envoyé avec succès. Je vous répondrai rapidement.
          </p>
        )}

        {state === "error" && errorMessage && (
          <p className="text-sm text-primary" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3",
            "text-sm font-medium text-primary-foreground transition-opacity",
            "hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </section>
  );
}
