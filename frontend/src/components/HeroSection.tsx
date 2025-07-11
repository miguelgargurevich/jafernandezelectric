
import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const HeroSection: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-primary dark:bg-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-accent mb-4 tracking-tight"
      >
        {t.hero.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-2xl text-white dark:text-primary mb-6"
      >
        {t.hero.desc}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex gap-4 justify-center"
      >
        <a href="tel:5165432052" className="bg-accent text-primary dark:bg-accent dark:text-primary font-semibold px-6 py-3 rounded shadow hover:opacity-90 transition flex items-center gap-2">
          <PhoneIcon className="w-5 h-5 inline-block" aria-hidden="true" />
          <span>{t.hero.call}</span>
        </a>
        <a href="https://wa.me/15165432052" target="_blank" rel="noopener noreferrer" className="bg-white text-primary dark:bg-primary dark:text-white font-semibold px-6 py-3 rounded shadow hover:bg-accent hover:text-white transition flex items-center gap-2">
          <ChatBubbleLeftRightIcon className="w-5 h-5 inline-block" aria-hidden="true" />
          <span>{t.hero.whatsapp}</span>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
