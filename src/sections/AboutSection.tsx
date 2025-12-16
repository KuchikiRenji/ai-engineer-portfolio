"use client";

import { motion } from "framer-motion";

const bioParagraphs = [
  "Computer Science foundation with a focus on building reliable software that ships.",
  "AI and ML engineering experience across prototyping, evaluation, and production deployment.",
  "Practical, production-oriented mindset: shipping measurable impact over theoretical novelty."
];

const expertise = [
  "Systems thinking for AI products: data flow, evals, and observability.",
  "Full-stack delivery with TypeScript, React, and edge-ready deployment on Vercel.",
  "Model lifecycle: prompt/finetune iteration, retrieval, and safety guardrails."
];

const coreValues = [
  "Explainable AI — clarity for users and stakeholders.",
  "Ethical engineering — responsible defaults and transparent trade-offs.",
  "Maintainable systems over hype — sustainable velocity beats one-off demos."
];

const SectionBlock = ({
  title,
  items
}: {
  title: string;
  items: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="rounded-2xl bg-background/70 p-6 shadow-sm"
  >
    <h3 className="text-lg font-semibold text-primary">{title}</h3>
    <div className="mt-3 space-y-2 text-sm leading-relaxed text-primary/80">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">About Me</p>
        <h2 className="text-2xl font-bold text-primary">Biography & Principles</h2>
        <p className="text-sm text-primary/80">
          A content-first layout that is easy to extend as your story evolves.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SectionBlock title="Biography" items={bioParagraphs} />
        <SectionBlock title="Skills & Expertise" items={expertise} />
      </div>

      <SectionBlock title="Core Values / Philosophy" items={coreValues} />
    </section>
  );
};

export default AboutSection;

