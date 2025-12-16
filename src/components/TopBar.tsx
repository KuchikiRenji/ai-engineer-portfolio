"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const TopBar = () => {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-accent/20 bg-gradient-to-r from-background via-background/95 to-background px-4 py-3 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-xs font-bold text-primary">
          KR
        </div>
        <div className="flex flex-col">
          <Link href="/" className="text-sm font-semibold text-primary hover:text-accent">
            Kuchiki Renji
          </Link>
          <span className="text-xs text-primary/60">AI Engineer · ML Engineer · Full-Stack</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/KuchikiRenji"
          className="hidden rounded-full border border-accent/40 px-3 py-1 text-xs font-semibold text-primary transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default TopBar;

