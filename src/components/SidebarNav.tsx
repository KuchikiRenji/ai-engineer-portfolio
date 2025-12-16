"use client";

import { motion } from "framer-motion";
import { navigation, type NavItem } from "@/data/navigation";
import { cn } from "@/utils/cn";

type SidebarNavProps = {
  activeSection: string;
  onSelect: (id: string) => void;
  sections?: NavItem[];
};

export const SidebarNav = ({
  activeSection,
  onSelect,
  sections = navigation
}: SidebarNavProps) => {
  return (
    <aside className="sticky top-0 flex h-screen flex-col justify-between border-r border-accent/20 bg-gradient-to-b from-background via-background/98 to-background px-5 py-6">
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">Portfolio</p>
          <p className="text-sm font-semibold text-primary">Sections</p>
        </div>
        <nav aria-label="Section navigation">
          <ul className="space-y-1">
            {sections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition",
                      "hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive ? "text-primary" : "text-primary/80"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 z-0 rounded-lg bg-accent/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="space-y-1 text-xs text-primary/70">
        <p className="font-semibold text-primary/80">Kuchiki Renji</p>
        <p>AI & ML Engineer building production-grade systems.</p>
      </div>
    </aside>
  );
};

export default SidebarNav;

