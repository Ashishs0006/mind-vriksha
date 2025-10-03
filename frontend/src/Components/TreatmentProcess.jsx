// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, FileText, Microscope, Users, HeartPulse, Smile } from 'lucide-react';

// const steps = [
//     {
//         number: 1,
//         title: 'Comprehensive Case History & Assessment ',
//         description: 'We begin with a detailed case history that considers symptoms, family background, lifestyle, and personal experiences. This comprehensive approach ensures an accurate diagnosis and a tailored treatment plan.',
//         Icon: FileText, // Replaced FaClipboardList
//     },
//     {
//         number: 2,
//         title: 'Accurate Diagnosis & Individualized Plan',
//         description: 'Our team conducts a thorough evaluation to develop a personalized treatment plan, which may include therapy, medication, or a combination of both, tailored to each individuals needs.',
//         Icon: Microscope, // Replaced FaMicroscope
//     },
//     {
//         number: 3,
//         title: 'Multidisciplinary Interventions',
//         description: 'You receive evidence-based therapies along with support from psychiatrists, psychologists, counselors, and rehabilitation specialists working together as one team.',
//         Icon: Users, // Replaced FaUsers
//     },
//     {
//         number: 4,
//         title: 'Continuous Monitoring & OPD Follow-Ups',
//         description: 'We monitor your progress through regular outpatient follow-ups, adjusting treatment as necessary to ensure sustained stability and prevent relapse.',
//         Icon: HeartPulse, // Replaced FaHeartbeat
//     },
//     {
//         number: 5,
//         title: 'Recovery & Life Skills ',
//         description: 'Our approach extends beyond symptom management to support recovery by enhancing coping skills, emotional resilience, and practical strategies for everyday challenges.',
//         Icon: Smile, // Replaced FaRegSmileBeam
//     },
// ];

// const TreatmentProcess = () => {
//     const scrollRef = useRef(null);
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isMobile, setIsMobile] = useState(false);

//     // Determines if the view is mobile (used to disable auto-scroll)
//     useEffect(() => {
//         const checkMobile = () => {
//             // Mobile breakpoint check (less than 768px wide)
//             setIsMobile(window.innerWidth < 768);
//         };
//         checkMobile();
//         window.addEventListener('resize', checkMobile);
//         return () => window.removeEventListener('resize', checkMobile);
//     }, []);


//     // --- Scrolling Logic ---

//     // Handles programmatic scrolling for dots and arrows 
//     const handleScroll = (direction) => {
//         if (scrollRef.current) {
//             // Calculate current visible card width, including the gap (gap-8 = 32px)
//             const cardElement = scrollRef.current.querySelector('.scroll-card');
//             if (!cardElement) return;

//             // Card width + gap size (32px)
//             const cardWidth = cardElement.offsetWidth + 32; 
            
//             let newIndex;
//             if (typeof direction === 'number') { // Check if direction is an index (from the dots)
//                 newIndex = direction; 
//             } else {
//                 newIndex = (currentIndex + (direction === 'left' ? -1 : 1));
//                 // Keep index within bounds by looping
//                 if (newIndex < 0) newIndex = steps.length - 1;
//                 if (newIndex >= steps.length) newIndex = 0;
//             }

//             setCurrentIndex(newIndex);
            
//             scrollRef.current.scrollTo({
//                 left: newIndex * cardWidth,
//                 behavior: 'smooth',
//             });
//         }
//     };
    
//     // Auto-scroll logic (only runs on desktop and when not hovered)
//     useEffect(() => {
//         if (isMobile || isHovered) return;

//         const interval = setInterval(() => {
//             handleScroll('right');
//         }, 5000); // 5 seconds autoplay speed
        
//         return () => clearInterval(interval);
//     }, [isHovered, currentIndex, isMobile]);


//     // --- Manual Scroll Position Tracking (for dots) ---
//     // Tracks the current index when the user swipes/scrolls manually
//     useEffect(() => {
//         const scrollContainer = scrollRef.current;
//         if (!scrollContainer) return;

//         const updateIndex = () => {
//             const cardElement = scrollContainer.querySelector('.scroll-card');
//             if (!cardElement) return;
//             // Card width + gap size (32px)
//             const cardWidth = cardElement.offsetWidth + 32; 
//             // Determine which card is currently centered/visible
//             const newIndex = Math.round(scrollContainer.scrollLeft / cardWidth);
//             setCurrentIndex(newIndex);
//         };

//         // Add scroll listener for manual swipe/scroll events
//         scrollContainer.addEventListener('scroll', updateIndex);
//         return () => scrollContainer.removeEventListener('scroll', updateIndex);
//     }, []);


//     return (
//         <section className="py-16 md:py-24 bg-white font-sans">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Treatment Process</h2>
//                 <div 
//                     className="relative"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     {/* The scrollable container for the steps */}
//                     <div 
//                         ref={scrollRef} 
//                         className="flex overflow-x-scroll md:overflow-x-hidden gap-8 scroll-smooth pb-4" 
//                         style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
//                     >
//                         {steps.map((step, index) => (
//                             <React.Fragment key={index}>
//                                 {/* Card Container */}
//                                 <div 
//                                     className="scroll-card flex-shrink-0 w-[85vw] mx-auto sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] flex flex-col items-center text-center bg-light-green p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
//                                     style={{ scrollSnapAlign: 'start' }}
//                                 >
//                                     <div className="flex justify-center pt-4 mb-2">
//                                         <step.Icon size={48} className="text-[#33691e] animate-pulse" />
//                                     </div>
//                                     <div className="w-10 h-10 bg-[#33691e] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
//                                         {step.number}
//                                     </div>
//                                     <h3 className="text-xl font-bold text-[#33691e] mb-2">{step.title}</h3>
//                                     <p className="text-gray-700">{step.description}</p>
//                                 </div>
                                
//                                 {/* Arrow Separator (Hidden on mobile, only visible between steps on desktop) */}
//                                 {index < steps.length - 1 && (
//                                     <div className="flex items-center justify-center flex-shrink-0 w-8 hidden sm:flex">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33691e]" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </div>

//                     {/* Navigation Arrows: Positioned at the absolute edges of the relative container. 
//                         left-0/right-0 ensures they are on the edge of the screen content area on mobile. */}
//                     <button
//                         onClick={() => handleScroll('left')}
//                         className="absolute top-1/2 left-0 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl z-20 transition hover:scale-110 active:scale-95"
//                     >
//                         <ChevronLeft size={28} className="text-[#33691e]" />
//                     </button>
//                     <button
//                         onClick={() => handleScroll('right')}
//                         className="absolute top-1/2 right-0 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl z-20 transition hover:scale-110 active:scale-95"
//                     >
//                         <ChevronRight size={28} className="text-[#33691e]" />
//                     </button>
//                 </div>
                
//                 {/* Navigation Dots */}
//                 <div className="flex justify-center space-x-2 mt-8">
//                     {steps.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleScroll(index)} // Pass index directly as 'dot' direction
//                             className={`h-3 w-3 rounded-full transition-colors duration-300 ${
//                                 currentIndex === index ? 'bg-[#33691e] scale-125' : 'bg-gray-300'
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TreatmentProcess;

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
        description: 'We begin with a detailed case history that considers symptoms, family background, lifestyle, and personal experiences. This comprehensive approach ensures an accurate diagnosis and a tailored treatment plan.',
        image: Treatment1,
        Icon: FaClipboardList,
    },
    {
        number: 2,
        title: 'Accurate Diagnosis & Individualized Plan',
        description: 'Our team conducts a thorough evaluation to develop a personalized treatment plan, which may include therapy, medication, or a combination of both, tailored to each individuals needs.',
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
        description: 'We monitor your progress through regular outpatient follow-ups, adjusting treatment as necessary to ensure sustained stability and prevent relapse.',
        image: Treatment4,
        Icon: FaHeartbeat,
    },
    {
        number: 5,
        title: 'Recovery & Life Skills ',
        description: 'Our approach extends beyond symptom management to support recovery by enhancing coping skills, emotional resilience, and practical strategies for everyday challenges.',
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
        }, 5000); // 5 seconds autoplay speed
        
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