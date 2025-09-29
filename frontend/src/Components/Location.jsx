import React from 'react';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.636906232599!2d77.0145610747413!3d28.487102192775087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sMind%20Vriksha%20(Garg%20Psychiatry%20Clinic)!5e0!3m2!1sen!2sin!4v1678891512345!5m2!1sen!2sin";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">Find Us Easily</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
            <p><strong>Address:</strong> 2nd Floor, Garg Psychiatry Clinic, Sec-14, Gurugram, Haryana</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@mindvriksha.com</p>
          </div>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Mind+Vriksha+Garg+Psychiatry+Clinic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Get Directions
          </a>
        </div>
        <div>
          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            className="rounded-lg shadow-xl border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mind Vriksha Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;