import React from 'react';
// import servicesImage from '../assets/services-list.jpg'; // Add a static image for this section

const services = [
  "Individual & Group Therapy",
  "Addiction Treatment & Recovery",
  "Couples & Family Counseling",
  "Trauma & PTSD Care",
  "Anxiety & Depression Management",
  "Child & Adolescent Psychiatry",
  "Stress Management Programs",
  "Telehealth & Online Therapy",
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-light-green">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-6">Our Comprehensive Services</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Mind Vriksha, we offer a wide range of compassionate and evidence-based services to support your mental and emotional well-being. Our holistic approach is tailored to meet your unique needs.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="h-2 w-2 bg-primary-green rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            // src={servicesImage}
            alt="Comprehensive Services"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;