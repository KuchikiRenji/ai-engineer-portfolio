"use client";

import { useEffect } from "react";
import { ThemeProviderState, useTheme } from "@/hooks/useTheme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeApplier = ({ children }: ThemeProviderProps) => {
  const { mode, primary } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = mode;
    root.style.setProperty("--color-primary", primary);
  }, [mode, primary]);

  return <>{children}</>;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProviderState>
      <ThemeApplier>{children}</ThemeApplier>
    </ThemeProviderState>
  );
};

export default ThemeProvider;

