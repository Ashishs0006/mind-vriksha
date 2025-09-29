import React from 'react';
import blogPostImg1 from '../assets/Images/Blog1.jpeg'; // Add your blog post images
import blogPostImg2 from '../assets/Images/Blog2.jpeg';
import blogPostImg3 from '../assets/Images/Blog3.jpeg';

const blogPosts = [
  {
    title: '5 Effective ways to deal with low self esteem',
    snippet: 'Ups and downs in life are very important to keep us going, because a straight line even in an E.C.G means we are not alive.',
    image: blogPostImg1,
    date: 'September 15, 2025',
    link: '/blog/5-effective-ways-to-deal-with-low-self-esteem', // Replace with link to the full blog post
  },
  {
    title: "Dont't let stress get better of you",
    snippet: 'We live in times where stress has become an imbedded part of our daily routine life. Ever wondered how our body deals with stress?',
    image: blogPostImg2,
    date: 'September 20, 2025',
    link: '/blog/dont-let-stress-get-better-of-you',
  },
  {
    title: 'Seeking help before time passes you by',
    snippet: 'When the symptoms start to show up of mental disorder most of us try to pull that under the carpet.',
    image: blogPostImg3,
    date: 'September 25, 2025',
    link: '/blog/seeking-help-before-time-passes-you-by',
  },
];

const BlogPosts = () => {
  return (
    <section id="Blog" className="py-24 bg-primary-skin">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-light-green p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-left">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <div className="w-full">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-semibold text-dark-charcoal mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.snippet}</p>
                <a href={post.link} className="inline-block bg-primary-green hover:bg-secondary-green text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;