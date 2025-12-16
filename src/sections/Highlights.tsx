import { highlights } from "@/data/highlights";

export const Highlights = () => {
  return (
    <section id="projects" className="grid gap-4 sm:grid-cols-3 sm:gap-6">
      {highlights.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl bg-background/70 p-6 shadow-sm transition hover:-translate-y-1"
        >
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
          <p className="mt-2 text-sm text-primary/80">{item.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Highlights;

