import Image from "next/image";
import { FaClock, FaLayerGroup, FaStar } from "react-icons/fa";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://online-learning-platform-two-vert.vercel.app/data.json",
  );
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  const {
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    image,
    category,
  } = photo;
  return (
    <div className="max-w-5xl w-6/12 my-10 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        <div className="relative w-full h-[500px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs bg-indigo-600 text-white rounded-full shadow">
              {category}
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full text-sm shadow">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{rating}</span>
          </div>

          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-700 text-sm">
             Instructor: <span className="font-medium">{instructor}</span>
          </p>

          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaClock /> {duration}
            </span>

            <span className="flex items-center gap-2">
              <FaLayerGroup /> {level}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
