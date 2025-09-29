import React from 'react';
// import locationHeroImage from '../assets/location-hero.jpg'; // Add your hero image here

const LocationHero = () => {
  return (
    <section className="relative bg-white py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            // src={locationHeroImage}
            alt="Mind Vriksha Location"
            className="w-full h-80 md:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-charcoal bg-opacity-40 rounded-lg flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Location
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;