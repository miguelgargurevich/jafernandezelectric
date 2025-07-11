
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useI18n } from "../i18n";

const SEO: React.FC = () => {
  const { t } = useI18n();
  return (
    <HelmetProvider>
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jafernandez-electric.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.ogDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
        {/* JSON-LD para IA y SEO local */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "J.A. Fernandez Electric",
            "image": "/og-image.jpg",
            "@id": "https://jafernandez-electric.com",
            "url": "https://jafernandez-electric.com",
            "telephone": "+15165432052",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "47 Robert Ave",
              "addressLocality": "Massapequa",
              "addressRegion": "NY",
              "postalCode": "11758",
              "addressCountry": "US"
            },
            "areaServed": ["Nassau County", "Suffolk County", "Long Island"],
            "description": "${t.seo.description}",
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+15165432052",
              "contactType": "customer service",
              "areaServed": "US"
            }
          }
          `}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;

