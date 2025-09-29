import React from 'react';
import { FaMapMarkerAlt, FaClinicMedical, FaUserMd } from 'react-icons/fa';

// Import images for locations and doctors
// import location1Image from '../assets/location-1.jpg';
// import location2Image from '../assets/location-2.jpg';
// import drGargImage from '../assets/dr-garg.jpg';
// import drMehtaImage from '../assets/dr-mehta.jpg';

const locations = [
  {
    name: 'Mind Vriksha',
    address: '2nd floor, 98, Inder Mohan Bhardwaj Marg, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048',
    mapUrl: "https://share.google/o2XSiUFkwTPLOxQtD",
    facilities: [
      "Individual & Group Therapy Rooms",
      "Rehabilitation & Detox Facilities",
      "Counseling & Support Services",
      "Telehealth Consultation Suites",
    ],
    doctors: [
      {
        name: 'Dr. Rohit Garg',
        specialty: 'Founder & Senior Psychiatrist',
        // image: drGargImage,
        bio: 'Dr. Garg is a leading psychiatrist with over 20 years of experience. He founded Mind Vriksha with a vision to provide holistic and compassionate care for all. He specializes in mood disorders and addiction psychiatry.',
      },
    ],
  },
  {
    name: 'Mind Vriksha - New Delhi Satellite Clinic',
    address: '15, South Extension Part I, New Delhi, Delhi, India',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.666620579122!2d77.0261394149206!3d28.599667082421375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f3f7d1f55f7%3A0x6b4a5f4c5c4c5c4c!2sGarg%20Psychiatry%20Clinic!5e0!3m2!1sen!2sin!4v1678280625625!5m2!1sen!2sin",
    facilities: [
      "Telehealth & Virtual Care Services",
      "Individual Therapy Sessions",
      "Mental Health Counseling",
    ],
    doctors: [
      {
        name: 'Dr. Priya Mehta',
        specialty: 'Clinical Psychologist',
        // image: drMehtaImage,
        bio: 'Dr. Mehta is a compassionate clinical psychologist with a specialization in trauma-informed care and adolescent mental health. She is dedicated to creating a safe and trusting therapeutic relationship with her clients.',
      },
    ],
  },
];

const LocationDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-green text-center mb-12">Our Locations</h2>
        
        <div className="space-y-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-light-green p-8 rounded-lg shadow-md">
              <div className="md:flex md:space-x-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-dark-charcoal mb-4 flex items-center">
                    <FaMapMarkerAlt className="text-primary-green mr-2" />
                    {location.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">{location.address}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-earthy-brown mb-2 flex items-center">
                      <FaClinicMedical className="text-primary-green mr-2" />
                      Facilities
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {location.facilities.map((facility, fIndex) => (
                        <li key={fIndex}>{facility}</li>
                      ))}
                    </ul>
                  </div>

                  {location.doctors.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-earthy-brown mb-4 flex items-center">
                        <FaUserMd className="text-primary-green mr-2" />
                        Doctors at this Location
                      </h4>
                      {location.doctors.map((doctor, dIndex) => (
                        <div key={dIndex} className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-24 h-24 rounded-full object-cover object-top shadow-md flex-shrink-0"
                          />
                          <div>
                            <p className="text-lg font-semibold text-primary-green">{doctor.name}</p>
                            <p className="text-sm text-gray-500 mb-2">{doctor.specialty}</p>
                            <p className="text-sm text-gray-700">{doctor.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="450"
                    className="border-0 rounded-lg shadow-xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Map`}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;