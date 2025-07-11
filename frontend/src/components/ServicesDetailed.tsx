import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BoltIcon, HomeIcon, Cog6ToothIcon, LightBulbIcon, WrenchScrewdriverIcon, DevicePhoneMobileIcon, CheckBadgeIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import paneles from "../assets/services/paneles.jpeg";
import mantenimiento from "../assets/services/mantenimiento.png";
import cableado from "../assets/services/cableado.jpg";
import luminarias from "../assets/services/luminarias.jpg";
import pozos from "../assets/services/pozos-a-tierra.jpg";
import ventiladores from "../assets/services/ventiladores.jpeg";
import generales from "../assets/services/generales.jpg";
import indooroutdoor from "../assets/services/indoor-outdoor.jpg";
import boxes from "../assets/services/boxes.jpg";
import { useI18n } from "../i18n";

const icons = [
  <BoltIcon className="w-7 h-7 text-accent" />,
  <WrenchScrewdriverIcon className="w-7 h-7 text-accent" />,
  <Cog6ToothIcon className="w-7 h-7 text-accent" />,
  <BoltIcon className="w-7 h-7 text-accent" />,
  <HomeIcon className="w-7 h-7 text-accent" />,
  <BoltIcon className="w-7 h-7 text-accent" />,
  <DevicePhoneMobileIcon className="w-7 h-7 text-accent" />,
  <LightBulbIcon className="w-7 h-7 text-accent" />,
  <CheckBadgeIcon className="w-7 h-7 text-accent" />,
];
const images = [
  paneles,
  generales,
  mantenimiento,
  boxes,
  indooroutdoor,
  cableado,
  ventiladores,
  luminarias,
  pozos
];

const ServicesDetailed: React.FC = () => {
  const { t } = useI18n();
  const [selected, setSelected] = useState(t.servicesDetailed.categories[0]);
  // Resetear filtro al cambiar idioma/categoría principal
  useEffect(() => {
    setSelected(t.servicesDetailed.categories[0]);
  }, [t.servicesDetailed.categories[0]]);
  const filtered = selected === t.servicesDetailed.categories[0]
    ? t.servicesDetailed.items.map((title, i) => ({ title, category: t.servicesDetailed.categories[i === 0 ? 1 : i], icon: icons[i], img: images[i] }))
    : t.servicesDetailed.items
        .map((title, i) => ({ title, category: t.servicesDetailed.categories[i === 0 ? 1 : i], icon: icons[i], img: images[i] }))
        .filter(s => s.category === selected);

  return (
    <section className="w-full py-12 px-4 bg-primary dark:bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-6">{t.servicesDetailed.section}</h2>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {t.servicesDetailed.categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded border font-semibold flex items-center gap-2 transition
              ${selected === cat
                ? 'bg-accent text-primary border-accent dark:bg-accent dark:text-primary dark:border-accent'
                : 'bg-white/80 text-primary border-accent/30 hover:bg-accent/10 hover:text-accent dark:bg-primary/20 dark:text-white dark:border-primary/30 dark:hover:bg-accent/20 dark:hover:text-accent'}
            `}
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 inline-block" aria-hidden="true" />
            <span>{cat}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white/5 dark:bg-primary/10 rounded-lg p-6 flex flex-col items-center shadow transition-all cursor-pointer"
            whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
          >
            <div className="w-24 h-24 mb-2 flex items-center justify-center rounded-full overflow-hidden border-4 shadow border-accent/50 bg-white/80 dark:bg-primary/30" style={{ aspectRatio: '1/1' }}>
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover object-center"
                style={{ aspectRatio: '1/1' }}
                loading="lazy"
              />
            </div>
            {s.icon}
            <h3 className="text-lg font-semibold mt-3 mb-1 text-white dark:text-primary">{s.title}</h3>
            <span className="text-xs text-accent">{s.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailed;
