import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ImageStory from '../components/ImageStory';
import MeetDentist from '../components/MeetDentist';
import About from '../components/About';
import FirstVisit from '../components/FirstVisit';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <ImageStory />
      <MeetDentist />
      <About />
      <FirstVisit />
      <Reviews />
      <FAQ />
      <WhyUs />
    </main>
  );
};

export default Home;
