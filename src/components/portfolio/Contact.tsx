import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

const info = [
  { icon: Mail, label: "Email", value: "tolichukkajoshna@gmail.com", href: "mailto:tolichukkajoshna@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93908 56258", href: "tel:+919390856258" },
  { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="07 — Say hello" title="Let's Build Together">
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-card border border-border rounded-3xl p-8"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm open to internships, collaborations, and interesting conversations.
            The fastest way to reach me is via email — I usually reply within a day.
          </p>
          <div className="space-y-4">
            {info.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <c.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono-display text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <a href="https://github.com/" target="_blank" rel="noreferrer"
              className="p-3 rounded-xl glass hover:text-primary hover:border-primary/50 transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
              className="p-3 rounded-xl glass hover:text-primary hover:border-primary/50 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
            window.location.href = `mailto:tolichukkajoshna@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="bg-gradient-card border border-border rounded-3xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-mono-display text-muted-foreground uppercase tracking-wider">Name</span>
              <input name="name" required
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
            </label>
            <label className="block">
              <span className="text-xs font-mono-display text-muted-foreground uppercase tracking-wider">Email</span>
              <input name="email" type="email" required
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-mono-display text-muted-foreground uppercase tracking-wider">Message</span>
            <textarea name="message" rows={6} required
              className="mt-1.5 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
          </label>
          <button type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition-transform">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
