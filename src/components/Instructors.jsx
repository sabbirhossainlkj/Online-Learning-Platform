import Image from "next/image";
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Jhankar Mahbub",
    role: "Full Stack Developer",
    rating: 4.9,
    image:
      "https://bootcamp.programming-hero.com/assets/jhankar-mahbub-CxpqyKJU.png",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "UI/UX Designer",
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr1mnxnB6QXDUtY6UO8Zrf0Ew60gSurMdLA&s",
  },
  {
    id: 3,
    name: "John Doe",
    role: "React Expert",
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtLnYEqvhKKHET_JzfYOv5hZNV1cngGuY_A&s",
  },
  {
    id: 4,
    name: "Alex Smith",
    role: "Backend Developer",
    rating: 4.8,
    image:
      "https://excelsm.com/wp-content/uploads/2025/03/speaker-headshot-alex-smith-6.jpg",
  },
];

export default function TopInstructors() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Top Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="rounded-full object-cover border-4 border-indigo-500"
              />
            </div>

            <h3 className="font-bold text-lg">{ins.name}</h3>

            <p className="text-gray-500 text-sm">{ins.role}</p>

            <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700 text-sm">{ins.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
