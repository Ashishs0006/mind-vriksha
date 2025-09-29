import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Icon } from 'lucide-react';
import { FaClipboardList, FaMicroscope, FaUsers, FaHeartbeat, FaRegSmileBeam, FaMedal } from 'react-icons/fa';
import { MdAssignmentTurnedIn, MdGroups, MdAutorenew } from 'react-icons/md';
import Treatment1 from '../assets/Images/treatment1.png';
import Treatment2 from '../assets/Images/Accurate.png';
import Treatment3 from '../assets/Images/Multidisciplinary.png';
import Treatment4 from '../assets/Images/Continues.png';
import Treatment5 from '../assets/Images/Recovery.png';

const steps = [
    {
        number: 1,
        title: 'Comprehensive Case History & Assessment ',
        description: 'We begin with an in-depth case history, not just noting symptoms but also understanding family background, lifestyle, and personal experiences. This holistic approach ensures nothing important is overlooked.',
        image: Treatment1,
        Icon: FaClipboardList,
    },
    {
        number: 2,
        title: 'Accurate Diagnosis & Individualized Plan',
        description: 'Our team carefully evaluates your symptoms and designs a personalized plan that may include therapy, medication, or both. Each plan is unique — no “one-size-fits-all” approach.',
        image: Treatment2,
        Icon: FaMicroscope,
    },
    {
        number: 3,
        title: 'Multidisciplinary Interventions',
        description: 'You receive evidence-based therapies along with support from psychiatrists, psychologists, counselors, and rehabilitation specialists working together as one team.',
        image: Treatment3,
        Icon: FaUsers,
    },
    {
        number: 4,
        title: 'Continuous Monitoring & OPD Follow-Ups',
        description: 'We track your progress through structured OPD follow-ups, adjusting treatment as needed. Our continuity of care ensures long-term stability and prevents relapse.',
        image: Treatment4,
        Icon: FaHeartbeat,
    },
    {
        number: 5,
        title: 'Recovery & Life Skills ',
        description: 'Beyond symptom control, we focus on recovery— helping you build coping skills, emotional resilience, and strategies for real-world challenges.',
        image: Treatment5,
        Icon: FaRegSmileBeam,
    },
];

const TreatmentProcess = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 32; // Card width + gap
            const newIndex = (currentIndex + (direction === 'left' ? -1 : 1) + steps.length) % steps.length;
            setCurrentIndex(newIndex);
            
            scrollRef.current.scrollTo({
                left: newIndex * cardWidth,
                behavior: 'smooth',
            });
        }
    };
    
    // Auto-scroll logic
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            handleScroll('right');
        }, 1000); // 5 seconds autoplay speed
        
        return () => clearInterval(interval);
    }, [isHovered, currentIndex]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal text-center mb-12">Our Treatment Process</h2>
                <div 
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div ref={scrollRef} className="flex overflow-x-hidden gap-8 scroll-smooth" style={{ scrollSnapType: 'x mandatory' }}>
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div 
                                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-center bg-light-green p-6 rounded-lg shadow-md"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    {/* <img src={step.image} alt={step.title} className="w-full h-60 object-cover rounded-md mb-4" /> */}
                                    <div className="flex justify-center pt-8 mb-2">
                                        <step.Icon size={60} className="text-primary-green" />
                                    </div>
                                    <div className="w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-green mb-2">{step.title}</h3>
                                    <p className="text-gray-700">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-green" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg z-10 hidden md:block"
                    >
                        <ChevronLeft size={24} className="text-primary-green" />
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg z-10 hidden md:block"
                    >
                        <ChevronRight size={24} className="text-primary-green" />
                    </button>
                </div>
                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 32;
                                scrollRef.current.scrollTo({
                                    left: index * cardWidth,
                                    behavior: 'smooth',
                                });
                                setCurrentIndex(index);
                            }}
                            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                                currentIndex === index ? 'bg-primary-green' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TreatmentProcess;

// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Treatment1 from '../assets/Images/treatment1.png';
// import Treatment2 from '../assets/Images/treatment2.png';
// import Treatment3 from '../assets/Images/treatment3.png';
// import Treatment4 from '../assets/Images/treatment4.png';
// import Treatment5 from '../assets/Images/treatment5.png';

// const steps = [
//     {
//         number: 1,
//         title: 'Comprehensive Case History & Assessment ',
//         description: 'We begin with an in-depth case history, not just noting symptoms but also understanding family background, lifestyle, and personal experiences. This holistic approach ensures nothing important is overlooked.',
//         image: Treatment1,
//     },
//     {
//         number: 2,
//         title: 'Accurate Diagnosis & Individualized Plan',
//         description: 'Our team carefully evaluates your symptoms and designs a personalized plan that may include therapy, medication, or both. Each plan is unique — no “one-size-fits-all” approach.',
//         image: Treatment2,
//     },
//     {
//         number: 3,
//         title: 'Multidisciplinary Interventions',
//         description: 'You receive evidence-based therapies along with support from psychiatrists, psychologists, counselors, and rehabilitation specialists working together as one team.',
//         image: Treatment3,
//     },
//     {
//         number: 4,
//         title: 'Continuous Monitoring & OPD Follow-Ups',
//         description: 'We track your progress through structured OPD follow-ups, adjusting treatment as needed. Our continuity of care ensures long-term stability and prevents relapse.',
//         image: Treatment4,
//     },
//     {
//         number: 5,
//         title: 'Recovery & Life Skills ',
//         description: 'Beyond symptom control, we focus on recovery— helping you build coping skills, emotional resilience, and strategies for real-world challenges.',
//         image: Treatment5,
//     },
// ];

// const TreatmentProcess = () => {
//     const scrollRef = useRef(null);
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleScroll = (direction) => {
//         if (scrollRef.current) {
//             const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 32; // Card width + gap
//             const newIndex = (currentIndex + (direction === 'left' ? -1 : 1) + steps.length) % steps.length;
//             setCurrentIndex(newIndex);
            
//             scrollRef.current.scrollTo({
//                 left: newIndex * cardWidth,
//                 behavior: 'smooth',
//             });
//         }
//     };
    
//     // Auto-scroll logic
//     useEffect(() => {
//         if (isHovered) return;

//         const interval = setInterval(() => {
//             handleScroll('right');
//         }, 1000); // 5 seconds autoplay speed
        
//         return () => clearInterval(interval);
//     }, [isHovered, currentIndex]);

//     return (
//         <section className="py-24 bg-white">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal text-center mb-12">Our Treatment Process</h2>
//                 <div 
//                     className="relative overflow-hidden"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     <div ref={scrollRef} className="flex overflow-x-hidden gap-8 scroll-smooth" style={{ scrollSnapType: 'x mandatory' }}>
//                         {steps.map((step, index) => (
//                             <div 
//                                 key={index} 
//                                 className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-center bg-light-green p-6 rounded-lg shadow-md"
//                                 style={{ scrollSnapAlign: 'start' }}
//                             >
//                                 <img src={step.image} alt={step.title} className="w-full h-80 object-cover rounded-md mb-4" />
//                                 <div className="w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
//                                     {step.number}
//                                 </div>
//                                 <h3 className="text-xl font-bold text-primary-green mb-2">{step.title}</h3>
//                                 <p className="text-gray-700">{step.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Navigation Arrows */}
//                     <button
//                         onClick={() => handleScroll('left')}
//                         className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg z-10 hidden md:block"
//                     >
//                         <ChevronLeft size={24} className="text-primary-green" />
//                     </button>
//                     <button
//                         onClick={() => handleScroll('right')}
//                         className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg z-10 hidden md:block"
//                     >
//                         <ChevronRight size={24} className="text-primary-green" />
//                     </button>
//                 </div>
//                 {/* Navigation Dots */}
//                 <div className="flex justify-center space-x-2 mt-8">
//                     {steps.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => {
//                                 const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 32;
//                                 scrollRef.current.scrollTo({
//                                     left: index * cardWidth,
//                                     behavior: 'smooth',
//                                 });
//                                 setCurrentIndex(index);
//                             }}
//                             className={`h-3 w-3 rounded-full transition-colors duration-300 ${
//                                 currentIndex === index ? 'bg-primary-green' : 'bg-gray-300'
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TreatmentProcess;