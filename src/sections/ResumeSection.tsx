"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

const experiences = [
  {
    role: "Lead AI Engineer",
    company: "Stealth / Product",
    years: "2023 — Present",
    summary:
      "Leading AI product delivery: retrieval, evals, and agentic workflows with production guardrails."
  },
  {
    role: "Senior Frontend Engineer",
    company: "Growth SaaS",
    years: "2019 — 2023",
    summary:
      "Shipped design systems, edge-ready frontends, and telemetry-driven improvements for user growth."
  }
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "Kuchiki University",
    years: "2015 — 2019",
    summary: "Computer Science foundations with focus on systems and applied machine learning."
  }
];

const certifications: string[] = [];

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(() => {
    const defaultItem = items.find((item) => item.defaultOpen);
    return defaultItem?.id ?? null;
  });

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl bg-background/70 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={cn(
                "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-primary transition",
                "hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              )}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="text-xs text-primary/60">{isOpen ? "Hide" : "Show"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="px-4 pb-4 text-sm leading-relaxed text-primary/80"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export const ResumeSection = () => {
  const accordionItems: AccordionItem[] = [
    {
      id: "experience",
      title: "Professional Experience",
      defaultOpen: true,
      content: (
        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-xl bg-background/80 p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-primary">{exp.role}</span>
                <span className="text-xs text-primary/70">· {exp.company}</span>
                <span className="text-xs text-primary/60">({exp.years})</span>
              </div>
              <p className="mt-1 text-sm text-primary/80">{exp.summary}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "education",
      title: "Education",
      content: (
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.degree} className="rounded-xl bg-background/80 p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-primary">{edu.degree}</span>
                <span className="text-xs text-primary/70">· {edu.school}</span>
                <span className="text-xs text-primary/60">({edu.years})</span>
              </div>
              <p className="mt-1 text-sm text-primary/80">{edu.summary}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "certifications",
      title: "Certifications",
      content: certifications.length ? (
        <ul className="list-disc space-y-2 pl-5 text-sm text-primary/80">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-primary/70">To be added.</p>
      )
    }
  ];

  return (
    <section id="resume" className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Resume</p>
          <h2 className="text-2xl font-bold text-primary">Experience & Education</h2>
          <p className="text-sm text-primary/80">Inline view with a downloadable PDF.</p>
        </div>
        <Link
          href="/resume/KuchikiRenji_Resume.pdf"
          download
          className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Download PDF
        </Link>
      </div>

      <Accordion items={accordionItems} />
    </section>
  );
};

export default ResumeSection;

