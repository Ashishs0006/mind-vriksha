import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Images/herobg.png'; // You will need to add your own image bg-opacity-80 rounded-lg shadow-xl
import logo from '../assets/Images/Hero.png';

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-dark-charcoal opacity-50"></div>
      <div className="relative z-10 p-6 md:p-12 max-w-2xl mx-4">  
        {/* <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Healing Minds, Restoring Balance - Your Journey Starts Today.
        </h1> */}
        <img src={logo} alt="Mind Vriksha Logo" className="relative h-28 md:h-36 lg:h-50 mx-auto rounded drop-shadow-lg" />
        <p className="mt-4 text-lg md:text-3xl text-white">
          Mind Vriksha offers compassionate and evidence-based care for mental health and addiction recovery.
        </p>
        <div className="mt-8">
          {/* <button className="bg-secondary-green hover:bg-light-green text-black font-semibold py-3 px-8 rounded-full transition duration-300 mr-4 mb-4">
            Learn More
          </button> */}
          {/* <Link to="/Consultation"> */}
          <a href='#Consultation'>
            <button className="bg-transparent border-2 border-white text-white hover:bg-primary-green font-semibold py-3 px-8 rounded-full transition duration-300">
              Book your Consultation
            </button>
            </a>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;