import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { cn } from "@/utils/cn";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.22, delay: index * 0.02, ease: "easeOut" }}
      className="flex h-full flex-col gap-4 rounded-2xl border border-accent/40 bg-background/70 p-6 shadow ring-1 ring-accent/30"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-accent/30 bg-background/80">
        <div
          className="flex h-full w-full items-center justify-center text-xs text-primary/70"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(var(--color-accent),0.08), rgba(var(--color-primary),0.04)), url(${project.screenshot})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          Screenshot placeholder
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              className="text-sm text-accent underline-offset-4 transition hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-primary/80">{project.overview}</p>
        <p className="text-sm leading-relaxed text-primary/70">
          <span className="font-semibold text-primary">Outcome: </span>
          {project.outcome}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-primary/80">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-accent/50 bg-background/80 px-3 py-1 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-primary/70">
        {project.categories.map((cat) => (
          <span key={cat} className="rounded-full bg-accent/15 px-3 py-1 font-medium text-primary">
            {cat}
          </span>
        ))}
        {project.languages.map((lang) => (
          <span
            key={lang}
            className="rounded-full border border-accent/40 px-3 py-1 font-medium text-primary/80"
          >
            {lang}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;

