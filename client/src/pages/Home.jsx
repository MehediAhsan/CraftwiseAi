import React, { useEffect, useState } from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AITools from '../components/home/AITools';
import Testimonials from '../components/home/Testimonials';
import Plan from '../components/home/Plan';
import Footer from '../components/home/Footer';

const Home = () => {
    const [bgClass, setBgClass] = useState('bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 300) {
                setBgClass('bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100');
            } else if (scrollY >= 300 && scrollY < 800) {
                setBgClass('bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100');
            } else if (scrollY >= 800 && scrollY < 1300) {
                setBgClass('bg-gradient-to-r from-pink-100 via-orange-100 to-green-100');
            } else if (scrollY >= 1300 && scrollY < 1800) {
                setBgClass('bg-gradient-to-r from-purple-100 via-indigo-100 to-sky-100');
            } else {
                setBgClass('bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`${bgClass} transition-colors duration-700 px-6 md:px-10 font-jost`}>
            <Navbar />
            <HeroSection />
            <AITools />
            <Testimonials />
            <Plan />
            <Footer />
        </div>
    );
};

export default Home;