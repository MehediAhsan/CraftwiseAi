import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Build smarter <br /> with
          <span className="text-primary"> AI-powered tools</span>
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Boost your productivity with intelligent automation. Generate, design, and launch content effortlessly.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-6 py-3 text-white bg-primary hover:bg-indigo-700 rounded-xl text-base font-medium transition">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-500 rounded-xl text-base font-medium transition">
            Learn More
          </button>
        </div>
        
        <div className="mt-10 flex items-center justify-center space-x-3">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 md:h-10 w-8 md:w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" />
            <img className="inline-block h-8 md:h-10 w-8 md:w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" />
            <img className="inline-block h-8 md:h-10 w-8 md:w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="User 3" />
          </div>
          <p className="text-sm text-gray-600">Loved by over <span className="font-semibold">12,000+</span> creators</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
