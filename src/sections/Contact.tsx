import Link from "next/link";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="rounded-2xl border border-accent/40 bg-background/60 p-6 shadow ring-1 ring-accent/30 sm:p-10"
    >
      <h2 className="text-2xl font-semibold text-primary">Let&apos;s build together</h2>
      <p className="mt-3 max-w-2xl text-sm text-primary/80">
        Drop in your details and envisioned scope. This placeholder section is ready to be replaced
        with a form or contact mechanism when backend wiring is available.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="mailto:hello@example.com"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Email me
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default Contact;

