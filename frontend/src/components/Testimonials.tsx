
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../i18n";

const Testimonials: React.FC = () => {
  const { t } = useI18n();
  // Carrusel de testimonios: muestra 1 a la vez, cambia cada 5s
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIdx(i => (i + 1) % t.testimonials.items.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [t.testimonials.items.length]);
  useEffect(() => { setIdx(0); }, [t.testimonials.items]);
  const testi = t.testimonials.items[idx];
  return (
    <section className="w-full py-16 px-4 bg-primary dark:bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-8">{t.testimonials.section}</h2>
      <div className="flex flex-col items-center max-w-2xl mx-auto justify-center min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 dark:bg-primary/10 rounded-lg p-6 w-full shadow text-center"
          >
            <p className="text-white/90 dark:text-primary/90 italic mb-4">“{testi.text}”</p>
            <span className="text-accent font-semibold block">{testi.name}</span>
            <span className="text-xs text-white/60 dark:text-primary/60 block mt-1">{testi.zone}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;

