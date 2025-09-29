import React from "react";
import ConsultationForm from '../Components/ConsultationForm';
import HomeFAQ from '../Components/HomeFaq';

const ConsultationSection = () => {
    return (
        <section id='Consultation' className="py-20 md:py-24 bg-[#f0f9eb] font-['Inter']">
            <div className="container mx-auto px-4 md:px-10">

                <div className="flex flex-col lg:flex-row items-stretch gap-8">
                    
                    {/* Left Side: Consultation Form Container (Centered Content) */}
                    <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-xl shadow-2xl flex flex-col justify-start items-center">
                        
                        {/* Clear Heading for Form - Text Centered */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Schedule Your Consultation</h3>
                        <p className="text-gray-600 text-base mb-6 max-w-md">
                            Taking the first step is the most important. Start your journey to well-being with a tailored appointment.
                        </p>
                        
                        {/* Consultation Form Component - Centered */}
                        {/* We use mx-auto and max-w to center the form content itself */}
                        <div className="w-full max-w-sm md:max-w-lg mx-auto">
                            <ConsultationForm />
                        </div>
                    </div>

                    {/* Right Side: FAQ Section Container (Already Centered Heading) */}
                    <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 rounded-xl shadow-2xl flex flex-col justify-center">
                        {/* Clear Heading for FAQ - Text Centered */}
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h3>
                        {/* FAQ Component */}
                        <HomeFAQ />
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;