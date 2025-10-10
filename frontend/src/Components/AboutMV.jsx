import React from 'react';
import ConsultationForm from '../Components/ConsultationForm';

const AboutUs = () => {
    return (
        <section id="About" className="py-16 bg-secondary-green">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-12">
                    {/* Left: Text Content */}
                    
                    <div className="md:w-1/2 w-full space-y-6 text-justify flex items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-green text-center mb-10">
                    About Mind Vriksha
                </h2>
                            <p className="text-gray-700 text-lg">
                                Mind Vriksha is a chain of mental health clinics. It was founded in 2012 by Dr. Rohit Garg with a simple yet powerful idea: to make quality and compassionate mental health care accessible and stigma-free.
                            </p>
                            <p className="text-gray-700 text-lg mt-4">
                                Our first and flagship center in GK2 has earned a reputation as one of Delhi NCR’s most trusted destinations for mental health and de-addiction care. After years of learning, refining our protocols, and strengthening our team, we expanded in 2025 with three new clinics across Delhi-NCR - Chittaranjan Park, Noida, and Faridabad.
                            </p>
                            <p className="text-gray-700 text-lg mt-4">
                                At Mind Vriksha, we believe that every mind is like a tree — beautiful, complex, and capable of growth when nurtured with the right care. We have supported over two lakh lives facing mental health and addiction challenges, more than half through charitable initiatives. We combine evidence-based practices with deep empathy to ensure that every person feels safe, understood, and respected.
                            </p>
                            <p className="text-gray-700 text-lg mt-4">
                                For us, mental health is not just about treating illness — it is about restoring dignity, rebuilding connections, and empowering people to live fuller, healthier lives. This is why patients remember us not only for our expertise, but also for the patience, time, and genuine care they receive at every step.
                            </p>
                        </div>
                    </div>
                    {/* Right: Consultation Form */}
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <div className="w-full md:max-w-md">
                            <ConsultationForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;




// import React from 'react';
// import AboutUsMV from '../assets/Images/About.png';
// import ConsultationForm from '../Components/ConsultationForm';

// const AboutUs = () => {
//     return (
//         <section id="About" className="py-24 bg-secondary-green">
//             <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-100">
//                 {/* <div className="md:w-1/2">
//                     <img
//                         src={AboutUsMV}
//                         alt="About Mind Vriksha"
//                         className="rounded-lg shadow-xl w-full h-full object-cover"
//                     />
//                 </div> */}
//                 <div className="md:w-1/2 text-justify space-y-6">
//                     <h2 className="text-3xl md:text-4xl font-bold text-primary-green text-center mb-6">About Mind Vriksha</h2>
//                     <p className="text-gray-700 text-justify text-lg mb-4">
//                        Mind Vriksha is a chain of mental health clinics. It was founded in 2012 by Dr. Rohit Garg with a simple yet powerful idea: to make quality and compassionate mental health care accessible and stigma-free.
//                     </p>
//                     <p className="text-gray-700 text-lg mb-4">
//                         Our first and flagship center in GK2 has earned a reputation as one of Delhi NCR’s most trusted destinations for mental health and de-addiction care. After years of learning, refining our protocols, and strengthening our team, we expanded in 2025 with three new clinics across Delhi-NCR - Chittaranjan Park, Noida, and Faridabad.
//                     </p>
//                     <p className="text-gray-700 text-lg mb-4">
//                         At Mind Vriksha, we believe that every mind is like a tree — beautiful, complex, and capable of growth when nurtured with the right care. We have supported over two lakh lives facing mental health and addiction challenges, more than half through charitable initiatives. We combine evidence-based practices with deep empathy to ensure that every person feels safe, understood, and respected.
//                     </p>
//                     <p className="text-gray-700 text-lg">
//                         For us, mental health is not just about treating illness — it is about restoring dignity, rebuilding connections, and empowering people to live fuller, healthier lives. This is why patients remember us not only for our expertise, but also for the patience, time, and genuine care they receive at every step.
//                     </p>
//                 </div>
//                 <div className="md:w-1/2 w-full mt-8 md:mt-0">
//                 <ConsultationForm />
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default AboutUs;