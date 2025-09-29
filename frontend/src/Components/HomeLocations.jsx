import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserMd } from 'react-icons/fa';
import DrRohit from '../assets/Images/DrRohit.png';
import DrSaurabh from '../assets/Images/DrSaurabh.png';
import DrPriyanka from '../assets/Images/DrPriyanka.png';
import DrSurabhi from '../assets/Images/DrSurabhi.png';
import SSB from '../assets/Images/SSB.png';
import Noida from '../assets/Images/Numed.png';
import Whoomane from '../assets/Images/Whoomane.png';
import MindVriksha from '../assets/Images/MindVriksha.png';

// Placeholder image URLs for clinics
// const SSB = 'https://placehold.co/300x200/a9e5b7/33691e?text=SSB+Hospital';
// const Noida = 'https://placehold.co/300x200/a9e5b7/33691e?text=Numed+Hospital';
// const DrPlaceholder = 'https://placehold.co/200x200/dcedc8/33691e?text=Doctor';

// Doctor Data: Local imports replaced with placeholder URLs to ensure code compiles
const locationsData = [
  {
    clinicName: 'Mind Vriksha - GK2 (Flagship Clinic)',
    address: '2nd floor, 98, Inder Mohan Bhardwaj Marg, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048',
    gmbLink: 'https://share.google/9JaXArpJDPvT74UAS',
    clinicImage: MindVriksha,
    doctors: [
      {
        image: DrRohit,
        name: 'Dr. Rohit Garg',
        designation: 'Senior Psychiatrist',
        bio: 'Dr. Rohit Garg, a leading psychiatrist, has impacted over 200,000 lives, more than half through charitable initiatives. Trained in de-addiction and rehabilitation at AIIMS Delhi, he founded MindVriksha, a renowned clinic in South Delhi, and Ganaa, a rehabilitation chain with centers in Delhi, Gurgaon, Noida, and Goa. He now aims to expand both nationwide, bridging the gap in quality mental health care with compassion and expertise. His contributions have earned him top honors, including Mahatma Gandhi Samman at House of Lords London, Best Doctor Award by Medgate, International Mind Health Ambassador by Oxford University UK, and the Rajiv Gandhi Rashtriya Ekta Samman. An avid adventurer he has biked across ladakh and climbed Mount Kilimanjaro, Mount Everest Base camp and frozen river Chader trek in Ladakh.',
      },
      {
        image: DrSaurabh,
        name: 'Dr. Saurabh Avi',
        designation: 'Clinical Psychiatrist',
        bio: 'Dr. Saurabh Avi is a distinguished psychiatrist with over five years of extensive experience in the field of mental health. He earned his MBBS degree from the University College of Medical Sciences, New Delhi, and completed his MD in Psychiatry at Lady Hardinge Medical College, where he also served as a senior resident, making significant contributions to psychiatric research and patient care. With more than 10 publications to his name and numerous papers presented at various prestigious conferences, Dr. Avi is deeply committed to advancing psychiatric knowledge. In addition to his clinical expertise, Dr. Avi has pursued specialized training, including a one-year fellowship in psychosexual medicine, a one-year certificate course in child and adolescent psychiatry, and training in neurofeedback therapy. His holistic approach to mental well-being reflects his dedication to providing comprehensive psychiatric care. Beyond his medical career, Dr. Avi is an avid sports enthusiast, actively participating in various sports events, and is also a talented painter, having worked on several fine art projects. His diverse interests and accomplishments highlight his passion for both mental and physical well-being, as well as his creative pursuits.',
      },
    ],
  },
  {
    clinicName: 'Mind Vriksha - Faridabad (in SSB Hospital)',
    address: 'NH-19, Plot No, 69, near Neelam Flyover, Sector 20 A, New Industrial Township, Faridabad, Haryana 121007',
    gmbLink: 'https://share.google/ZNYS3pB08xSgVTQsk',
    clinicImage: SSB,
    doctors: [
      {
        image: DrSurabhi,
        name: 'Dr. Surabhi Sharma',
        designation: 'Clinical Psychiatrist',
        bio: 'Dr. Surabhi Sharma is a board-certified psychiatrist with extensive training and experience in diagnosing and managing a wide spectrum of psychiatric disorders. She earned both her MBBS and MD in Psychiatry from Lady Hardinge Medical College, New Delhi, where she also completed her residency and later served as a Senior Resident in the Department of Psychiatry. During this tenure, she provided comprehensive inpatient and outpatient psychiatric care, supervised junior residents, conducted psychotherapy sessions, and managed emergency psychiatry cases. With expertise in psychopharmacology and psychotherapy, Dr. Sharma is trained in multiple therapeutic modalities including Cognitive Behavioral Therapy (CBT), Supportive Therapy, Motivational Interviewing, and Motivation Enhancement Therapy. She has presented her research at several national and international conferences, with contributions spanning topics such as sexual dysfunction in major depressive disorder, tardive dyskinesia, and rare psychiatric manifestations of neurological conditions. Her academic work has also been published in reputed medical journals, covering areas such as epilepsy, substance withdrawal, and psychopharmacology. Beyond her clinical and academic contributions, Dr. Sharma is dedicated to holistic, patient-centered care, emphasizing culturally competent and evidence-based approaches to mental health. She is a member of the Indian Psychiatric Society (IPS) and is fluent in both English and Hindi, enabling her to connect effectively with diverse patient populations',
      },
    ],
  },
  {
    clinicName: 'Mind Vriksha - Noida (in Numed Hospital)',
    address: 'Sector 3 Rd, Sector 3, Patwari, Greater Noida, Uttar Pradesh 201318',
    gmbLink: 'https://share.google/rOXvGTcMI4Dk71bCf',
    clinicImage: Noida,
    doctors: [
      {
        image: DrPriyanka,
        name: 'Dr. Priyanka Kanjilal',
        designation: 'Counseling Psychiatrist',
        bio: 'She is specialized In anxiety disorder, depression, de-addiction, child psychiatry-adhd, autism spectrum, learning disorder, geriatric psychiatry -dementia, late onset depression, bipolar disorder,OCD and other sexual and sleep disorders, marital discord and interpersonal relationship issues with adjustment disorders etc. Dr. Priyanka Kanjilal, provides compassionate and expert mental health care in Greater Noida West Extension. We specialize in treating anxiety, depression, stress, bipolar disorder, schizophrenia, child & adolescent mental health issues, relationship challenges, sleep disorders, and addiction. Dr. Kanjilal offers personalized, evidence-based treatments including medication management, psychotherapy, lifestyle counseling, and preventive mental health care. Our clinic is a safe, confidential, and non-judgemental space dedicated to helping you regain emotional balance, resilience, and well-being.',
      },
    ],
  },
  {
    clinicName: 'Mind Vriksha - Whoomane (Daycare in CR Park)',
    address: 'J-1922, Basement, Block J, Chittaranjan Park, New Delhi, Delhi 110019',
    gmbLink: 'https://share.google/lwsRxSOZVU2k9BiH3',
    clinicImage: Whoomane,
    doctors: [
      //{
      //   image: 'https://placehold.co/400x400/dcedc8/33691e?text=Dr.+Aarti',
      //   name: 'Dr. Aarti Kumar Jha',
      //   designation: 'Clinical Psychologist',
      //   bio: 'Dr. Aarti Kumar Jha is a warm and insightful counseling psychologist. Her practice focuses on adolescent and young adult mental health, offering guidance on stress management, career development, and building healthy relationships. She uses a person-centered approach to empower her clients.',
      // },
    ],
  },
];

// Inline SVG for the close icon
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Locations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const openModal = (doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDoctor(null);
    };

    return (
        <section id="Location" className="py-24 bg-white font-['Inter']">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#33691e] mb-12">Our Clinic Locations</h2>
                {locationsData.map((location, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-center bg-[#f0f9eb] rounded-xl shadow-lg p-6 sm:p-8 mb-12 lg:space-x-12 space-y-8 lg:space-y-0">
                        {/* Clinic Info (Left Side) */}
                        <div className="flex-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-full mb-6">
                                <img
                                    src={location.clinicImage}
                                    alt={`${location.clinicName} clinic`}
                                    className="w-[300px] h-[200px] max-w-full object-cover rounded-lg shadow-md bg-white mx-auto lg:mx-0"
                                />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#33691e] mb-2">{location.clinicName}</h3>
                            <a href={location.gmbLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#33691e] transition duration-300 inline-flex items-center space-x-2 font-medium text-sm sm:text-base">
                                <FaMapMarkerAlt className="text-base sm:text-lg flex-shrink-0" />
                                <span>{location.address}</span>
                            </a>
                        </div>
                        
                        {/* Doctor Profiles (Right Side) */}
                        <div className="flex-1 w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-6 sm:space-y-0 sm:space-x-8">
                            {location.doctors.map((doctor, docIndex) => (
                                <div key={docIndex} className="flex flex-col items-center">
                                    {/* Increased size: w-[240px] h-[240px] and fixed hover state */}
                                    <div className="relative group w-[220px] h-[220px] rounded-full overflow-hidden shadow-xl mb-2 bg-white ring-4 ring-[#a9e5b7] hover:ring-[#33691e] transition-all duration-300">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                            onClick={() => openModal(doctor)}
                                        >
                                            <span className="font-bold text-lg border-2 border-white px-3 py-1 rounded-full">More Info</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-gray-800">{doctor.name}</h4>
                                    </div>
                                </div>
                            ))}
                            {/* {location.doctors.length === 0 && (
                                <p className="text-gray-500 italic">No doctors currently listed for this location.</p>
                            )} */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Doctor Info Modal - Fixed for Mobile Responsiveness */}
            {isModalOpen && selectedDoctor && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-start justify-center p-4 sm:p-8 z-50 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 relative max-w-4xl w-full my-8">
                        {/* Close Button */}
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors p-1 rounded-full bg-gray-100">
                            <CloseIcon />
                        </button>
                        
                        <div className="flex flex-col md:flex-row items-start text-center md:text-left gap-6">
                            {/* Image (Left Column on Desktop, Top on Mobile) */}
                            <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                                <img
                                    src={selectedDoctor.image}
                                    alt={selectedDoctor.name}
                                    className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg border-4 border-[#a9e5b7]"
                                />
                            </div>

                            {/* Details (Right Column on Desktop, Bottom on Mobile) */}
                            <div className="w-full md:w-2/3">
                                <h4 className="text-3xl font-extrabold text-[#33691e] mb-1">{selectedDoctor.name}</h4>
                                <p className="text-lg font-semibold text-gray-600 mb-4 border-b pb-2">{selectedDoctor.designation}</p>
                                
                                {/* Bio with Mobile Scroll */}
                                <div className="max-h-[60vh] md:max-h-full overflow-y-auto pr-2">
                                    <p
                                        className="text-gray-700 leading-relaxed text-base"
                                        dangerouslySetInnerHTML={{ __html: selectedDoctor.bio.replace(/<br>/g, '<br /><br />') }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Locations;

// import React, { useState } from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserMd } from 'react-icons/fa';
// import DrRohit from '../assets/Images/DrRohit.png';
// import DrSaurabh from '../assets/Images/DrSaurabh.png';
// import DrPriyanka from '../assets/Images/DrPriyanka.png';
// import DrSurabhi from '../assets/Images/DrSurabhi.png';
// import SSB from '../assets/Images/SSB.png';
// import Noida from '../assets/Images/Numed.png';

// const locationsData = [
//   {
//     clinicName: 'Mind Vriksha - GK2 (Flagship Clinic)',
//     address: '2nd floor, 98, Inder Mohan Bhardwaj Marg, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048',
//     gmbLink: 'https://share.google/9JaXArpJDPvT74UAS',
//     clinicImage: 'https://placehold.co/300x150/b5d7d9/33691e?text=GK2+Clinic',
//     doctors: [
//       {
//         image: DrRohit,
//         name: 'Dr. Rohit Garg',
//         designation: 'Senior Psychiatrist',
//         bio: 'Dr. Rohit Garg born in Budhlada, a small town in Punjab. After completing his preliminary education in Chandigarh, he did his M.B.B.S from B.J medical college, Pune and did his M.D in Psychiatry from King George Medical University, Lucknow. He is a self made man who struggled hard to accomplish his dreams. He after completing his M.D, worked for 3 years in All India Institute Medical Sciences (AIIMS) specialising in de-addiction and rehabilitation. He now specialises in adult, child and geriatric disorders after having done immense research work and using new techniques like Repetitive Trans Magnetic Stimulation and Cognitive Behaviour Therapy. He has been invited by various T.V and radio channels to spread awareness about mental disorders. Being born and brought up in a humble background makes Dr. Rohit understand the needs and challenges faced by the poor people, he has done charitable work in different parts of India like Rajasthan, Haryana, Punjab, U.P and Delhi and on every Tuesday he has a charitable OPD at his clinic. More than all the awards and recognitions, which he has achieved including one of the best doctors award in India by Medihealth magazine in 2011 and 2013 and Rajiv Gandhi Rashtriya Ekta Samman Award to name a few, Dr. Rohit Garg values his patient’s recovery and wellness more. He has seen more than 10,000 people free of cost on a charitable basis and most of his patients remember him for his patience and understanding, where he values the human life above everything else. His staff and associates respect him because of his hardworking and down to earth mannerism.',
//       },
//       {
//         image:DrSaurabh,
//         name: 'Dr. Saurabh Avi',
//         designation: 'Clinical Psychiatrist',
//         bio: 'Dr. Saurabh Avi is a distinguished psychiatrist with over five years of extensive experience in the field of mental health. He earned his MBBS degree from the University College of Medical Sciences, New Delhi, and completed his MD in Psychiatry at Lady Hardinge Medical College, where he also served as a senior resident, making significant contributions to psychiatric research and patient care. With more than 10 publications to his name and numerous papers presented at various prestigious conferences, Dr. Avi is deeply committed to advancing psychiatric knowledge. <br> In addition to his clinical expertise, Dr. Avi has pursued specialized training, including a one-year fellowship in psychosexual medicine, a one-year certificate course in child and adolescent psychiatry, and training in neurofeedback therapy. His holistic approach to mental well-being reflects his dedication to providing comprehensive psychiatric care. Beyond his medical career, Dr. Avi is an avid sports enthusiast, actively participating in various sports events, and is also a talented painter, having worked on several fine art projects. His diverse interests and accomplishments highlight his passion for both mental and physical well-being, as well as his creative pursuits.',
//       },
//     ],
//   },
//   {
//     clinicName: 'Mind Vriksha - Faridabad (in SSB Hospital)',
//     address: 'NH-19, Plot No, 69, near Neelam Flyover, Sector 20 A, New Industrial Township, Faridabad, Haryana 121007',
//     gmbLink: 'https://share.google/ZNYS3pB08xSgVTQsk',
//     clinicImage:SSB,
//     doctors: [
//       {
//         image: DrSurabhi,
//         name: 'Dr. Surabhi Sharma',
//         designation: 'Clinical Psychiatrist',
//         bio: 'Dr. Surabhi Sharma is a board-certified psychiatrist with extensive training and experience in diagnosing and managing a wide spectrum of psychiatric disorders. She earned both her MBBS and MD in Psychiatry from Lady Hardinge Medical College, New Delhi, where she also completed her residency and later served as a Senior Resident in the Department of Psychiatry. During this tenure, she provided comprehensive inpatient and outpatient psychiatric care, supervised junior residents, conducted psychotherapy sessions, and managed emergency psychiatry cases. With expertise in psychopharmacology and psychotherapy, Dr. Sharma is trained in multiple therapeutic modalities including Cognitive Behavioral Therapy (CBT), Supportive Therapy, Motivational Interviewing, and Motivation Enhancement Therapy. She has presented her research at several national and international conferences, with contributions spanning topics such as sexual dysfunction in major depressive disorder, tardive dyskinesia, and rare psychiatric manifestations of neurological conditions. Her academic work has also been published in reputed medical journals, covering areas such as epilepsy, substance withdrawal, and psychopharmacology. Beyond her clinical and academic contributions, Dr. Sharma is dedicated to holistic, patient-centered care, emphasizing culturally competent and evidence-based approaches to mental health. She is a member of the Indian Psychiatric Society (IPS) and is fluent in both English and Hindi, enabling her to connect effectively with diverse patient populations',
//       },
//     ],
//   },
//   {
//     clinicName: 'Mind Vriksha - Noida (in Numed Hospital)',
//     address: 'Sector 3 Rd, Sector 3, Patwari, Greater Noida, Uttar Pradesh 201318',
//     gmbLink: 'https://share.google/rOXvGTcMI4Dk71bCf',
//     clinicImage: Noida,
//     doctors: [
//       {
//         image:DrPriyanka,
//         name: 'Dr. Priyanka Kanjilal',
//         designation: 'Counseling Psychiatrist',
//         bio: 'She is specialized In anxiety disorder, depression, de-addiction, child psychiatry-adhd, autism spectrum, learning disorder, geriatric psychiatry -dementia, late onset depression, bipolar disorder,OCD and other sexual and sleep disorders, marital discord and interpersonal relationship issues with adjustment disorders etc. Dr. Priyanka Kanjilal, provides compassionate and expert mental health care in Greater Noida West Extension. We specialize in treating anxiety, depression, stress, bipolar disorder, schizophrenia, child & adolescent mental health issues, relationship challenges, sleep disorders, and addiction. Dr. Kanjilal offers personalized, evidence-based treatments including medication management, psychotherapy, lifestyle counseling, and preventive mental health care. Our clinic is a safe, confidential, and non-judgmental space dedicated to helping you regain emotional balance, resilience, and well-being.',
//       },
//     ],
//   },
//   {
//     clinicName: 'Mind Vriksha - Whoomane (Daycare in CR Park)',
//     address: 'J-1922, Basement, Block J, Chittaranjan Park, New Delhi, Delhi 110019',
//     gmbLink: 'https://share.google/lwsRxSOZVU2k9BiH3',
//     clinicImage: 'https://placehold.co/1200x800/b5d7d9/33691e?text=Whoomane+Daycare',
//     doctors: [
//       // {
//       //   image: 'https://placehold.co/400x400/dcedc8/33691e?text=Dr.+Aarti',
//       //   name: 'Dr. Aarti Kumar Jha',
//       //   designation: 'Clinical Psychologist',
//       //   bio: 'Dr. Aarti Kumar Jha is a warm and insightful counseling psychologist. Her practice focuses on adolescent and young adult mental health, offering guidance on stress management, career development, and building healthy relationships. She uses a person-centered approach to empower her clients.',
//       // },
//     ],
//   },
// ];

// // Inline SVG for the close icon
// const CloseIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
// );

// const Locations = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedDoctor, setSelectedDoctor] = useState(null);

//     const openModal = (doctor) => {
//         setSelectedDoctor(doctor);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedDoctor(null);
//     };

//     return (
//         <section id="Location" className="py-24 bg-white">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-charcoal mb-12">Our Clinic Locations</h2>
//                 {locationsData.map((location, index) => (
//                     <div key={index} className="flex flex-col lg:flex-row items-center bg-light-green rounded-xl shadow-lg p-8 mb-12 lg:space-x-12 space-y-8 lg:space-y-0">
//                         {/* Clinic Info (Left Side) */}
//                         <div className="flex-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//                             <div className="w-full mb-6">
//                                 <img
//                                     src={location.clinicImage}
//                                     alt={`${location.clinicName} clinic`}
//                                     // className="w-full h-auto rounded-lg shadow-md"
//                                     className="w-[300px] h-[200px] object-contain rounded-lg shadow-md bg-white"
//                                 />
//                             </div>
//                             <h3 className="text-3xl font-bold text-primary-green mb-4">{location.clinicName}</h3>
//                             <a href={location.gmbLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-green transition duration-300 inline-flex items-center space-x-2 font-medium">
//                                 {FaMapMarkerAlt}
//                                 <span>{location.address}</span>
//                             </a>
//                         </div>
//                         {/* Doctor Profiles (Right Side) */}
//                         <div className="flex-1 w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-8 sm:space-y-0 sm:space-x-8">
//                             {location.doctors.map((doctor, docIndex) => (
//                                 <div key={docIndex} className="flex flex-col items-center">
//                                     {/* <div className="relative group w-50 h-50 rounded-full overflow-hidden shadow-md mb-2"> */}
//                                     <div className="relative group w-[200px] h-[200px] rounded-full overflow-hidden shadow-md mb-2 bg-white">
//                                         <img
//                                             src={doctor.image}
//                                             alt={doctor.name}
//                                             className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
//                                             // className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
//                                         />
//                                         <div
//                                             className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//                                             onClick={() => openModal(doctor)}
//                                         >
//                                             <span className="font-semibold text-lg">More Info</span>
//                                         </div>
//                                     </div>
//                                     <div className="text-center">
//                                         <h4 className="text-xl font-bold text-dark-charcoal">{doctor.name}</h4>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Doctor Info Modal */}
//             {isModalOpen && selectedDoctor && (
//                 <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50">
//                     <div className="bg-white rounded-xl shadow-2xl p-6 relative max-w-4xl w-full mx-auto">
//                         <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors">
//                             <CloseIcon />
//                         </button>
//                         <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:space-x-6">
//                             <img
//                                 src={selectedDoctor.image}
//                                 alt={selectedDoctor.name}
//                                 className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
//                             />
//                             <div className="sm:flex-1">
//                                 <h4 className="text-2xl font-bold text-dark-charcoal mb-2">{selectedDoctor.name}</h4>
//                                 <p className="text-primary-green text-sm font-semibold mb-4">{selectedDoctor.designation}</p>
//                                 <p className="text-gray-700 leading-relaxed">{selectedDoctor.bio}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Locations;