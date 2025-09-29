import React, { useState, useEffect, useRef } from 'react';

const Award = ({ award }) => (
    <div className="flex flex-col items-center min-w-max px-4">
        <img
            src={award.img}
            alt={award.alt}
            className="h-20 md:h-24 object-contain filter grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="mt-2 text-xs md:text-sm text-gray-600 text-center">{award.alt}</p>
    </div>
);

const Awards = () => {
    const baseAwards = [
        { id: 1, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 1' },
        { id: 2, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 2' },
        { id: 3, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 3' },
        { id: 4, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 4' },
        { id: 5, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 5' },
    ];

    const [awards, setAwards] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef(null);
    const awardListRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const adjustAwardsList = () => {
            const container = scrollContainerRef.current;
            const awardList = awardListRef.current;
            if (!container || !awardList) return;

            // For mobile, use a simpler approach with fewer duplicates
            if (isMobile) {
                setAwards([...baseAwards, ...baseAwards]); // Just duplicate once for mobile
                return;
            }

            // For desktop, use the original logic
            const containerWidth = container.offsetWidth;
            const originalAwardListWidth = awardList.scrollWidth / 2;
            let newAwards = [...baseAwards, ...baseAwards];

            while (originalAwardListWidth < containerWidth * 1.5) {
                newAwards = [...newAwards, ...baseAwards];
                setAwards(newAwards);
                // Force re-render by using setTimeout to break the synchronous update
                setTimeout(() => {
                    awardList.style.width = 'auto';
                }, 0);
            }

            setAwards(newAwards);
        };

        adjustAwardsList();
        window.addEventListener('resize', adjustAwardsList);

        return () => window.removeEventListener('resize', adjustAwardsList);
    }, [isMobile]);

    return (
        <section className="py-16 bg-light-green">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-10">Recognized for Excellence</h2>
                <div 
                    ref={scrollContainerRef} 
                    className="overflow-hidden relative"
                    style={{ minHeight: '120px' }}
                >
                    <style>
                        {`
                        @keyframes scroll-left {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }

                        .award-icon-group {
                            display: inline-flex;
                            animation: scroll-left 25s linear infinite;
                            gap: 2rem;
                            padding: 1rem 0;
                        }

                        .scroll-container:hover .award-icon-group {
                            animation-play-state: paused;
                        }

                        /* Mobile styles */
                        @media (max-width: 767px) {
                            .award-icon-group {
                                animation-duration: 20s;
                                gap: 1.5rem;
                                padding: 0.5rem 0;
                            }
                            
                            .award-icon-group img {
                                height: 60px !important;
                            }
                        }

                        /* Desktop styles */
                        @media (min-width: 768px) {
                            .award-icon-group {
                                animation-duration: 40s;
                            }
                        }

                        /* Ensure awards are always visible */
                        .award-icon-group > div {
                            opacity: 1 !important;
                            visibility: visible !important;
                        }
                        `}
                    </style>
                    <div 
                        ref={awardListRef} 
                        className="award-icon-group"
                        style={{ 
                            minWidth: isMobile ? 'auto' : '200%',
                            willChange: 'transform'
                        }}
                    >
                        {awards.map((award, index) => (
                            <Award key={`${award.id}-${index}`} award={award} />
                        ))}
                    </div>
                    
                    {/* Gradient overlays for better visual effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-green to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-green to-transparent z-10"></div>
                </div>
                
                {/* Mobile instruction */}
                {isMobile && (
                    <p className="text-sm text-gray-600 mt-4 md:hidden">
                        Scroll to see more awards
                    </p>
                )}
            </div>
        </section>
    );
};

export default Awards;

// import React, { useState, useEffect, useRef } from 'react';

// const Awards = () => {
//     // Replicate the award data using the provided image for consistency
//     const baseAwards = [
//         { id: 1, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 1' },
//         { id: 2, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 2' },
//         { id: 3, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 3' },
//         { id: 4, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 4' },
//         { id: 5, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 5' },
//     ];

//     const [awards, setAwards] = useState(baseAwards);
//     const scrollContainerRef = useRef(null);

//     useEffect(() => {
//         const adjustAwardsList = () => {
//             const container = scrollContainerRef.current;
//             if (!container) return;

//             const containerWidth = container.offsetWidth;
//             // The item width needs to be calculated dynamically or use a fixed value with padding/gap
//             // Assuming image width + gap for calculation
//             const itemWidth = 100 + 32; // image width + padding/margin
//             const visibleItems = Math.ceil(containerWidth / itemWidth);
//             const requiredItems = visibleItems * 2; // Need at least double to make the loop seamless

//             let newAwards = [...baseAwards];
//             while (newAwards.length < requiredItems) {
//                 newAwards = [...newAwards, ...baseAwards];
//             }
//             setAwards(newAwards);
//         };

//         adjustAwardsList();
//         window.addEventListener('resize', adjustAwardsList);

//         return () => window.removeEventListener('resize', adjustAwardsList);
//     }, []);

//     return (
//         <section className="py-16 bg-light-green">
//             <div className="container mx-auto px-4 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-10">Recognized for Excellence</h2>
//                 <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap pb-4 relative">
//                     <style>
//                         {`
//                         @keyframes scroll-left {
//                             0% { transform: translateX(0); }
//                             100% { transform: translateX(-50%); }
//                         }

//                         .award-icon-group {
//                             display: inline-flex;
//                             animation: scroll-left 25s linear infinite;
//                             gap: 2rem;
//                             padding-right: 2rem;
//                         }

//                         .scroll-container:hover .award-icon-group {
//                             animation-play-state: paused;
//                         }

//                         @media (max-width: 767px) {
//                             .award-icon-group {
//                                 animation-duration: 15s;
//                             }
//                         }

//                         @media (min-width: 768px) {
//                             .award-icon-group {
//                                 animation-duration: 40s;
//                             }
//                         }
//                         `}
//                     </style>
//                     <div className="award-icon-group">
//                         {awards.map((award, index) => (
//                             <div key={index} className="flex flex-col items-center">
//                                 <img
//                                     src={award.img}
//                                     alt={award.alt}
//                                     className="h-24 md:h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
//                                 />
//                                 <p className="mt-2 text-sm text-gray-600 hidden md:block">{award.alt}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Awards;

// import React, { useState, useEffect, useRef } from 'react';

// const Awards = () => {
//   // Replicate the award data using the provided image for consistency
//   const baseAwards = [
//     { id: 1, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 1' },
//     { id: 2, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 2' },
//     { id: 3, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 3' },
//     { id: 4, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 4' },
//     { id: 5, img: 'https://placehold.co/100x100/f1f8e9/33691e?text=Award', alt: 'Mind Vriksha Award 5' },
//   ];

//   const [awards, setAwards] = useState(baseAwards);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const adjustAwardsList = () => {
//       const container = scrollContainerRef.current;
//       if (!container) return;

//       const containerWidth = container.offsetWidth;
//       const itemWidth = 100 + 32; // image width + padding/margin
//       const visibleItems = Math.ceil(containerWidth / itemWidth);
//       const requiredItems = visibleItems * 2; // Need at least double to make the loop seamless

//       let newAwards = [...baseAwards];
//       while (newAwards.length < requiredItems) {
//         newAwards = [...newAwards, ...baseAwards];
//       }
//       setAwards(newAwards);
//     };

//     adjustAwardsList();
//     window.addEventListener('resize', adjustAwardsList);

//     return () => window.removeEventListener('resize', adjustAwardsList);
//   }, []);

//   return (
//     <section className="py-16 bg-light-green">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-10">Recognized for Excellence</h2>
//         <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap pb-4 relative">
//           <style>
//             {`
//                         @keyframes scroll-left {
//                             0% { transform: translateX(0); }
//                             100% { transform: translateX(-50%); }
//                         }

//                         .award-icon-group {
//                             display: inline-flex;
//                             animation: scroll-left 25s linear infinite;
//                             gap: 2rem;
//                             padding-right: 2rem;
//                         }

//                         .scroll-container:hover .award-icon-group {
//                             animation-play-state: paused;
//                         }

//                         @media (min-width: 768px) {
//                             .award-icon-group {
//                                 animation-duration: 40s;
//                             }
//                         }
//                         `}
//           </style>
//           <div className="award-icon-group">
//             {awards.map((award, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img
//                   src={award.img}
//                   alt={award.alt}
//                   className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
//                 />
//                 <p className="mt-2 text-sm text-gray-600 hidden md:block">{award.alt}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Awards;

// import award1 from '../logo-MV.png'; // Replace with your award images
// import award2 from '../logo-MV.png'; 
// import award3 from '../logo-MV.png'; 
// import award4 from '../logo-MV.png'; 
// import award5 from '../logo-MV.png'; 

// const Awards = () => {
// const baseAwards = [
//   { img: award1, alt: "" },
//   { img: award2, alt: "" },
//   { img: award3, alt: "" },
//   { img: award4, alt: "" },
//   { img: award5, alt: "" },
// ];

// // const Awards = () => {
// //     // Replicate the award data using the provided image for consistency
// //     const baseAwards = [
// //         { id: 1, img: 'logo-MV.png', alt: 'Mind Vriksha Award 1' },
// //         { id: 2, img: 'logo-MV.png', alt: 'Mind Vriksha Award 2' },
// //         { id: 3, img: 'logo-MV.png', alt: 'Mind Vriksha Award 3' },
// //         { id: 4, img: 'logo-MV.png', alt: 'Mind Vriksha Award 4' },
// //         { id: 5, img: 'logo-MV.png', alt: 'Mind Vriksha Award 5' },
// //     ];

//     // Duplicate the awards to ensure smooth infinite scrolling, even with few items
//     const awards = [...baseAwards, ...baseAwards];

//     return (
//         <section className="py-16 bg-light-green">
//             <div className="container mx-auto px-4 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-10">Recognized for Excellence</h2>
//                 <div className="overflow-x-auto whitespace-nowrap scroll-container pb-4">
//                     <style>
//                         {`
//                         .scroll-container::-webkit-scrollbar {
//                             height: 8px;
//                         }

//                         .scroll-container::-webkit-scrollbar-thumb {
//                             background-color: #8BC34A;
//                             border-radius: 4px;
//                         }

//                         .scroll-container::-webkit-scrollbar-track {
//                             background-color: #F1F8E9;
//                         }

//                         .award-icon-group {
//                             display: inline-flex;
//                             animation: scroll-left 25s linear infinite;
//                             gap: 2rem; /* Added gap between items */
//                         }

//                         @keyframes scroll-left {
//                             0% { transform: translateX(0); }
//                             100% { transform: translateX(-50%); }
//                         }

//                         /* Pause animation on hover */
//                         .scroll-container:hover .award-icon-group {
//                             animation-play-state: paused;
//                         }

//                         /* Ensure a clean, responsive layout for different screen sizes */
//                         @media (min-width: 768px) {
//                             .award-icon-group {
//                                 animation-duration: 40s; /* Slower on larger screens */
//                             }
//                         }
//                         `}
//                     </style>
//                     <div className="award-icon-group">
//                         {awards.map((award, index) => (
//                             <div key={index} className="flex flex-col items-center">
//                                 <img
//                                     src={award.img}
//                                     alt={award.alt}
//                                     className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
//                                 />
//                                 <p className="mt-2 text-sm text-gray-600 hidden md:block">{award.alt}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


// import React from 'react';
// import award1 from '../logo-MV.png'; // Replace with your award images
// import award2 from '../logo-MV.png'; 
// import award3 from '../logo-MV.png'; 
// import award4 from '../logo-MV.png'; 
// import award5 from '../logo-MV.png'; 

// const awards = [
//   { img: award1, alt: "" },
//   { img: award2, alt: "" },
//   { img: award3, alt: "" },
//   { img: award4, alt: "" },
//   { img: award5, alt: "" },
// ];

// const Awards = () => {
//   return (
//     <section className="py-16 bg-light-green">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-10">Recognized for Excellence</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
//           {awards.map((award, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img 
//                 src={award.img} 
//                 alt={award.alt} 
//                 className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300" 
//               />
//               <p className="mt-2 text-sm text-gray-600 hidden md:block">{award.alt}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };