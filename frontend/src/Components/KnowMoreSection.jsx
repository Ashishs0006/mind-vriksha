import React from 'react';

const KnowMoreSection = () => {
  return (
    <section className="py-16 bg-light-green">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary-green mb-4">Want to Know More About Us?</h3>
            <p className="text-gray-700 text-lg">
              Explore our mission, vision, and the compassionate team behind Mind Vriksha. We are dedicated to providing a supportive environment for your well-being journey.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a href="#" className="inline-block bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Know More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;