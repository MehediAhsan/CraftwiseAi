import React from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AITools from '../components/home/AITools';
import Testimonials from '../components/home/Testimonials';
import Plan from '../components/home/Plan';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 px-6 md:px-10 font-jost'>
            <Navbar />
            <HeroSection />
            <AITools />
            <Testimonials />
            <Plan />
        </div>
    );
};

export default Home;