import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const disorderFAQs = [
  {
    category: "Anxiety & Stress",
    questions: [
      {
        q: "What are the early signs of anxiety?",
        a: "Symptoms may include constant worry, restlessness, difficulty sleeping, and fatigue. These are often accompanied by physical symptoms like a racing heart and muscle tension."
      },
      {
        q: "How can therapy help with stress?",
        a: "Therapy provides coping strategies, helps identify stress triggers, and teaches mindfulness techniques to manage and reduce your overall stress levels."
      },
    ]
  },
  {
    category: "Depression",
    questions: [
      {
        q: "How do I know if I’m depressed or just feeling low?",
        a: "Feeling low is temporary. Depression is characterized by persistent sadness, loss of interest in activities, changes in sleep or appetite, and feelings of hopelessness for a period of two weeks or more."
      },
      {
        q: "Is medication always necessary for depression?",
        a: "No, medication is not always necessary. Many forms of depression can be managed effectively with therapy alone. We will discuss the best treatment path for you."
      },
    ]
  },
  {
    category: "ADHD",
    questions: [
      {
        q: "Can adults have ADHD too?",
        a: "Yes, ADHD is not just a childhood condition. Adults with ADHD may struggle with concentration, organization, impulse control, and emotional regulation."
      },
      {
        q: "What treatments are available for ADHD?",
        a: "Treatment for ADHD typically involves a combination of medication, cognitive behavioral therapy (CBT), and behavioral strategies to improve focus and daily functioning."
      },
    ]
  },
];

const clinicalFAQs = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "We operate on an appointment-only basis to ensure that we can dedicate our full attention to each client. Please schedule your consultation in advance."
  },
  {
    q: "What is the consultation fee?",
    a: "Our consultation fees vary based on the type of service. Please contact our office directly for detailed information on fees and accepted insurance plans."
  },
  {
    q: "Are online consultations available?",
    a: "Yes, we offer secure and confidential online consultations via a telehealth platform, providing flexibility and convenience for our clients."
  },
  {
    q: "What is the average duration of a therapy session?",
    a: "A typical individual therapy session lasts for 50 minutes. The duration of group sessions or specialized treatments may vary."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleFAQ = (index, category) => {
    if (openCategory === category && openIndex === index) {
      setOpenIndex(null);
      setOpenCategory(null);
    } else {
      setOpenIndex(index);
      setOpenCategory(category);
    }
  };

  return (
    <section className="py-16 bg-primary-skin">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-green text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Disorder-Specific Questions */}
          <h3 className="text-2xl font-bold text-dark-charcoal text-center mb-6">Disorder-Specific Questions</h3>
          <div className="space-y-4 mb-12">
            {disorderFAQs.map((cat, catIndex) => (
              <div key={catIndex} className="bg-light-green p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-earthy-brown mb-4">{cat.category}</h4>
                {cat.questions.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-4 last:border-b-0">
                    <button 
                      className="flex justify-between items-center w-full text-left" 
                      onClick={() => toggleFAQ(index, cat.category)}
                    >
                      <span className="text-lg font-medium text-dark-charcoal">
                        {faq.q}
                      </span>
                      {openCategory === cat.category && openIndex === index ? (
                        <FaChevronUp className="text-primary-green" />
                      ) : (
                        <FaChevronDown className="text-primary-green" />
                      )}
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openCategory === cat.category && openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* General Clinical Inquiries */}
          <h3 className="text-2xl font-bold text-dark-charcoal text-center mb-6">General Clinical Inquiries</h3>
          <div className="space-y-4">
            {clinicalFAQs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4 last:border-b-0">
                <button 
                  className="flex justify-between items-center w-full text-left" 
                  onClick={() => toggleFAQ(index, 'clinical')}
                >
                  <span className="text-lg font-medium text-dark-charcoal">
                    {faq.q}
                  </span>
                  {openCategory === 'clinical' && openIndex === index ? (
                    <FaChevronUp className="text-primary-green" />
                  ) : (
                    <FaChevronDown className="text-primary-green" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openCategory === 'clinical' && openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;