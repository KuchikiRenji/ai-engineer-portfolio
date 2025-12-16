import type { Metadata } from "next";
import "@/styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "KuchikiRenji | Portfolio",
  description: "AI engineer and full-stack developer portfolio showcasing production-grade work.",
  keywords: [
    "AI developer portfolio",
    "Machine learning engineer",
    "Python AI projects",
    "AI engineer",
    "Full-stack developer",
    "TypeScript",
    "Next.js",
    "Vercel"
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "KuchikiRenji | AI Engineer Portfolio",
    description: "AI Engineer, ML Engineer, and Full-Stack Developer delivering production AI.",
    url: "https://kuchikirenji.vercel.app",
    siteName: "KuchikiRenji Portfolio",
    type: "website"
  },
  alternates: {
    canonical: "https://kuchikirenji.vercel.app"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-primary antialiased transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

