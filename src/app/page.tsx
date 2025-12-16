"use client";

import dynamic from "next/dynamic";
import MainLayout, { type LayoutSection } from "@/layouts/MainLayout";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ResumeSection from "@/sections/ResumeSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";

const ProjectsSection = dynamic(() => import("@/sections/ProjectsSection"), {
  loading: () => <div className="text-sm text-primary/70">Loading projects…</div>
});

export default function HomePage() {
  const sections: LayoutSection[] = [
    { id: "home", label: "Home", content: <HomeSection /> },
    { id: "about", label: "About", content: <AboutSection /> },
    { id: "projects", label: "Projects", content: <ProjectsSection /> },
    { id: "resume", label: "Resume", content: <ResumeSection /> },
    { id: "skills", label: "Skills", content: <SkillsSection /> },
    { id: "contact", label: "Contact", content: <ContactSection /> }
  ];

  return <MainLayout sections={sections} />;
}

