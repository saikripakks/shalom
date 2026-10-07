import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ImageStory from '../components/ImageStory';
import About from '../components/About';
import Reviews from '../components/Reviews';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <ImageStory />
      <About />
      <Reviews />
      <WhyUs />
    </main>
  );
};

export default Home;
