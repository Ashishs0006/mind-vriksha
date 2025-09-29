import React from 'react';
// import contactImage from '../assets/contact-us-form.jpg'; // Add a relevant image

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-light-green">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-6">Get In Touch With Us</h2>
          <p className="text-gray-700 text-lg mb-6">
            We are here to help. Fill out the form below, and a member of our compassionate team will get back to you as soon as possible. Your well-being is our priority.
          </p>
          <img
            // src={contactImage}
            alt="Contact Us"
            className="rounded-lg shadow-xl w-full h-auto object-cover hidden md:block"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" placeholder="Your Phone Number" />
            </div>
            <div>
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Preferred Time to be Contacted (Optional)</label>
              <input type="text" id="time" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" placeholder="e.g., Weekdays after 5 PM" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;