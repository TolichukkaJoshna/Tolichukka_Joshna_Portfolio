import { motion } from "framer-motion";
import { Code2, Brain, Palette, Trophy, Music } from "lucide-react";
import { Section } from "./Section";

const interests = [
  { icon: Code2, label: "Coding" },
  { icon: Brain, label: "AI & New Tech" },
  { icon: Palette, label: "Drawing" },
  { icon: Trophy, label: "Sports" },
  { icon: Music, label: "Music" },
];

export function Interests() {
  return (
    <Section id="interests" eyebrow="06 — Beyond Code" title="Interests & Passions">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {interests.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 flex flex-col items-center text-center glow-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
              <it.icon size={22} />
            </div>
            <p className="font-medium">{it.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
