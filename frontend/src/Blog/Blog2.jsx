import React from 'react';
import blogPostImg1 from '../assets/Images/Blog1.jpeg'; // Add your blog post images
import blogPostImg2 from '../assets/Images/Blog2.jpeg';
import blogPostImg3 from '../assets/Images/Blog3.jpeg';

// Sample data for the featured blog and other blogs
const featuredBlog = {
  title: 'Don’t let Stress Get Better Of You',
  image: blogPostImg2,
  link: '/blog/dont-let-stress-get-better-of-you', // Placeholder link
  content: [
    { type: 'paragraph', text: '“We live in times where stress has become an imbedded part of our daily routine life. Ever wondered how our body deals with stress? Our body activates resources like adrenaline and cortisol, which sharpens our senses to deal with stress or a pressure situation. But many times these resources supplied to cope up with stress reach a shortfall, just like while doing a physically challenging task our body starts running low on fluids. As a result of lack of available resources (adrenaline and cortisol) we start experiencing increasing levels of stress.' },
    { type: 'heading', text: 'How You Think?' },
    { type: 'paragraph', text: 'One of the most important factors that determine your stress levels is the way you think. The more you worry, feel uncomfortable, frustrated or angry the more will the stressor inflate on you. By being impatient and impulsive you fuel the fire of stressors in your life. With time the stressor becomes your own mind and you become the reason for all the irrational fear and worries surrounding your life. What started as stress now turns into Generalized Anxiety Disorder and Post Traumatic Stress Disorder in many cases.' },
    { type: 'heading', text: 'Reasons For Stress' },
    { type: 'paragraph', text: 'The primary reasons for stress surrounding individuals in our country are disintegrated families, work pressure, financial insecurity and personal relationships. One case which I witnessed was of a woman in her late twenties fearing her partner will cheat on her and marry someone else, she admitted her fears were irrational but couldn’t help fearing the worst. Her fears and angry outbursts were stretching her relationships thin, further aiding stress in her life. This behavior is common in all cases people worry about finances for the future without really living and enjoying the present moment.' },
    { type: 'heading', text: 'The Dependency' },
    { type: 'paragraph', text: '“Things are made to be used and people are meant to be loved, the problem in our time is things are being loved and people are being used”' },
    { type: 'paragraph', text: 'The above quote is apt and a major cause of stress in life being hooked to social media, mobile phones, cigarettes or alcohol can’t help you in curbing stress. A healthy conversation, human emotions and acceptance of a situation certainly can. But this takes more effort, which implies one thing that we have stopped caring for our own self. We need to change this.' },
    { type: 'heading', text: 'Some Ways To Cope-Up With Stress' },
    { type: 'paragraph', text: 'Here are my suggestions to deal with stress in a healthy way:-' },
    { type: 'heading', text: '1. Talk about it' },
    { type: 'paragraph', text: 'Don’t keep negative emotions buried inside you, talk about your problems with someone who you trust and if you can’t trust anyone seek advice from a psychiatrist or a counselor.' },
    { type: 'heading', text: '2. Do something you enjoy' },
    { type: 'paragraph', text: 'Grow out of the monotony of your routine life. Invest atleast 15-20 minutes in doing something you enjoy. Gardening, playing, going for a walk or watching a movie it can be anything.' },
    { type: 'heading', text: '3. Spend time with those who matter' },
    { type: 'paragraph', text: 'Spend some time with people who you care about, who make you happy. It will go a long way in making you feel better about yourself.' },
    { type: 'heading', text: '4. Get a pet' },
    { type: 'paragraph', text: 'Shelter a dog, bird or any other pet; according to research dogs have been found to be big relievers of stress in our lives.' },
    { type: 'heading', text: '5. Look at the bigger picture' },
    { type: 'paragraph', text: 'Don’t get bogged down by small stressors like heavy traffic, unpleasant people or work problems. Always look at the bigger picture and divert your energy in making things happen.' },
    { type: 'heading', text: 'Conclusion' },
    { type: 'paragraph', text: 'No situation is impossible to comprehend and dealt with. What matters is how we perceive people and problems in our life, most of the time all demons are in our mind. Seek help to fight them for a healthier and more meaningful life.' },
  ],
};

const otherBlogs = [
  {
    image: blogPostImg1,
    title: "5 Effective ways to deal with low self esteem",
    link: '/blog/5-effective-ways-to-deal-with-low-self-esteem', // Placeholder link
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
                className="w-15 h-35 rounded-lg mb-6 object-cover"
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