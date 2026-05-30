"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

const textBlockVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const noMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.25 } as const;

export function AboutMe() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? noMotionVariants : textBlockVariants;
  const cardItemVariants = reduceMotion ? noMotionVariants : cardVariants;
  const cardsWrapperVariants = reduceMotion
    ? noMotionVariants
    : cardsContainerVariants;

  return (
    <section
      id="apropos"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={variants}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              À propos
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {profile.aboutTitle}
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.ul
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={cardsWrapperVariants}
          >
            {profile.passions.map((passion) => (
              <motion.li
                key={passion.id}
                variants={cardItemVariants}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-card-foreground">
                  {passion.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {passion.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
