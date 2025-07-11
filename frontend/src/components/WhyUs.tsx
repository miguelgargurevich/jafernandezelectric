import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../i18n";

const icons = [
  <ShieldCheckIcon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />,
  <ClockIcon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />,
  <StarIcon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />,
];

const WhyUs: React.FC = () => {
  const { t } = useI18n();
  return (
    <motion.section
      className="w-full py-16 px-4 bg-primary dark:bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>{t.whyus.section}</motion.h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {t.whyus.reasons.map((r, i) => (
          <motion.div
            key={i}
            className="bg-white/5 dark:bg-primary/10 rounded-lg p-6 flex flex-col items-center shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
          >
            {icons[i]}
            <h3 className="text-lg font-semibold text-white dark:text-primary mt-3 mb-1">{r.title}</h3>
            <p className="text-white/80 dark:text-primary/80 text-center text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyUs;

