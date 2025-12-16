"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects as projectData, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/utils/cn";


const getUnique = (arr: string[]) => Array.from(new Set(arr)).sort();

export const ProjectsSection = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [languageFilter, setLanguageFilter] = useState<string>("All");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = useMemo(
    () => ["All", ...getUnique(projectData.flatMap((p) => p.categories))],
    []
  );
  const languages = useMemo(
    () => ["All", ...getUnique(projectData.flatMap((p) => p.languages))],
    []
  );

  const filtered: Project[] = useMemo(() => {
    return projectData.filter((project) => {
      const categoryMatch =
        categoryFilter === "All" || project.categories.includes(categoryFilter);
      const languageMatch = languageFilter === "All" || project.languages.includes(languageFilter);
      return categoryMatch && languageMatch;
    });
  }, [categoryFilter, languageFilter]);

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Projects</p>
          <h2 className="text-2xl font-bold text-primary">Selected Work</h2>
          <p className="text-sm text-primary/80">View 20 projects by category or language.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="rounded-full border border-accent/40 bg-background px-3 py-1 text-sm font-medium text-primary transition hover:border-accent"
          >
            {showFilters ? "Hide Filters" : "Filters"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-3 rounded-2xl bg-background/70 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-semibold transition",
                    categoryFilter === cat
                      ? "border-accent bg-accent/15 text-primary"
                      : "border-accent/30 bg-background text-primary/80 hover:border-accent"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="language-filter" className="text-xs font-semibold text-primary/70">
                Language
              </label>
              <select
                id="language-filter"
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="rounded-lg border border-accent/30 bg-background px-3 py-2 text-sm text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

