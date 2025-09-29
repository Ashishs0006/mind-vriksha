import React, { useState, useRef, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "I would like to thank Dr Rohit and his Team for his medical support and guidance towards Mental health issues and patients suffering from it. First time when a family experience their loved one having a problem, they are soo devastated and shattered and they don't know where to go and who to reach.In such situation Dr's like Rohit sir act like a God and help a suffering family and patient to live a happy life again.He is a genuine person and not at all greedy towards patients and listens very patiently to those who visit.Thank you dr and keep the good work going.",
    author: "Vineet Kaushik",
  },
  {
    quote: "The best doctor ever to be the kindest person towards his patients and give them the best advice+medication for their illness and treats every patient as a family member....... I've personally been going to many psychiatrist and psychologist within Delhi NCR and I have search every doctor who could have helped me but nobody else was emotionally physically and mentally attach towards their patients to recover steadily & fastly like Dr.rohit garg",
    author: "Sahil Khurana",
  },
  {
    quote: "I had an amazing experience with Dr.Saurabh Avi and psychologist IndraniMa'am. They are the best professionals I have ever met. Their diagnosis is accurate, and they prescribe the right medication only if necessary. Indrani Ma'am truly understands me as a student and provides the best care with kindness and patience. Dr. Saurabh is highly professional, and the medicines he prescribed have been very effective in helping me.The clinic itself is a wondertul place-clean, beautiful, and peaceful. The staff is extremely polite, understanding, and always ready to help. Visiting the clinic makes me feel so much better. I am truly grateful for their support during this difficult time",
    author: "Aleena Rais",
  },
  {
    quote: "The experience and the expertise Dr Garg has its rarest and the way he give u comfort so that u open up is incredible . I have been through many places trust me after visiting him it was end to my search because the moment he will deal with u and the entire process and ecosystem he has build is immense powerful it's like u feel home . His content , Pep Talks and building bond is cheery on the cake.",
    author: "Romit Kathuria",
  }
];

const TestimonialCard = ({ testimonial, baseHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Check if content exceeds the base height
      const contentHeight = contentRef.current.scrollHeight;
      const cardHeight = baseHeight - 100; // Account for quote icon and author section
      
      if (contentHeight > cardHeight) {
        setNeedsReadMore(true);
      } else {
        setNeedsReadMore(false);
      }
    }
  }, [baseHeight]);

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col"
      style={{ height: `${baseHeight}px` }}
    >
      <FaQuoteLeft className="text-primary-green text-3xl mb-4" />
      
      <div 
        ref={contentRef}
        className={`italic text-lg text-gray-700 mb-4 flex-grow ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}
        style={{
          maxHeight: isExpanded ? 'none' : `${baseHeight - 120}px`,
        }}
      >
        {testimonial.quote}
      </div>
      
      <div className="mt-auto">
        {needsReadMore && !isExpanded && (
          <button 
            onClick={handleReadMore}
            className="text-primary-green font-semibold text-sm mb-3 hover:underline focus:outline-none"
          >
            Read more
          </button>
        )}
        
        <div className="flex flex-col">
          <div className="flex text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="font-semibold text-primary-green">- {testimonial.author}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1280, // Large desktops
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobiles (landscape)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Small mobiles (portrait)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ]
  };

  // Set a fixed base height for all cards
  const baseHeight = 380;

  return (
    <section className="py-16 bg-primary-skin">
      {/* <div className="container mx-auto px-4"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal text-center mb-12">What Our Patients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <TestimonialCard testimonial={testimonial} baseHeight={baseHeight} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;