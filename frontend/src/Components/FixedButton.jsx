import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FixedButtons = () => {
  const phoneNumber = "tel:+919311106989"; // Replace with your phone number
  const whatsappUrl = "http://wa.me/+919311106989?text=Hi"; // Replace with your number

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center space-y-4">
      <a href={phoneNumber} aria-label="Call us" className="block md:hidden">
        <div className="bg-primary-green text-white p-3 rounded-full shadow-lg hover:bg-secondary-green transition duration-300">
          <FaPhoneAlt className="text-4xl" />
        </div>
      </a>
      
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <div className="bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#1DA851] transition duration-300">
          <FaWhatsapp className="text-5xl" />
        </div>
      </a>
    </div>
  );
};

export default FixedButtons;