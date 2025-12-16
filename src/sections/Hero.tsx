import Link from "next/link";
import { cn } from "@/utils/cn";

export const Hero = () => {
  return (
    <section className="grid gap-6 rounded-2xl bg-background/70 p-6 shadow-md sm:grid-cols-2 sm:p-10">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.25rem] text-accent">Frontend Engineer</p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Building sleek, fast, and maintainable web experiences.
        </h1>
        <p className="text-sm text-primary/80 sm:text-base">
          A production-ready scaffold using Next.js, TypeScript, and Tailwind CSS. Mobile-first,
          accessible, and optimized for Vercel deployments.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#projects"
            className={cn(
              "rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow",
              "transition hover:-translate-y-0.5 hover:shadow-lg",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            )}
          >
            View projects
          </Link>
          <Link
            href="#contact"
            className={cn(
              "rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent",
              "transition hover:bg-accent/10",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            )}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative aspect-square w-full max-w-xs rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-background/80 p-1 shadow-2xl">
          <div className="flex h-full w-full items-center justify-center rounded-[28px] bg-background/80">
            <span className="text-center text-lg font-semibold text-primary">
              Placeholder visual
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

