
import React from "react";
import { useI18n } from "../i18n";

const About: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="w-full py-16 px-4 bg-primary dark:bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-6">{t.about.section}</h2>
      <p className="max-w-3xl mx-auto text-white/90 dark:text-primary/90 text-lg text-center">
        {t.about.desc}
      </p>
    </section>
  );
};

export default About;

