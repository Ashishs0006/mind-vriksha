import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your service-specific images
// import therapyImage from '../assets/services-therapy.jpg';
// import addictionImage from '../assets/services-addiction.jpg';
// import familyImage from '../assets/services-family.jpg';

const carouselSlides = [
  {
    // image: therapyImage,
    title: 'Individual & Group Therapy',
  },
  {
    // image: addictionImage,
    title: 'Comprehensive Addiction Care',
  },
  {
    // image: familyImage,
    title: 'Family & Couples Counseling',
  },
];

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="bg-white py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <Slider {...settings}>
            {carouselSlides.map((slide, index) => (
              <div key={index} className="relative">
                <img
                //   src={slide.image}
                  alt={slide.title}
                  className="w-full h-[60vh] md:h-[80vh] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-dark-charcoal bg-opacity-40 rounded-lg flex items-center justify-center text-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold max-w-2xl px-4">
                    {slide.title}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;