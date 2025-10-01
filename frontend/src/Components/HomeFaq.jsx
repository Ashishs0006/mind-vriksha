import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
   {
    question: "How do I know if I need to consult Psychiatrist / Therapist?",
    answer: "If you’ve been feeling overwhelmed, anxious, low, or struggling to cope with daily life, therapy can help. You don’t need to wait for a crisis to seek support.",
  },
  {
    question: "How do I book a session?",
    answer: "You can book directly through our website, call our clinic, or message us on WhatsApp. We will confirm your appointment within 24 hours.",
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes, all sessions are 100% confidential and private. Your personal details and conversations remain secure with your therapist.",
  },
  {
    question: "What can I expect in my first session?",
    answer: "Your first session is about getting to know you—your concerns, background, and goals. The therapist will explain how therapy works and together you’ll outline a plan. It’s a safe, confidential space with no pressure to share more than you’re comfortable with.",
  },
  {
    question: "Do you offer online consultation?",
    answer: "Yes, we provide both in-person and online sessions, so you can choose whichever is more convenient and comfortable for you.",
  },
    {
    question: "Do you work with children, couples, and families?",
    answer: "Yes, we offer therapy for individuals of all ages, as well as couples and families. Each plan is tailored to your needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal text-center mb-12">Frequently Asked Questions</h2> */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                className="flex justify-between items-center w-full text-left" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-primary-green">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaMinus className="text-dark-charcoal" />
                ) : (
                  <FaPlus className="text-dark-charcoal" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;