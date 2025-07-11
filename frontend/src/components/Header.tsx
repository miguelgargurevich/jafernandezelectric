import React from "react";
import { useI18n } from "../i18n";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { BoltIcon } from "@heroicons/react/24/solid";


const Header: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  return (
    <motion.header
      className="w-full flex items-center justify-between py-4 px-6 bg-primary dark:bg-white border-b border-accent dark:border-primary"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        <BoltIcon className="w-8 h-8 text-accent mr-1 animate-spin-slow" aria-hidden="true" />
        <span className="text-2xl font-bold tracking-wide text-accent">{t.header.title}</span>
        <span className="hidden md:inline text-sm text-white/80 dark:text-primary/80 ml-4">{t.header.subtitle}</span>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="px-4 py-1 rounded font-semibold flex items-center gap-1 transition
            text-accent bg-transparent
            hover:bg-accent hover:text-primary
            dark:text-primary dark:bg-transparent
            dark:hover:bg-primary dark:hover:text-accent"
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
        >
          <span>{lang === "es" ? "🇪🇸" : "🇺🇸"}</span>
        </button>
        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
