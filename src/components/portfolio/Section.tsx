import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-6 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {eyebrow && (
              <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary mb-3">
                // {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold">
                {title.split(" ").map((w, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-gradient">{w}</span>
                  ) : (
                    <span key={i}>{w} </span>
                  ),
                )}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
