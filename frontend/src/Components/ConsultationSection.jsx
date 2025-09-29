import React from "react";
import ConsultationForm from '../Components/ConsultationForm';
import Consultation from '../assets/Images/ConsultForm.png';

const ConsultationSection = () => {
    return (
        <section id='Consultation' className="py-32 md:py-40 bg-light-green">
            <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-8">
                <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-4 text-center items-center md:text-left">Schedule Your Consultation</h2>
                    <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 text-center md:text-left">
                        Taking the first step is often the most important. A personalized consultation allows us to understand your specific needs and create a tailored plan for your journey to well-being.
                    </p>
                    <div className="hidden md:block">
                        <img
                            src={Consultation}
                            alt="Consultation"
                            className="rounded-lg shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full md:w-2/5 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal text-center mb-4 md:mb-6">Book Your Appointment</h3>
                    <ConsultationForm />
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;

// import React from "react";
// import ConsultationForm from '../Components/ConsultationForm';
// import Consultation from '../assets/Images/ConsultForm.png';

// const ConsultationSection = () => {
//     return (
//         <section className="pt-32 md:pt-40 py-8 md:py-16 bg-light-green">
//             <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-center gap-6 md:gap-x-8 items-stretch">
//                 <div className="w-full md:w-3/5 flex flex-col justify-between">
//                     <div>
//                         <h2 className="text-2xl md:text-4xl font-bold text-primary-green mb-4 md:mb-6 center">Schedule Your Consultation</h2>
//                         <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
//                             Taking the first step is often the most important. A personalized consultation allows us to understand your specific needs and create a tailored plan for your journey to well-being.
//                         </p>
//                     </div>
//                     <div className="flex-grow flex items-center justify-center mt-4 md:mt-0">
//                         <img
//                             src={Consultation}
//                             alt="Consultation"
//                             className="rounded-lg shadow-xl w-54 h-54 object-cover object-center hidden md:block"
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full md:w-2/5 flex flex-col justify-center">
//                     <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal text-center mb-4 md:mb-6">Book Your Appointment</h3>
//                     <ConsultationForm />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ConsultationSection;