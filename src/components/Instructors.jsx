'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Jhankar Mahbub",
    role: "Full Stack Developer",
    rating: 4.9,
    image: "https://bootcamp.programming-hero.com/assets/jhankar-mahbub-CxpqyKJU.png",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "UI/UX Designer",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr1mnxnB6QXDUtY6UO8Zrf0Ew60gSurMdLA&s",
  },
  {
    id: 3,
    name: "John Doe",
    role: "React Expert",
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtLnYEqvhKKHET_JzfYOv5hZNV1cngGuY_A&s",
  },
  {
    id: 4,
    name: "Alex Smith",
    role: "Backend Developer",
    rating: 4.8,
    image: "https://excelsm.com/wp-content/uploads/2025/03/speaker-headshot-alex-smith-6.jpg",
  },
];

export default function TopInstructors() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] } 
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      
      <motion.h2 
        className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Top Instructors
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} 
      >
        {instructors.map((ins) => (
          <motion.div
            key={ins.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-28 h-28 mx-auto mb-5 z-10">
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-300 pointer-events-none" />
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="rounded-full object-cover p-1.5 transition-transform duration-500 group-hover:rotate-3"
              />
            </div>

            <div className="relative z-10">
              <h3 className="font-extrabold text-xl text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                {ins.name}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">
                {ins.role}
              </p>

              <motion.div 
                className="inline-flex justify-center items-center gap-1.5 mt-4 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 rounded-full text-amber-500"
                whileHover={{ scale: 1.1 }}
              >
                <FaStar className="text-sm" />
                <span className="text-amber-700 dark:text-amber-400 font-bold text-xs">{ins.rating}</span>
              </motion.div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}