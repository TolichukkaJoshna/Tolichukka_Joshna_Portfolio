import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Film } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Brain,
    name: "MindMatch",
    tagline: "AI-Based Matching Platform",
    description:
      "An AI-powered platform that connects like-minded people based on shared skills and interests using intelligent matching logic.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    href: "https://github.com/TolichukkaJoshna/MindMatch.git",
  },
  {
    icon: Film,
    name: "Movie Ticket Booking",
    tagline: "Java Desktop Application",
    description:
      "A Java-based movie ticket booking application that lets users browse movies, select seats, and book tickets efficiently.",
    stack: ["Java"],
    href: "https://github.com/TolichukkaJoshna/Movie-Ticket-Booking.git",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Selected Work" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative bg-gradient-card rounded-3xl p-7 border border-border overflow-hidden glow-hover"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                  <p.icon size={26} />
                </div>
                <span className="font-mono-display text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm font-mono-display text-primary mb-4">{p.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border font-mono-display">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> View on GitHub
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
