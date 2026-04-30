import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ photo }) => {
  const { image, instructor, title, rating } = photo;
  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div>
        <p>{instructor}</p>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="font-semibold text-lg line-clamp-1">{title}</h2>

        <div className="flex justify-between text-gray-500 text-sm">
          <span className="flex items-center gap-1">{rating}</span>
        </div>

        <Link href={`/`}>
          <Button
            variant="outline"
            className="w-full font-semibold group-hover:bg-black group-hover:text-white transition"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
