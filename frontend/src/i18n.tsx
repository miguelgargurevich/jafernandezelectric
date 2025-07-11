import { createContext, useContext, useState } from "react";
import type { JSX } from "react";
import type { ReactNode } from "react";

const translations = {
  es: {
    header: {
      title: "JA FERNANDEZ ELECTRIC",
      subtitle: "Electricista licenciado en Nassau y Suffolk County"
    },
    hero: {
      title: "JA FERNANDEZ ELECTRIC",
      desc: "Electricista licenciado en Nassau y Suffolk County, Long Island, NY",
      call: "Llámanos hoy",
      whatsapp: "WhatsApp"
    },
    services: {
      section: "Nuestros servicios",
      featured: "¡Servicio destacado!",
      items: [
        {
          title: "Certificación eléctrica",
          desc: "Certificados y trámites eléctricos para comercios y residencias. Cumplimiento normativo garantizado."
        },
        {
          title: "Instalaciones eléctricas",
          desc: "Montaje y renovación de cableado, tableros y sistemas eléctricos en hogares y comercios."
        },
        {
          title: "Reparaciones y emergencias",
          desc: "Solución rápida y segura de fallas eléctricas, cortocircuitos y emergencias."
        }
      ]
    },
    whyus: {
      section: "¿Por qué elegirnos?",
      reasons: [
        {
          title: "Profesionalismo y experiencia",
          desc: "Más de 25 años brindando soluciones eléctricas seguras y eficientes."
        },
        {
          title: "Atención rápida 24/7",
          desc: "Respuesta inmediata ante emergencias eléctricas en cualquier momento."
        },
        {
          title: "Clientes satisfechos",
          desc: "Calificaciones y testimonios que avalan nuestro compromiso."
        }
      ]
    },
    servicesDetailed: {
      section: "Servicios detallados",
      categories: ["Todos", "Instalaciones", "Residencial", "Comercial", "Mantenimiento"],
      items: [
        "Paneles eléctricos",
        "Reparaciones generales",
        "Mantenimiento preventivo y correctivo",
        "Breaker boxes y entradas de servicio",
        "Trabajo interior y exterior",
        "Cableado subterráneo",
        "Ventiladores",
        "Luminarias y alumbrado",
        "Pozos de tierra y servicios trifásicos"
      ]
    },
    testimonials: {
      section: "Testimonios de clientes",
      items: [
        { name: "María G.", text: "Excelente servicio, rápidos y muy profesionales. Los recomiendo totalmente.", zone: "Massapequa" },
        { name: "Carlos R.", text: "Solucionaron un problema eléctrico en mi negocio en tiempo récord. Muy confiables.", zone: "Farmingdale" },
        { name: "Lucía P.", text: "Atención personalizada y trabajo impecable. Sin duda volveré a contratarlos.", zone: "Levittown" },
        { name: "Jorge S.", text: "Muy atentos y resolvieron todo en una sola visita.", zone: "Amityville" },
        { name: "Ana T.", text: "Me explicaron todo el trabajo y cumplieron con los tiempos.", zone: "Seaford" },
        { name: "Pedro M.", text: "Precios justos y excelente calidad.", zone: "Wantagh" },
        { name: "Sofía L.", text: "Recomiendo por su honestidad y profesionalismo.", zone: "Bethpage" },
        { name: "Raúl D.", text: "Vinieron un domingo y resolvieron mi emergencia.", zone: "Lindenhurst" },
        { name: "Marta F.", text: "Muy limpios y ordenados en su trabajo.", zone: "Copiague" },
        { name: "Esteban V.", text: "Me ayudaron con la instalación de paneles solares.", zone: "Babylon" },
        { name: "Patricia C.", text: "Atención rápida y cordial.", zone: "West Islip" },
        { name: "Gustavo N.", text: "Solucionaron un cortocircuito en minutos.", zone: "East Meadow" },
        { name: "Rosa E.", text: "Muy recomendables para instalaciones nuevas.", zone: "Bellmore" },
        { name: "Miguel F.", text: "Me instalaron un cargador para auto eléctrico sin problemas.", zone: "Merrick" },
        { name: "Laura Z.", text: "Excelente trato y garantía escrita.", zone: "Freeport" },
        { name: "Andrés J.", text: "Mejoraron la iluminación de mi local.", zone: "Hicksville" },
        { name: "Cecilia B.", text: "Muy puntuales y responsables.", zone: "Uniondale" },
        { name: "Tomás Q.", text: "Me ayudaron con el seguro del hogar.", zone: "Rockville Centre" },
        { name: "Valeria S.", text: "Repararon el tablero eléctrico de mi casa.", zone: "Oceanside" },
        { name: "Javier K.", text: "Instalaron luminarias LED en toda la oficina.", zone: "Garden City" },
        { name: "Natalia W.", text: "Muy buena atención post-venta.", zone: "Long Beach" },
        { name: "Pablo H.", text: "Mejoraron la seguridad eléctrica de mi comercio.", zone: "Baldwin" },
        { name: "Elena U.", text: "Recomiendo por su rapidez y eficiencia.", zone: "Roosevelt" },
        { name: "Sergio X.", text: "Me instalaron ventiladores de techo en toda la casa.", zone: "Hempstead" },
        { name: "Camila Y.", text: "Excelente asesoramiento en domótica.", zone: "Westbury" },
        { name: "Ramiro O.", text: "Muy buena predisposición y trato.", zone: "Plainview" },
        { name: "Florencia P.", text: "Me instalaron tomas adicionales en la cocina.", zone: "Syosset" },
        { name: "Hernán L.", text: "Solucionaron un problema de baja tensión.", zone: "Woodbury" },
        { name: "Paula M.", text: "Mejoraron la instalación de mi local comercial.", zone: "Jericho" },
        { name: "Iván T.", text: "Muy recomendables para emergencias.", zone: "Massapequa Park" }
      ]
    },
    faq: {
      section: "Preguntas frecuentes",
      items: [
        { q: "¿Atienden emergencias los domingos?", a: "Sí, atendemos emergencias eléctricas los domingos. Llámanos al (516) 543-2052 para atención inmediata." },
        { q: "¿Trabajan tanto en residencias como en comercios?", a: "Sí, ofrecemos servicios eléctricos tanto para hogares como para negocios en Nassau y Suffolk County." },
        { q: "¿Están licenciados y asegurados?", a: "Por supuesto, contamos con licencia y seguro vigente para operar en la zona." },
        { q: "¿Realizan instalaciones de paneles solares?", a: "Sí, instalamos y damos mantenimiento a paneles solares residenciales y comerciales." },
        { q: "¿Pueden instalar cargadores para autos eléctricos?", a: "Sí, instalamos cargadores para vehículos eléctricos en casas y negocios." },
        { q: "¿Ofrecen presupuestos sin cargo?", a: "Sí, los presupuestos y consultas son gratuitos y sin compromiso." },
        { q: "¿Qué marcas de materiales utilizan?", a: "Solo trabajamos con materiales certificados y marcas reconocidas por su calidad y seguridad." },
        { q: "¿Atienden urgencias fuera de horario?", a: "Sí, tenemos atención de emergencias 24/7 para clientes residenciales y comerciales." },
        { q: "¿Pueden hacer mantenimiento preventivo?", a: "Sí, ofrecemos planes de mantenimiento preventivo y correctivo para instalaciones eléctricas." },
        { q: "¿Trabajan con seguros de hogar?", a: "Sí, colaboramos con compañías de seguros para reparaciones eléctricas cubiertas por pólizas." },
        { q: "¿Reparan cortocircuitos?", a: "Sí, localizamos y reparamos cortocircuitos en todo tipo de instalaciones." },
        { q: "¿Instalan luminarias LED?", a: "Sí, instalamos y reemplazamos luminarias LED para ahorro energético." },
        { q: "¿Pueden certificar instalaciones eléctricas?", a: "Sí, emitimos certificados de instalación eléctrica para trámites y habilitaciones." },
        { q: "¿Realizan cableado estructurado?", a: "Sí, hacemos cableado estructurado para redes de datos y telefonía." },
        { q: "¿Instalan ventiladores de techo?", a: "Sí, instalamos y reparamos ventiladores de techo y extractores." },
        { q: "¿Pueden automatizar sistemas de iluminación?", a: "Sí, instalamos sistemas de domótica y automatización de luces." },
        { q: "¿Trabajan en obras nuevas y remodelaciones?", a: "Sí, realizamos instalaciones eléctricas en obras nuevas y remodelaciones." },
        { q: "¿Ofrecen garantía por los trabajos?", a: "Sí, todos nuestros trabajos cuentan con garantía escrita." },
        { q: "¿Pueden instalar tomas y enchufes adicionales?", a: "Sí, agregamos tomas y enchufes donde los necesite." },
        { q: "¿Qué formas de pago aceptan?", a: "Aceptamos efectivo, transferencias y tarjetas de crédito/débito." },
        { q: "¿Pueden instalar sistemas de alarma?", a: "Sí, instalamos y configuramos sistemas de alarma para hogares y negocios." },
        { q: "¿Realizan inspecciones eléctricas?", a: "Sí, hacemos inspecciones y diagnósticos eléctricos completos." },
        { q: "¿Pueden instalar porteros eléctricos?", a: "Sí, instalamos porteros eléctricos y videoporteros." },
        { q: "¿Ofrecen mantenimiento a comunidades?", a: "Sí, brindamos mantenimiento eléctrico a edificios y comunidades de vecinos." },
        { q: "¿Pueden asesorar en eficiencia energética?", a: "Sí, asesoramos para mejorar el consumo y eficiencia energética de su propiedad." }
      ]
    },
    about: {
      section: "¿Quiénes somos?",
      desc: "J.A. Fernandez Electric es una empresa eléctrica con más de 25 años de experiencia sirviendo Nassau y Suffolk County, Long Island, NY. Estamos licenciados y asegurados para ofrecer servicios eléctricos comerciales y residenciales de alta calidad. Atendemos nuevos y existentes hogares y negocios con profesionalismo y compromiso."
    },
    footer: {
      address: "47 Robert Ave Massapequa NY 11758",
      hours: "Lunes a sábado 8am–6pm, domingos solo emergencias",
      phone: "(516) 543-2052",
      email: "jafernandez.electric@gmail.com",
      company: "J.A. Fernandez Electric",
      subtitle: "Electricista licenciado en Nassau y Suffolk County",
      copyright: "Todos los derechos reservados."
    },
    contact: {
      validation: {
        name: "Nombre requerido",
        phone: "Teléfono requerido",
        message: "Mensaje requerido"
      },
      title: "Contáctanos",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      sent: "¡Mensaje enviado correctamente!",
      success: "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos a la brevedad. Si tu consulta es urgente, puedes llamarnos al (516) 543-2052.",
      error: "Error al enviar. Intente más tarde.",
    },
    seo: {
      title: "J.A. Fernandez Electric | Electricista en Nassau y Suffolk County",
      description: "Electricistas profesionales con más de 25 años de experiencia en Nassau y Suffolk County, Long Island, NY. Instalaciones, mantenimiento y emergencias eléctricas.",
      ogDescription: "Servicios eléctricos residenciales y comerciales. Licenciados, asegurados y con atención de emergencias."
    },
  },
  en: {
    header: {
      title: "JA FERNANDEZ ELECTRIC",
      subtitle: "Licensed electrician in Nassau and Suffolk County"
    },
    hero: {
      title: "JA FERNANDEZ ELECTRIC",
      desc: "Licensed electrician in Nassau and Suffolk County, Long Island, NY",
      call: "Call us today",
      whatsapp: "WhatsApp"
    },
    services: {
      section: "Our Services",
      featured: "Featured service!",
      items: [
        {
          title: "Electrical Certification",
          desc: "Certificates and electrical paperwork for businesses and homes. Guaranteed code compliance."
        },
        {
          title: "Electrical Installations",
          desc: "Installation and renovation of wiring, panels, and electrical systems in homes and businesses."
        },
        {
          title: "Repairs and Emergencies",
          desc: "Quick and safe solution for electrical faults, short circuits, and emergencies."
        }
      ]
    },
    whyus: {
      section: "Why choose us?",
      reasons: [
        {
          title: "Professionalism and experience",
          desc: "Over 25 years providing safe and efficient electrical solutions."
        },
        {
          title: "Fast 24/7 attention",
          desc: "Immediate response to electrical emergencies at any time."
        },
        {
          title: "Satisfied clients",
          desc: "Ratings and testimonials that endorse our commitment."
        }
      ]
    },
    servicesDetailed: {
      section: "Detailed services",
      categories: ["All", "Installations", "Residential", "Commercial", "Maintenance"],
      items: [
        "Electrical panels",
        "General repairs",
        "Preventive and corrective maintenance",
        "Breaker boxes and service entries",
        "Indoor and outdoor work",
        "Underground wiring",
        "Fans",
        "Lighting and lamps",
        "Grounding and three-phase services"
      ]
    },
    testimonials: {
      section: "Client testimonials",
      items: [
        { name: "Maria G.", text: "Excellent service, fast and very professional. I totally recommend them.", zone: "Massapequa" },
        { name: "Carlos R.", text: "They solved an electrical problem in my business in record time. Very reliable.", zone: "Farmingdale" },
        { name: "Lucia P.", text: "Personalized attention and impeccable work. I will definitely hire them again.", zone: "Levittown" },
        { name: "George S.", text: "Very attentive and solved everything in one visit.", zone: "Amityville" },
        { name: "Ann T.", text: "They explained all the work and met the deadlines.", zone: "Seaford" },
        { name: "Peter M.", text: "Fair prices and excellent quality.", zone: "Wantagh" },
        { name: "Sophie L.", text: "I recommend them for their honesty and professionalism.", zone: "Bethpage" },
        { name: "Raul D.", text: "They came on a Sunday and solved my emergency.", zone: "Lindenhurst" },
        { name: "Martha F.", text: "Very clean and tidy in their work.", zone: "Copiague" },
        { name: "Stephen V.", text: "They helped me with the installation of solar panels.", zone: "Babylon" },
        { name: "Patricia C.", text: "Quick and friendly attention.", zone: "West Islip" },
        { name: "Gustav N.", text: "They solved a short circuit in minutes.", zone: "East Meadow" },
        { name: "Rose E.", text: "Highly recommended for new installations.", zone: "Bellmore" },
        { name: "Michael F.", text: "They installed an EV charger for me with no issues.", zone: "Merrick" },
        { name: "Laura Z.", text: "Excellent service and written warranty.", zone: "Freeport" },
        { name: "Andrew J.", text: "They improved the lighting in my store.", zone: "Hicksville" },
        { name: "Cecilia B.", text: "Very punctual and responsible.", zone: "Uniondale" },
        { name: "Thomas Q.", text: "They helped me with my home insurance.", zone: "Rockville Centre" },
        { name: "Valerie S.", text: "They repaired the electrical panel in my house.", zone: "Oceanside" },
        { name: "Javier K.", text: "Installed LED lighting throughout the office.", zone: "Garden City" },
        { name: "Natalie W.", text: "Very good after-sales service.", zone: "Long Beach" },
        { name: "Paul H.", text: "They improved the electrical safety of my business.", zone: "Baldwin" },
        { name: "Helen U.", text: "I recommend them for their speed and efficiency.", zone: "Roosevelt" },
        { name: "Sergio X.", text: "They installed ceiling fans throughout the house.", zone: "Hempstead" },
        { name: "Camille Y.", text: "Excellent advice on home automation.", zone: "Westbury" },
        { name: "Ray O.", text: "Very good attitude and service.", zone: "Plainview" },
        { name: "Florence P.", text: "They installed extra outlets in my kitchen.", zone: "Syosset" },
        { name: "Hernan L.", text: "They solved a low voltage problem.", zone: "Woodbury" },
        { name: "Paula M.", text: "They improved the installation in my store.", zone: "Jericho" },
        { name: "Ivan T.", text: "Highly recommended for emergencies.", zone: "Massapequa Park" }
      ]
    },
    faq: {
      section: "Frequently asked questions",
      items: [
        { q: "Do you handle emergencies on Sundays?", a: "Yes, we handle electrical emergencies on Sundays. Call us at (516) 543-2052 for immediate attention." },
        { q: "Do you work in both homes and businesses?", a: "Yes, we offer electrical services for both homes and businesses in Nassau and Suffolk County." },
        { q: "Are you licensed and insured?", a: "Of course, we are fully licensed and insured to operate in the area." },
        { q: "Do you install solar panels?", a: "Yes, we install and maintain residential and commercial solar panels." },
        { q: "Can you install EV chargers?", a: "Yes, we install electric vehicle chargers at homes and businesses." },
        { q: "Do you offer free estimates?", a: "Yes, estimates and consultations are free and with no obligation." },
        { q: "What brands of materials do you use?", a: "We only use certified materials and well-known brands for quality and safety." },
        { q: "Do you handle after-hours emergencies?", a: "Yes, we provide 24/7 emergency service for residential and commercial clients." },
        { q: "Can you do preventive maintenance?", a: "Yes, we offer preventive and corrective maintenance plans for electrical installations." },
        { q: "Do you work with home insurance?", a: "Yes, we work with insurance companies for electrical repairs covered by policies." },
        { q: "Do you repair short circuits?", a: "Yes, we locate and repair short circuits in all types of installations." },
        { q: "Do you install LED lighting?", a: "Yes, we install and replace LED lighting for energy savings." },
        { q: "Can you certify electrical installations?", a: "Yes, we issue electrical installation certificates for procedures and permits." },
        { q: "Do you do structured cabling?", a: "Yes, we do structured cabling for data and phone networks." },
        { q: "Do you install ceiling fans?", a: "Yes, we install and repair ceiling fans and extractors." },
        { q: "Can you automate lighting systems?", a: "Yes, we install home automation and lighting control systems." },
        { q: "Do you work on new builds and renovations?", a: "Yes, we do electrical installations in new builds and renovations." },
        { q: "Do you offer a warranty for your work?", a: "Yes, all our work comes with a written warranty." },
        { q: "Can you install extra outlets?", a: "Yes, we add outlets and sockets wherever you need them." },
        { q: "What payment methods do you accept?", a: "We accept cash, bank transfers, and credit/debit cards." },
        { q: "Can you install alarm systems?", a: "Yes, we install and configure alarm systems for homes and businesses." },
        { q: "Do you perform electrical inspections?", a: "Yes, we do complete electrical inspections and diagnostics." },
        { q: "Can you install intercoms?", a: "Yes, we install intercom and video intercom systems." },
        { q: "Do you offer maintenance for communities?", a: "Yes, we provide electrical maintenance for buildings and communities." },
        { q: "Can you advise on energy efficiency?", a: "Yes, we advise on improving the energy consumption and efficiency of your property." }
      ]
    },
    about: {
      section: "About us",
      desc: "J.A. Fernandez Electric is an electrical company with over 25 years of experience serving Nassau and Suffolk County, Long Island, NY. We are licensed and insured to provide high-quality commercial and residential electrical services. We serve new and existing homes and businesses with professionalism and commitment."
    },
    footer: {
      address: "47 Robert Ave Massapequa NY 11758",
      hours: "Monday to Saturday 8am–6pm, Sundays emergencies only",
      phone: "(516) 543-2052",
      email: "jafernandez.electric@gmail.com",
      company: "J.A. Fernandez Electric",
      subtitle: "Licensed electrician in Nassau and Suffolk County",
      copyright: "All rights reserved."
    },
    contact: {
      validation: {
        name: "Name required",
        phone: "Phone required",
        message: "Message required"
      },
      title: "Contact Us",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      sent: "Message sent successfully!",
      success: "Thank you for reaching out! We have received your message and will get back to you shortly. For urgent matters, please call us at (516) 543-2052.",
      error: "Error sending. Try again later.",
    },
    seo: {
      title: "J.A. Fernandez Electric | Electrician in Nassau and Suffolk County",
      description: "Professional electricians with over 25 years of experience in Nassau and Suffolk County, Long Island, NY. Installations, maintenance, and electrical emergencies.",
      ogDescription: "Residential and commercial electrical services. Licensed, insured, and emergency attention."
    },
  },
};

type Lang = "es" | "en";

const I18nContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
}>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

export function I18nProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
