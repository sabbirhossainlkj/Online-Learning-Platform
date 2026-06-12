'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    bg: "bg-[url('/banners.png')]", // তোমার প্রজেক্টের ইমেজ পাথ অনুযায়ী চেঞ্জ করে নিবে
    badge: " 100+ Courses •  Expert Instructors •  Top Rated",
    title: "Upgrade Your Skills Today",
    subtitle: "Learn from Industry Experts and Build Your Future with Confidence",
  },
  {
    id: 2,
    bg: "bg-[url('/banner.png')]",
    badge: " Live Bootcamps •  Job Placement •  1-on-1 Mentorship",
    title: "Master In-Demand Tech",
    subtitle: "Join our intensive hands-on programs designed to get you hired globally.",
  },
  {
    id: 3,
    bg: "bg-[url('/image1.png')]",
    badge: " University Certified •  Global Alumni •  Lifetime Access",
    title: "Learn At Your Own Pace",
    subtitle: "Access world-class education from anywhere, anytime, on any device.",
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  const currentSlide = SLIDES[current];
  const headingWords = currentSlide.title.split(" ");

  return (
    <section className={`relative shadow-2xl rounded-2xl ${currentSlide.bg} bg-cover bg-center text-white overflow-hidden min-h-[550px] flex items-center justify-center isolation-isolate transition-all duration-1000`}>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute inset-0 opacity-30 pointer-events-none z-0 select-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full blur-[110px] -top-12 -left-12"
          animate={{ x: [0, 40, -20, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-bl from-blue-600 to-cyan-400 rounded-full blur-[110px] -bottom-12 -right-12"
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center z-10 flex flex-col items-center w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center w-full"
          >
            <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 overflow-hidden select-none">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="inline-block text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200/90 max-w-2xl font-normal leading-relaxed drop-shadow">
              {currentSlide.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full shadow-[0_4px_20px_rgba(236,72,153,0.3)] relative overflow-hidden group"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Start Learning</span>
              </motion.button>

              <motion.button
                className="w-full sm:w-auto px-8 py-4 border border-white/40 bg-white/5 backdrop-blur-md rounded-full font-bold text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.04, 
                  y: -2, 
                  backgroundColor: "rgba(255, 255, 255, 1)", 
                  color: "#0f172a",
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.96 }}
              >
                Explore Courses
              </motion.button>
            </div>

            <motion.div
              className="mt-12 inline-flex items-center text-lime-300 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm sm:text-base font-bold backdrop-blur-xl cursor-pointer shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="flex items-center gap-1.5 bg-lime-500/10 text-lime-400 px-2 py-0.5 rounded-md text-xs uppercase tracking-wider mr-2 border border-lime-500/20">Live</span>
              {currentSlide.badge}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white font-bold transition-all backdrop-blur-sm active:scale-90"
      >
        ❮
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white font-bold transition-all backdrop-blur-sm active:scale-90"
      >
        ❯
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-lime-400" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Banner;