import React from 'react';
import blogPostImg1 from '../assets/Images/Blog1.jpeg'; // Add your blog post images
import blogPostImg2 from '../assets/Images/Blog2.jpeg';
import blogPostImg3 from '../assets/Images/Blog3.jpeg';

// Sample data for the featured blog and other blogs
const featuredBlog = {
  title: '5 Effective ways to deal with low self esteem',
  image: blogPostImg1,
  link: '/blog/5-effective-ways-to-deal-with-low-self-esteem', // Placeholder link
  content: [
    { type: 'heading', text: '“Ups and downs in life are very important to keep us going, because a straight line even in an E.C.G means we are not alive”- Ratan Tata' },
    { type: 'paragraph', text: 'Ups and downs are an embedded part of our lives, while on the way up we all feel a sense of high self confidence and morale but as soon as our life starts going downhill our inner self critic damages the self esteem. Soon we start focusing on all the negative aspects of our life.' },
    { type: 'paragraph', text: 'Is there a way to boost our self esteem in a short span of time? Yes, there is and all that it requires is a little effort on our part.' },
    { type: 'heading', text: '1. Learning from mistakes and failures' },
    { type: 'paragraph', text: 'Mistakes and failures in life make us learn things about people, life and most importantly our inner self. Failures build our character in a hard way and give us the opportunity to transform into someone better than who we are. Furthermore, failure simply means we are trying something new which very few people have the courage to do and as simply put by someone “ I have not failed, I’ve just found 10,000 ways that won’t work.' },
    { type: 'heading', text: '2. Appreciate yourself' },
    { type: 'paragraph', text: 'At the end of your long day close your eyes for 2 minutes and think about the good things you did, It can be how you made someone laugh, sharing your lunch with a colleague, helping a poor person or being there for your friends and family when they need you. This exercise will give a unique value to each day of your help and the self appreciation will instantly improve your mood.' },
    { type: 'heading', text: '3. Doing the right thing' },
    { type: 'paragraph', text: 'Whenever we have to take a decision whether small or big we deep inside in our conscience know what’s right and wrong. Focus on doing the right thing every day it can be from obeying the traffic rules, respecting women and being selfless in your relationships. By making correct decisions you let your soul free from all the negativity and guilt that sometimes wears us down.' },
    { type: 'heading', text: '4. Don’t compare yourself to others' },
    { type: 'paragraph', text: 'Each one of us has different lives different challenges to face every day. Introspect upon yourself and find ways to improve yourself each day. If you have to compare, compare yourself from the person you were yesterday and try to become better today both in your professional and personal life. This practice will give you more satisfaction than comparing yourself to others ever will.' },
    { type: 'heading', text: '5. Be your best friend' },
    { type: 'paragraph', text: 'Listen to your inner self and be honest towards yourself, be accountable for the actions you take. Talk to yourself and exert the negative thoughts and feeling occurring inside you. Self introspection is the key to being your best friends and in making yourself a better person.' },
  ],
};

const otherBlogs = [
  {
    image: blogPostImg2,
    title: "Don't let stress get better of you",
    link: '/blog/dont-let-stress-get-better-of-you', // Placeholder link
  },
  {
    image: blogPostImg3,
    title: 'Seeking help before time passes you by',
    link: '/blog/seeking-help-before-time-passes-you-by', // Placeholder link
  },
];

// Inline SVG for the external link icon
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const BlogLayout = () => {
  const headings = featuredBlog.content.filter(item => item.type === 'heading');

  return (
    <div className="bg-gray-100 min-h-screen py-20 font-sans">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{featuredBlog.title}</h1>
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-30 rounded-lg mb-6 object-cover"
              />

              {/* What's Inside Section */}
              <div className="bg-light-green p-4 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-primary-green mb-2">What's Inside</h3>
                <ul className="list-disc list-inside space-y-1">
                  {headings.map((heading, index) => (
                    <li key={index} className="text-gray-700">
                      <a href={`#${heading.text.replace(/\s/g, '-')}`} className="hover:underline">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blog Content */}
              {featuredBlog.content.map((item, index) => {
                if (item.type === 'heading') {
                  return (
                    <h2 key={index} id={item.text.replace(/\s/g, '-')} className="text-2xl font-bold text-dark-charcoal mt-8 mb-4">
                      {item.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {item.text}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Sidebar for Other Blogs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Other Blogs</h2>
              <div className="space-y-6">
                {otherBlogs.map((blog, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark-charcoal">{blog.title}</h3>
                      <a href={blog.link} className="text-primary-green hover:underline text-sm font-semibold inline-flex items-center space-x-2">
                        <span>Read More</span>
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;