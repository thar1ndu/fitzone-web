import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Transform Your Body<br />
          <span className="text-red-600">Transform Your Life</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Join FitZone and start your fitness journey today. Expert trainers, state-of-the-art equipment, and a supportive community await you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            Start Free Trial
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;