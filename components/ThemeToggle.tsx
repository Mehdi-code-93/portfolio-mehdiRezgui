"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="h-14 w-10 rounded-lg border border-border bg-card"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="group relative flex flex-col items-center gap-1"
    >

      <motion.div
        className={cn(
          "relative h-14 w-10 overflow-hidden rounded-lg border-2 border-border bg-muted shadow-inner",
          "transition-shadow duration-300 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
        )}
      >
        <div className="absolute inset-x-1 top-1 bottom-1 rounded-md bg-card/80" />

        <motion.div
          className="absolute inset-x-1.5 z-10 flex h-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md"
          initial={false}
          animate={{ y: isDark ? 26 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <Sun className="h-3.5 w-3.5" aria-hidden />
          )}
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-x-2 top-2 flex justify-center opacity-40">
          <Sun className="h-2.5 w-2.5 text-muted-foreground" aria-hidden />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-2 bottom-2 flex justify-center"
          animate={{ opacity: isDark ? 0.9 : 0.25 }}
        >
          <Moon className="h-2.5 w-2.5 text-muted-foreground" aria-hidden />
        </motion.div>
      </motion.div>
    </button>
  );
}
