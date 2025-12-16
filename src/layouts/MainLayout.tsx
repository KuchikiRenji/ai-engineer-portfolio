"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/TopBar";
import type { NavItem } from "@/data/navigation";

export type LayoutSection = NavItem & {
  content: React.ReactNode;
};

type MainLayoutProps = {
  sections: LayoutSection[];
};

export const MainLayout = ({ sections }: MainLayoutProps) => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const observers = useRef<IntersectionObserver | null>(null);

  const memoizedSections = useMemo(() => sections, [sections]);

  const handleSelect = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!memoizedSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.4
      }
    );

    observers.current = observer;

    memoizedSections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [memoizedSections]);

  return (
    <div className="bg-gradient-to-br from-background via-background to-background text-primary transition-colors">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <div className="hidden shrink-0 lg:block lg:w-64">
          <SidebarNav activeSection={activeSection} onSelect={handleSelect} sections={sections} />
        </div>

        <div className="flex min-h-screen flex-1 flex-col border-l border-accent/15">
          <div className="lg:hidden">
            <MobileNav
              activeSection={activeSection}
              onSelect={handleSelect}
              isOpen={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
              sections={sections}
            />
          </div>

          <TopBar />

          <div className="flex-1 px-4 pb-12 pt-6 sm:px-6">
            <main className="relative flex flex-col gap-10 sm:gap-14">
              {sections.map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  data-section-id={section.id}
                  ref={(node) => {
                    sectionRefs.current[section.id] = node;
                  }}
                  className="scroll-mt-32 rounded-3xl bg-background/80 p-6 shadow-md sm:p-10"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {section.label}
                    </h2>
                    <motion.span
                      layoutId={`section-dot-${section.id}`}
                      className="h-2 w-2 rounded-full bg-accent"
                      initial={false}
                    />
                  </div>
                  <div className="mt-4">{section.content}</div>
                </motion.section>
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

