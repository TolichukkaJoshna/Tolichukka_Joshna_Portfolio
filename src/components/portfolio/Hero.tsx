import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Github, Linkedin } from "lucide-react";

const ROLES = [
  "BTech Student",
  "Aspiring Full Stack Developer",
  "AI Enthusiast",
];

function useTyping() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Tolichukka</span>
            <br />
            Joshna.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl sm:text-2xl font-mono-display text-muted-foreground min-h-[2em]"
          >
            <span className="text-primary">&gt;</span>{" "}
            <span className="typing-caret text-foreground/90">{typed}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Passionate Computer Science student interested in Full Stack
            Development, AI-powered applications, and problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              <FolderGit2 size={18} /> View Projects
            </a>
            <a
              href="/Tolichukka_Joshna_resume.docx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/50 hover:text-primary transition-all"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-full glass hover:text-primary hover:border-primary/50 transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-full glass hover:text-primary hover:border-primary/50 transition-all">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-30" />
            <div className="relative glass rounded-2xl p-6 font-mono-display text-sm shadow-elegant">
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-chart-4/80" />
                <span className="w-3 h-3 rounded-full bg-chart-3/80" />
              </div>
              <pre className="text-muted-foreground leading-relaxed">
<span className="text-accent">const</span> <span className="text-primary">developer</span> = {"{"}
{"\n  "}<span className="text-foreground">name</span>: <span className="text-chart-3">'Joshna'</span>,
{"\n  "}<span className="text-foreground">role</span>: <span className="text-chart-3">'CSE Student'</span>,
{"\n  "}<span className="text-foreground">cgpa</span>: <span className="text-chart-4">8.92</span>,
{"\n  "}<span className="text-foreground">stack</span>: [<span className="text-chart-3">'React'</span>,
{"\n           "}<span className="text-chart-3">'Node'</span>, <span className="text-chart-3">'AI'</span>],
{"\n  "}<span className="text-foreground">learning</span>: <span className="text-accent">true</span>,
{"\n"}{"}"};
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
