
import React, { useEffect, useState, useRef } from "react";
import { useI18n } from "../i18n";

const FAQ: React.FC = () => {
  const { t } = useI18n();
  // Mostrar 5 preguntas aleatorias, cambiando cada 8 segundos
  const [visible, setVisible] = useState(() => {
    const idxs = Array.from({ length: t.faq.items.length }, (_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    return idxs.slice(0, 5);
  });
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    function shuffle() {
      const idxs = Array.from({ length: t.faq.items.length }, (_, i) => i);
      for (let i = idxs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
      }
      setVisible(idxs.slice(0, 5));
    }
    intervalRef.current = window.setInterval(shuffle, 14000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [t.faq.items.length]);
  useEffect(() => { setVisible(Array.from({ length: t.faq.items.length }, (_, i) => i).sort(() => Math.random() - 0.5).slice(0, 5)); }, [t.faq.items]);
  return (
    <section className="w-full py-16 px-4 bg-primary dark:bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-8">{t.faq.section}</h2>
      <div className="max-w-3xl mx-auto divide-y divide-accent/30 min-h-[520px] overflow-hidden relative" style={{ height: 520 }}>
        <div
          className="absolute top-0 left-0 w-full transition-transform duration-700"
          style={{ transform: `translateY(-${visible[0] * 104}px)` }}
        >
          {t.faq.items.map((f, i) => (
            <div key={i} className="py-4" style={{ height: 104 }}>
              <h3 className="text-lg font-semibold text-accent mb-1">{f.q}</h3>
              <p className="text-white/80 dark:text-primary/80">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

