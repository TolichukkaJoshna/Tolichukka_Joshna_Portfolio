import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    period: "2023 — 2027",
    title: "BTech in Computer Science & Engineering",
    place: "QIS College of Engineering and Technology",
    score: "CGPA: 8.92",
  },
  {
    period: "2021 — 2023",
    title: "Intermediate (MPC)",
    place: "Sri Chaitanya Jr College",
    score: "977 / 1000",
  },
  {
    period: "Until 2021",
    title: "Secondary School (SSC)",
    place: "Ram Nagar Municipal High School",
    score: "GPA: 10.0",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Timeline" title="My Education">
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[26px] sm:-left-[42px] top-3 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className="bg-gradient-card rounded-2xl p-6 border border-border glow-hover">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" />
                    {it.title}
                  </h3>
                  <span className="font-mono-display text-xs text-primary">{it.period}</span>
                </div>
                <p className="text-muted-foreground">{it.place}</p>
                <p className="mt-2 inline-block px-3 py-1 rounded-full text-xs bg-secondary border border-border font-mono-display">
                  {it.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
