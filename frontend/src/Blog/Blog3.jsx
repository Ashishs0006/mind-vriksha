import React from 'react';
import blogPostImg1 from '../assets/Images/Blog1.jpeg'; // Add your blog post images
import blogPostImg2 from '../assets/Images/Blog2.jpeg';
import blogPostImg3 from '../assets/Images/Blog3.jpeg';

// Sample data for the featured blog and other blogs
const featuredBlog = {
  title: 'Seeking help before time passes you by',
  image: blogPostImg2,
  link: '/blog/seeking-help-before-time-passes-you-by', // Placeholder link
  content: [
    { type: 'heading', text: 'The beginning' },
    { type: 'paragraph', text: 'When the symptoms start to show up of mental disorder (I will include addiction to a substance/alcohol as a mental disorder) most of us try to pull that under the carpet, thinking the mental disorder will subside on its own and its nothing. We fail to acknowledge its presence, the gradual signs of impact it is having on our personal and professional well being. Most of the times we are ashamed deep down and that acceptance which is the first step of healing becomes an option which seems as a decision that will ruin ourselves in front of the society, which we consciously or subconsciously care a lot about, sometimes even more than our own well being.' },
    { type: 'heading', text: 'The Strange alternative treatment' },
    { type: 'paragraph', text: 'India is a country of never ending superstitions and since most of the mental disorders are intangible as their wounds on the soul cannot be seen by the naked eye, many amongst the same judgmental society resort to visiting unholy men who claims to have a cure of every disease through their defaming rituals. Many cases same across where people suffering from mental disorders such as dissociative types, bipolar disorder were believed to be possessed by a haunting soul by their family members, which further added in worsening their mental condition and well being.' },
    { type: 'heading', text: 'Why mad is used as an abusive word?' },
    { type: 'paragraph', text: 'Why people call the other person mad, insane, mentally retarded or crazy as an abusive word or slang is beyond logic. That somewhat reveals our mindset about people suffering from mental disorder, it’s like we disregard them from the society and try to ignore their mere presence. Calling a normal person mad is the same as calling them handicapped, cancer or polio. But we fail to realize that, our mindset when it comes to facing with mental disorders is highly corrupt and evilly selfish. So when someone calls you mad or insane just let it pass by, the one’s passing judgments on other’s are the same people who need help about their well being the most.' },
    { type: 'heading', text: 'The bitter end' },
    { type: 'paragraph', text: 'So after knocking on every wrong door the person suffering from a mental problem arrives at the footsteps of a psychiatrist hoping for a miracle, most of the times it’s too late to treat him completely and all that is left after the start of treatment for the patient and his family is regret of not coming months or years back when they could have managed to turn their life around and start fresh, instead they lived in the fear of social stigma attached to mental problem treatment by the society and everyone whose time is up and they are about to die, don’t see any faces of the society visiting them, because our society is faceless driven by blind faith not belief, living in denial not reality and lastly pitying others not themselves because we feel good about ourselves when we look down upon people. The person with the mental disorder was just another casualty of our society. It bestows upon you what you want to seek treatment or being just another casualty.' },
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
    title: 'Don’t let Stress Get Better Of You',
    link: '/blog/dont-let-stress-get-better-of-you', // Placeholder link
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