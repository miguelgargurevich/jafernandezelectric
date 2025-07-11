
import React from "react";
import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, HomeModernIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import instalacion from "../assets/services/instalacion.png";
import reparacion from "../assets/services/reparacion.png";
import mantenimiento from "../assets/services/mantenimiento.png";
import cableado from "../assets/services/cableado.jpg";
import pozos from "../assets/services/pozos-a-tierra.jpg";
import ventiladores from "../assets/services/ventiladores.jpeg";
import paneles from "../assets/services/paneles.jpeg";
import certificado from "../assets/services/certificado.png";
import luminarias from "../assets/services/luminarias.jpg";
import generales from "../assets/services/generales.jpg";
import indooroutdoor from "../assets/services/indoor-outdoor.jpg";
import { useI18n } from "../i18n";

const icons = [
  <CheckBadgeIcon className="w-8 h-8 text-white bg-accent rounded-full p-1 shadow mb-2" aria-hidden="true" />,
  <HomeModernIcon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />,
  <WrenchScrewdriverIcon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />,
];
const images = [
  certificado,
  instalacion,
  reparacion,
  cableado,
  pozos,
  ventiladores,
  paneles,
  mantenimiento,
  luminarias,
  generales,
  indooroutdoor
];

const Services: React.FC = () => {
  const { t } = useI18n();
  return (
    <motion.section
      className="w-full py-16 px-4 bg-primary dark:bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>{t.services.section}</motion.h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {t.services.items.map((s, i) => (
          <motion.div
            key={i}
            className={`flex-1 bg-white/5 dark:bg-primary/10 rounded-lg p-6 flex flex-col items-center shadow transition-all cursor-pointer ${i === 0 ? 'ring-4 ring-accent scale-105 z-10' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
          >
            {icons[i]}
            <div className={`w-24 h-24 mb-4 flex items-center justify-center rounded-full overflow-hidden border-2 border-accent bg-white/80 dark:bg-primary/30 ${i === 0 ? 'border-accent ring-2 ring-accent' : ''}`} style={{ aspectRatio: '1/1' }}>
              <img
                src={images[i]}
                alt={s.title}
                className="w-full h-full object-cover object-center"
                style={{ aspectRatio: '1/1' }}
                loading="lazy"
              />
            </div>
            <h3 className={`text-lg font-semibold mt-3 mb-1 ${i === 0 ? 'text-accent' : 'text-white dark:text-primary'}`}>{s.title}</h3>
            <p className="text-white/80 dark:text-primary/80 text-center text-sm">{s.desc}</p>
            {i === 0 && <span className="mt-2 px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold shadow">{t.services.featured}</span>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;

