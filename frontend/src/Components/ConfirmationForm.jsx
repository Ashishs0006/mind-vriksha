import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ConfirmationPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-light-green py-12">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-lg mx-auto">
                <div className="text-6xl text-primary-green mb-6"></div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">Form Submitted Successfully!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for taking the first step toward your mental health. We’ll contact you shortly.
                </p>
                <p className="text-md text-gray-600 mb-8">
                    If you don’t want to wait, you can call us now.
                </p>
                <a href="tel:+919310199510" className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center space-x-2">
                    <FaPhoneAlt />
                    <span>Call Us Now</span>
                </a>
            </div>
        </div>
    );
};

export default ConfirmationPage;
