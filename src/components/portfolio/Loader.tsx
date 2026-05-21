import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-20 h-20">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-accent/30 border-b-accent"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
              />
            </div>
            <p className="font-mono-display text-sm text-muted-foreground tracking-widest">
              LOADING<span className="text-gradient">.</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
