"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";

const hexToRgbString = (hex: string) => {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
};

const rgbStringToHex = (rgb: string) => {
  const [r, g, b] = rgb.split(" ").map(Number);
  const toHex = (c: number) => c.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const ThemeToggle = () => {
  const { mode, toggleMode, primary, setPrimary } = useTheme();
  const [colorInput, setColorInput] = useState<string>(rgbStringToHex(primary));

  const label = useMemo(() => (mode === "day" ? "Day Mode" : "Night Mode"), [mode]);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-accent/40 bg-background/70 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent/80">Theme</p>
          <p className="text-sm font-semibold text-primary">{label}</p>
        </div>
        <button
          type="button"
          onClick={toggleMode}
          className={cn(
            "relative inline-flex h-10 w-20 items-center rounded-full border border-accent/60 bg-background/80 px-1",
            "transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          )}
          aria-label="Toggle theme"
        >
          <motion.span
            layout
            className="h-8 w-8 rounded-full bg-primary shadow-sm"
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{ translateX: mode === "day" ? 0 : "140%" }}
          />
        </button>
      </div>
      <label className="flex items-center gap-3 text-sm text-primary/80">
        <span className="w-32">Primary color</span>
        <input
          aria-label="Pick primary color"
          type="color"
          value={colorInput}
          onChange={(event) => {
            const hex = event.target.value;
            setColorInput(hex);
            setPrimary(hexToRgbString(hex));
          }}
          className="h-10 w-16 cursor-pointer rounded border border-accent/50 bg-background"
        />
      </label>
    </div>
  );
};

export default ThemeToggle;

