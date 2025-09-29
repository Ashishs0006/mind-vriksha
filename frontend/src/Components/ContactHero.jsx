import React from 'react';
// import contactHeroImage from '../assets/contact-hero.jpg'; // Add your hero image here

const ContactHero = () => {
  return (
    <section className="relative bg-white py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            // src={contactHeroImage}
            alt="Mind Vriksha Contact"
            className="w-full h-80 md:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-charcoal bg-opacity-40 rounded-lg flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;