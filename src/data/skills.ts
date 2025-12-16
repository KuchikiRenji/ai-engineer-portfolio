export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"]
  },
  {
    id: "ml-frameworks",
    title: "Machine Learning Frameworks",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face Transformers"]
  },
  {
    id: "web",
    title: "Web Development",
    items: ["Next.js (App Router)", "React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    items: ["Node.js", "FastAPI", "Postgres", "Prisma"]
  },
  {
    id: "data-viz",
    title: "Data & Visualization",
    items: ["Pandas", "SQL analytics", "Plotly", "D3.js (light)"]
  },
  {
    id: "devops",
    title: "DevOps / Tooling",
    items: ["Vercel", "Docker", "CI/CD (GitHub Actions)", "Feature flags / A/B testing"]
  }
];

