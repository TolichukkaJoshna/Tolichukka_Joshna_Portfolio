import { motion } from "framer-motion";
import { GraduationCap, Cpu, Code2, Rocket } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: GraduationCap, title: "BTech CSE", text: "QIS College of Engineering & Technology" },
  { icon: Cpu, title: "CGPA: 8.92", text: "Consistent academic excellence" },
  { icon: Code2, title: "Web & AI", text: "Full Stack Development & AI-powered apps" },
  { icon: Rocket, title: "Builder", text: "Building real-world applications" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — Who I am" title="About Me">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm a Computer Science undergraduate at{" "}
            <span className="text-foreground font-medium">QIS College of Engineering and Technology</span>,
            currently maintaining a CGPA of <span className="text-primary font-semibold">8.92</span>.
          </p>
          <p>
            My curiosity sits at the intersection of <span className="text-foreground">AI</span>,{" "}
            <span className="text-foreground">Web Development</span>, and{" "}
            <span className="text-foreground">Software Engineering</span>. I love turning ideas into
            polished, working products — from intelligent matching platforms to clean, functional UIs.
          </p>
          <p>
            I'm always learning, always shipping, and actively looking for internships where I can grow
            with a great team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 glow-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                <h.icon size={20} />
              </div>
              <h3 className="font-semibold mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
