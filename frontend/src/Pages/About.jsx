import React, { useState } from 'react';
// import aboutImage from '../assets/about-us.jpg'; // Add your own image
// import founderImage from '../assets/founder.jpg'; // Add your founder's image
// import teamMember1 from '../assets/team-1.jpg'; // Add team member images
// import teamMember2 from '../assets/team-2.jpg';
// import teamMember3 from '../assets/team-3.jpg';

// Reusable Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// Team Member Data
const teamMembers = [
  {
    name: 'Dr. Anjali Sharma',
    designation: 'Clinical Psychologist',
    // image: teamMember1,
    bio: 'Dr. Anjali specializes in cognitive behavioral therapy (CBT) and has over 15 years of experience helping clients manage anxiety and depression. She is passionate about creating a safe space for open dialogue and personal growth.',
  },
  {
    name: 'Mr. Rohan Gupta',
    designation: 'Addiction Counselor',
    // image: teamMember2,
    bio: 'Mr. Gupta is a certified addiction counselor with a focus on holistic recovery models. He believes in empowering individuals with the tools needed for long-term sobriety and a fulfilling life.',
  },
  {
    name: 'Ms. Kavita Singh',
    designation: 'Trauma Specialist',
    // image: teamMember3,
    bio: 'With a background in trauma-informed care, Ms. Singh helps clients heal from past experiences using evidence-based techniques like EMDR and mindfulness. She is dedicated to guiding individuals on their path to emotional resilience.',
  },
];

const OurTeam = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <main className="pt-16">
        {/* About Us Hero Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto px-4 md:px-12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                // src={aboutImage}
                alt="About Us"
                className="w-full h-96 object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-light-green">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-8">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-dark-charcoal mb-4">Our Mission</h3>
                <p className="text-gray-700">To provide compassionate, comprehensive, and accessible mental health and addiction care, empowering individuals to achieve lasting well-being and live fulfilling lives.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-dark-charcoal mb-4">Our Vision</h3>
                <p className="text-gray-700">To be a leading center for mental health and addiction treatment, creating a supportive community where healing is possible and hope flourishes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                // src={founderImage}
                alt="Founder"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">A Message from Our Founder</h2>
              <blockquote className="italic text-lg text-gray-700">
                “At Mind Vriksha, we believe in the power of empathy and professional care. My vision was to create a place where every individual feels seen, heard, and supported on their journey to healing. It's more than a clinic; it's a community rooted in compassion.”
              </blockquote>
              <p className="mt-4 text-lg font-semibold text-earthy-brown">- Dr. Garg</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-light-green">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-12">Meet Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                  onClick={() => openModal(member)}
                >
                  <img
                    // src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-dark-charcoal bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                      More Info
                    </h3>
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-dark-charcoal">{member.name}</h4>
                    <p className="text-primary-green">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Know More Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-light-green rounded-lg p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-bold text-primary-green mb-4">Want to Know More About Us?</h3>
                <p className="text-gray-700 text-lg">
                  Learn more about our core values, the history of our clinic, and the dedicated principles that guide our compassionate care. We are committed to transparency and helping you feel confident in choosing us for your well-being journey.
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
      </main>

      {/* Modal for Team Member Details */}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedMember && (
          <div className="text-center">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-40 h-40 object-cover object-top rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-primary-green mb-2">{selectedMember.name}</h3>
            <p className="text-earthy-brown font-semibold mb-4">{selectedMember.designation}</p>
            <p className="text-gray-700">{selectedMember.bio}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default OurTeam;