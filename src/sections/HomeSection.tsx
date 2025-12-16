"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const HomeSection = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="grid gap-8 rounded-3xl border border-accent/40 bg-background/70 p-8 shadow-xl ring-1 ring-accent/30 sm:grid-cols-[1.1fr_0.9fr] sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">AI Engineer Portfolio</p>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">Kuchiki Renji</h1>
            <p className="text-lg font-semibold text-primary/90">
              AI Engineer / ML Engineer / Full-Stack Developer
            </p>
          </div>
          <p className="text-sm leading-relaxed text-primary/80">
            I design, build, and ship AI-first products—from fast prototypes to production systems.
            I focus on reliable inference pipelines, thoughtful UX, and calm, maintainable codebases.
          </p>
          <p className="text-sm leading-relaxed text-primary/80">
            Let&apos;s craft experiences where intelligence feels seamless and trustworthy.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#projects"
              className={cn(
                "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-background shadow-sm",
                "transition hover:-translate-y-0.5 hover:shadow-lg",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              )}
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className={cn(
                "rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent",
                "transition hover:bg-accent/10",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              )}
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-background/80 p-6 text-center shadow-inner">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-accent/40 bg-background">
              <Image
                src="/logo.png"
                alt="Logo placeholder"
                fill
                sizes="(max-width: 640px) 80px, 120px"
                className="object-contain p-3"
                priority
              />
            </div>
            <p className="text-sm text-primary/80">
              Logo placeholder — replace `/public/logo.png` with your mark.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;

