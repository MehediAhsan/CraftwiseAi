import React from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AITools from '../components/home/AITools';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 px-6 md:px-10 font-jost'>
            <Navbar />
            <HeroSection />
            <AITools />
        </div>
    );
};

export default Home;