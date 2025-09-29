import React from 'react';
// import blogHeroImage from '../assets/blog-hero.jpg'; // Add your hero image here

const BlogHero = () => {
  return (
    <section className="relative bg-white py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            // src={blogHeroImage}
            alt="Mind Vriksha Blog"
            className="w-full h-80 md:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-charcoal bg-opacity-40 rounded-lg flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Blog
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;