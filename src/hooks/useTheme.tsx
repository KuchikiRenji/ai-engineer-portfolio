"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "day" | "night";

const THEME_MODE_KEY = "kr-theme-mode";
const THEME_PRIMARY_KEY = "kr-theme-primary";

type ThemeContextValue = {
  mode: ThemeMode;
  primary: string;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setPrimary: (rgbString: string) => void;
};

const DEFAULT_PRIMARY_DAY = "15 23 42";
const DEFAULT_PRIMARY_NIGHT = "226 232 240";

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ThemeProviderState intentionally kept client-side.
// Assumption: theme state is not critical SEO content and can hydrate on the client.
export const ThemeProviderState = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>("day");
  const [primary, setPrimaryState] = useState<string>(DEFAULT_PRIMARY_DAY);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedMode = window.localStorage.getItem(THEME_MODE_KEY) as ThemeMode | null;
    const storedPrimary = window.localStorage.getItem(THEME_PRIMARY_KEY);

    if (storedMode) {
      setModeState(storedMode);
      setPrimaryState(
        storedPrimary ?? (storedMode === "day" ? DEFAULT_PRIMARY_DAY : DEFAULT_PRIMARY_NIGHT)
      );
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = prefersDark ? "night" : "day";
    setModeState(initialMode);
    setPrimaryState(initialMode === "day" ? DEFAULT_PRIMARY_DAY : DEFAULT_PRIMARY_NIGHT);
  }, []);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_MODE_KEY, nextMode);
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "day" ? "night" : "day"));
  }, [setMode]);

  const setPrimary = useCallback((rgbString: string) => {
    setPrimaryState(rgbString);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_PRIMARY_KEY, rgbString);
    }
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      primary,
      setMode,
      toggleMode,
      setPrimary
    }),
    [mode, primary, setMode, toggleMode, setPrimary]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};

export type { ThemeMode, ThemeContextValue };


