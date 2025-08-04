import React from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 px-10 space-y-20'>
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Home;