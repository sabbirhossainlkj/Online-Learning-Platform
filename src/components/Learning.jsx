'use client'
import { motion } from "framer-motion";
import { FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa";

export default function LearningTips() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] } 
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      
      <motion.h2 
        className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-gray-800 dark:text-white"
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Learning Tips
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        <motion.div 
          className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-8 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-300 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ 
            y: -8, 
            scale: 1.01,
            rotateX: 1, 
            rotateY: -1 
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-2xl dark:bg-indigo-950/50 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <FaBookOpen className="text-2xl" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white">Study Techniques</h3>
          </div>

          <motion.ul 
            className="space-y-4 text-gray-600 dark:text-gray-300 relative z-10"
            variants={containerVariants}
          >
            {["Active Learning", "Revision Practice", "Note Making", "Self Testing"].map((item, idx) => (
              <motion.li key={idx} className="flex items-center gap-3 font-medium" variants={listItemVariants}>
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>


        <motion.div 
          className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-8 hover:shadow-[0_20px_40px_rgba(236,72,153,0.1)] transition-all duration-300 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ 
            y: -8, 
            scale: 1.01,
            rotateX: 1, 
            rotateY: 1 
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3.5 bg-pink-50 text-pink-600 rounded-2xl dark:bg-pink-950/50 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white">Time Management</h3>
          </div>

          <motion.ul 
            className="space-y-4 text-gray-600 dark:text-gray-300 relative z-10"
            variants={containerVariants}
          >
            {["Daily Routine", "Pomodoro Technique", "Avoid Distractions", "Set Priorities"].map((item, idx) => (
              <motion.li key={idx} className="flex items-center gap-3 font-medium" variants={listItemVariants}>
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </motion.div>
    </section>
  );
}