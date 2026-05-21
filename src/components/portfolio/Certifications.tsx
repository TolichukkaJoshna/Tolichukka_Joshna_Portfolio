import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "NPTEL Elite — Data Analytics with Python", issuer: "NPTEL" },
  { title: "NPTEL Elite — Advanced Computer Networks", issuer: "NPTEL" },
  { title: "C Programming Certification", issuer: "Brilliant Computer Education" },
  { title: "Python Certification", issuer: "Brilliant Computer Education" },
  { title: "HacXLerate 2025 — Participant", issuer: "Hackathon" },
  { title: "International Multi-Conference on Engineering, Science & Technology", issuer: "Conference" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="04 — Credentials" title="Certifications & Achievements">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 glow-hover flex gap-4"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
              <Award size={20} />
            </div>
            <div>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 font-mono-display">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
