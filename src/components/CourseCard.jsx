import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ photo }) => {
  const { image, instructor, title, rating } = photo;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border">
      <div  className="relative w-full h-[350px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {rating}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="font-bold text-lg line-clamp-1 group-hover:text-indigo-600 transition">
          {title}
        </h2>

        <p className="text-gray-600 text-sm"> {instructor}</p>

        <Link href={`/allcourse/${photo.id}`}>
          <Button className="w-full mt-3 bg-black text-white hover:bg-indigo-600 transition rounded-xl">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
