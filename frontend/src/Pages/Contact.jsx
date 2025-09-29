import React from 'react';
import ContactHero from '../Components/ContactHero';
import ContactFormSection from '../Components/ContactFormSection';
import FAQ from '../Components/FAQ'; 

const ContactPage = () => {
  return (
    <>
      <main className="pt-16">
        <ContactHero />
        <ContactFormSection />
        <FAQ />
      </main>
    </>
  );
};

export default ContactPage;