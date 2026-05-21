import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="text-gradient font-semibold">Tolichukka Joshna</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href="mailto:tolichukkajoshna@gmail.com" className="p-2 rounded-lg hover:text-primary transition-colors"><Mail size={16} /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:text-primary transition-colors"><Github size={16} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:text-primary transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
