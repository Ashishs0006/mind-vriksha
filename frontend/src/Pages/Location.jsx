import React from 'react';
import LocationHero from '../Components/LocationHero';
import WhoWeAre from '../Components/WhoAre.jsx';
import LocationDetails from '../Components/LocationDetails';
import KnowMoreSection from '../Components/KnowMoreSection';

const LocationPage = () => {
  return (
    <>
      <main className="pt-16">
        <LocationHero />
        <WhoWeAre />
        <LocationDetails />
        <KnowMoreSection />
      </main>
    </>
  );
};

export default LocationPage;