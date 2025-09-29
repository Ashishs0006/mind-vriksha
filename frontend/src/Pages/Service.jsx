import React from 'react';
import ServicesCarousel from '../Components/ServicesCarousel';
import ServicesList from '../Components/ServicesList';
// import PopularServices from '../Components/PopularServices';
import ConsultationForm from '../Components/ConsultationForm';

const ServicesPage = () => {
  return (
    <>
      <main className="pt-16">
        <ServicesCarousel />
        <ServicesList />
        {/* <PopularServices /> */}
        <ConsultationForm />
      </main>
    </>
  );
};

export default ServicesPage;