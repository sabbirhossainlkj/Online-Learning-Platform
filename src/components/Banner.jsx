import React from 'react';

const Banner = () => {
    return (
        <section className="relative shadow-2xl rounded-xl bg-[url('/banner4.jpg')] bg-cover bg-center text-white overflow-hidden">

      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">

        <h1 className="text-4xl text-white md:text-6xl font-extrabold leading-tight">
          Upgrade Your Skills Today
        </h1>

        <p className="mt-6 text-2xl md:text-xl text-gray-200">
          Learn from Industry Experts and Build Your Future with Confidence
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Start Learning
          </button>

          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore Courses
          </button>
        </div>

        <div className="mt-10 inline-block text-white  px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xl font-bold">
          🎯 100+ Courses • 🔥 Expert Instructors • ⭐ Top Rated
        </div>

      </div>
    </section>

    );
};

export default Banner;