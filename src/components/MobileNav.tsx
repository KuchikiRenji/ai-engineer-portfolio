"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, type NavItem } from "@/data/navigation";
import { cn } from "@/utils/cn";

type MobileNavProps = {
  activeSection: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  sections?: NavItem[];
};

export const MobileNav = ({
  activeSection,
  onSelect,
  isOpen,
  onToggle,
  sections = navigation
}: MobileNavProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-accent/40 bg-background/70 px-4 py-3 shadow ring-1 ring-accent/30">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">AI Engineer</span>
          <span className="text-base font-semibold text-primary">Kuchiki Renji</span>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={onToggle}
          className="rounded-lg border border-accent/50 bg-background px-3 py-2 text-sm font-medium text-primary shadow transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
          >
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="absolute inset-x-0 top-0 z-50 flex h-screen flex-col gap-6 bg-background px-6 py-10"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.35em] text-accent">AI Engineer</span>
                  <span className="text-lg font-semibold text-primary">KuchikiRenji</span>
                </div>
                <button
                  type="button"
                  onClick={onToggle}
                  className="rounded-lg border border-accent/50 bg-background px-3 py-2 text-sm font-medium text-primary shadow transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Close
                </button>
              </div>
              <ul className="flex flex-col gap-3">
                {sections.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <button
                        type="button"
                        onClick={() => onSelect(item.id)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition",
                          "border border-accent/40 bg-background/70 text-primary hover:border-accent",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                          isActive && "border-accent text-accent"
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="h-2 w-2 rounded-full bg-accent"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

