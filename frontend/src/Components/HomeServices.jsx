import React from 'react';
import { FaUserMd, FaComments, FaHeartbeat } from 'react-icons/fa';
import psychiatryImg from '../assets/Images/PsychiatryServices.png';
import therapyImg from '../assets/Images/TherapyCounseling.png';
import addictionImg from '../assets/Images/Addiction.png';
import { Icon } from 'lucide-react';

const popularServices = [
  {
    name: 'Psychiatry Services',
    description: 'Expert diagnosis & medication management by leading psychiatrists.',
    image: psychiatryImg,
    link: '#', // Replace with the actual link to the service page
    Icon: FaUserMd,
  },
  {
    name: 'Therapy & Counselling',
    description: 'Personalized sessions with evidence-based methods like CBT, DBT, trauma care and Neurofeedback. We also offer cutting-edge Neurofeedback Technology for therapy.',
    image: therapyImg,
    link: '#',
    Icon: FaComments,
  },
  {
    name: 'De-addiction & Wellness',
    description: 'Comprehensive De-Addiction program leveraging medical support, therapy and Holistic wellness therapy.',
    image: addictionImg,
    link: '#',
    Icon: FaHeartbeat,
  }
];

const PopularServices = () => {
  return (
    <section id="Service" className="py-24 bg-light-green">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-12">Our Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularServices.map((service, index) => (
            <div key={index} className="bg-secondary-green p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              {/* <img
                src={service.image}
                alt={service.name}
                className="w-full h-54 object-cover overflow-hidden rounded-md mb-4"
              /> */}
              <div className="flex justify-center mb-4">
                <service.Icon size={48} className="text-primary-green" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-green mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              {/* <a href={service.link} className="inline-block bg-primary-green hover:bg-light-green hover:text-primary-green text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Read More
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;