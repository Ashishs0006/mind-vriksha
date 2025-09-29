import React from 'react';
import Hero from '../Components/Hero';
import WhyMV from '../Components/WhyMV';
import TreatmentProcess from '../Components/TreatmentProcess';
import Testimonials from '../Components/Testimonials';
// import Reels from '../Components/Reels';
// import FAQ from '../Components/HomeFaq';
import Services from '../Components/HomeServices';
import BlogPosts from '../Components/BlogPosts';
import AboutMV from '../Components/AboutMV';
import Location from '../Components/HomeLocations';
// import ConsultationSection from '../Components/ConsultationSection';
import HomeConsultFAQ from '../Components/HomeConsultFAQ';
import '../index.css';
// import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="antialiased">
      {/* <Helmet>
        <title>Mind Vriksha | Best Psychiatry & Mental Health Clinic in Delhi NCR</title>
        <meta
          name="description"
          content="Mind Vriksha offers expert psychiatric care, depression treatment, therapy, and holistic mental health services in Delhi, Faridabad, and Noida. Book an appointment with experienced psychiatrists and psychologists."
        />
        <meta
          name="keywords"
          content="psychiatrist, psychologist, mental health, depression, therapy, counseling, Delhi, Faridabad, Noida, Mind Vriksha, Dr. Rohit Garg"
        />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:title" content="Mind Vriksha | Best Psychiatry & Mental Health Clinic" />
        <meta property="og:description" content="Expert psychiatric care and therapy in Delhi NCR with top doctors." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
      </Helmet> */}
      <main className="pt-16">
        <Hero />
        <AboutMV />
        <WhyMV />
        <Services />
        <TreatmentProcess />
        <Testimonials />
        {/* <Reels /> */}
        <Location />
        <BlogPosts />
        {/* <ConsultationSection />
        <FAQ /> */}
        <HomeConsultFAQ />
        
      </main>
    </div>
  );
};

export default Home;