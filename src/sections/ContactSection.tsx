"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    href: "mailto:KuchikiRenji@outlook.com",
    display: "KuchikiRenji@outlook.com",
    icon: "✉️"
  },
  { label: "GitHub", href: "https://github.com/KuchikiRenji", display: "KuchikiRenji", icon: "💻" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/KuchikiRenji",
    display: "KuchikiRenji",
    icon: "🔗"
  },
  { label: "Discord", href: "https://discord.com/users/KuchikiRenji", display: "KuchikiRenji", icon: "💬" },
  { label: "Telegram", href: "https://t.me/KuchikiRenji", display: "KuchikiRenji", icon: "📨" }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
        <h2 className="text-2xl font-bold text-primary">Let&apos;s connect</h2>
        <p className="text-sm text-primary/80">
          Reach out via your preferred channel. Form placeholder reserved for future expansion.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex items-center gap-3 rounded-2xl bg-background/70 p-4 shadow-sm"
          >
            <span className="text-lg" aria-hidden>
              {contact.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-primary/70">{contact.label}</span>
              <Link
                href={contact.href}
                className="text-sm font-semibold text-primary transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {contact.display}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl bg-background/60 p-4 text-sm text-primary/70">
        Form placeholder — ready for a contact form or booking link when backend wiring is added.
      </div>
    </section>
  );
};

export default ContactSection;

