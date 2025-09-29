import React from 'react';
import AboutUsMV from '../assets/Images/About.png';

const AboutUs = () => {
    return (
        <section id="About" className="py-24 bg-secondary-green">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* <div className="md:w-1/2">
                    <img
                        src={AboutUsMV}
                        alt="About Mind Vriksha"
                        className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                </div> */}
                <div className="md:w-2/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-green text-center mb-6">About Mind Vriksha</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Mind Vriksha, was founded in 2012 by Dr. Rohit Garg, MD (Psychiatry), and Senior Resident at AIIMS Delhi, with a simple yet powerful vision: to make mental health care accessible, compassionate, and stigma-free.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        We are a growing chain of mental health clinics. Our first and flagship center in GK2 has earned a reputation as one of Delhi NCR’s most trusted destinations for mental health and de-addiction care. After years of learning, refining our protocols, and strengthening our team, we expanded in 2025 with three new clinics across Delhi-NCR - CR Park, Noida, and Faridabad.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        At Mind Vriksha, we believe that every mind is like a tree — beautiful, complex, and capable of growth when nurtured with the right care. We have supported over two lakh lives facing mental health and addiction challenges, more than half through charitable initiatives. We combine evidence-based practices with deep empathy to ensure that every person feels safe, understood, and respected.
                    </p>
                    <p className="text-gray-700 text-lg">
                        For us, mental health is not just about treating illness — it is about restoring dignity, rebuilding connections, and empowering people to live fuller, healthier lives. This is why patients remember us not only for our expertise, but also for the patience, time, and genuine care they receive at every step.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;