
import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/solid";
import { useI18n } from "../i18n";

const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="w-full py-10 px-4 bg-primary dark:bg-white border-t border-accent dark:border-primary text-white/90 dark:text-primary/90">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start">
          <div className="flex items-center gap-2 text-accent text-lg font-bold mb-1">
            <MapPinIcon className="w-6 h-6" />
            {t.footer.address}
          </div>
          <div className="flex items-center gap-2 text-white/80 dark:text-primary/80">
            <ClockIcon className="w-5 h-5 text-accent" />
            {t.footer.hours}
          </div>
          <div className="flex items-center gap-2 text-white/80 dark:text-primary/80">
            <PhoneIcon className="w-5 h-5 text-accent" />
            <a href="tel:5165432052" className="underline hover:text-accent">{t.footer.phone}</a>
          </div>
          <div className="flex items-center gap-2 text-white/80 dark:text-primary/80">
            <EnvelopeIcon className="w-5 h-5 text-accent" />
            <a href="mailto:jafernandez.electric@gmail.com" className="underline hover:text-accent">{t.footer.email}</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end gap-2 mt-6 md:mt-0">
          <span className="flex items-center gap-2 text-2xl font-bold text-accent">
            <BoltIcon className="w-7 h-7 text-accent animate-spin-slow" aria-hidden="true" />
            {t.footer.company}
          </span>
          <span className="text-sm text-white/70 dark:text-primary/70">{t.footer.subtitle}</span>
          <div className="flex gap-3 mt-2">
            <a href="tel:5165432052" className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition" aria-label="Llamar">
              <PhoneIcon className="w-5 h-5 text-accent" />
            </a>
            <a href="mailto:jafernandez.electric@gmail.com" className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition" aria-label="Email">
              <EnvelopeIcon className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-accent/30 mt-8 pt-4 text-xs text-white/50 dark:text-primary/50 text-center">
        &copy; {new Date().getFullYear()} {t.footer.company}. {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;

