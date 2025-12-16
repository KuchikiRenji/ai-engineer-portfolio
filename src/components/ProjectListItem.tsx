import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectListItemProps = {
  project: Project;
};

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <li className="rounded-xl border border-accent/40 bg-background/70 p-4 shadow-sm ring-1 ring-accent/30">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-primary">{project.title}</h3>
          <p className="text-xs text-primary/70">
            {project.categories.join(" • ")} · {project.languages.join(" / ")}
          </p>
        </div>
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
      <p className="mt-2 text-sm leading-relaxed text-primary/80">{project.overview}</p>
      <p className="mt-1 text-sm text-primary/70">
        <span className="font-semibold text-primary">Outcome: </span>
        {project.outcome}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-primary/80">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-accent/50 bg-background/80 px-3 py-1 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ProjectListItem;

