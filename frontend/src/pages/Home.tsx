import React from "react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import ServicesDetailed from "../components/ServicesDetailed";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Home: React.FC = () => (
  <>
    <SEO />
    <Header />
    <main id="main-content" role="main" tabIndex={-1}>
      <HeroSection />
      <Services />
      <ServicesDetailed />
      <About />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Home;
