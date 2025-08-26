import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default Index;