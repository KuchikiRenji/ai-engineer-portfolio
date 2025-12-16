"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { cn } from "@/utils/cn";

export const SkillsSection = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(skillGroups.map((g) => g.id)));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="skills" className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Skills & Technologies</p>
        <h2 className="text-2xl font-bold text-primary">What I Work With</h2>
        <p className="text-sm text-primary/80">
          Truthful, data-driven list grouped for quick scanning. Expand or collapse categories.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const isOpen = openIds.has(group.id);
          return (
            <div
              key={group.id}
              className="rounded-2xl bg-background/70 shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(group.id)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-primary",
                  "hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                )}
                aria-expanded={isOpen}
              >
                <span>{group.title}</span>
                <span className="text-xs text-primary/60">{isOpen ? "Hide" : "Show"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="px-4 pb-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-accent/50 bg-background/80 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

