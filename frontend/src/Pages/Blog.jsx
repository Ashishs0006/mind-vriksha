import React from 'react';
import BlogHero from '../Components/BlogHero';
import BlogPosts from '../Components/BlogPosts';
import KnowMoreSection from '../Components/KnowMoreSection';

const BlogPage = () => {
  return (
    <>
      <main className="pt-16">
        <BlogHero />
        <BlogPosts />
        <KnowMoreSection />
      </main>
    </>
  );
};

export default BlogPage;