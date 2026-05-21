import { motion } from "framer-motion";
import {
  Code, Globe, Database, Wrench, Users,
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "Python", "C"] },
  { icon: Globe, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"] },
  { icon: Database, title: "Database", items: ["MongoDB", "MySQL"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "VS Code"] },
  { icon: Users, title: "Soft Skills", items: ["Communication", "Team Collaboration", "Problem Solving"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Toolbox" title="Skills & Stack">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-gradient-card rounded-2xl p-6 border border-border glow-hover"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <g.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1.5 rounded-full text-xs font-mono-display bg-secondary/70 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
