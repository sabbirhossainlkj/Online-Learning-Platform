import { FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa";

export default function LearningTips() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
         Learning Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4">
            <FaBookOpen className="text-2xl text-indigo-600" />
            <h3 className="text-xl font-bold">Study Techniques</h3>
          </div>

          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Active Learning
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Revision Practice
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Note Making
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Self Testing
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4">
            <FaClock className="text-2xl text-pink-600" />
            <h3 className="text-xl font-bold">Time Management</h3>
          </div>

          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Daily Routine
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Pomodoro Technique
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Avoid Distractions
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Set Priorities
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
} 