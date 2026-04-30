"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";

const AllCoursePage = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://online-learning-platform-two-vert.vercel.app/data.json",
      );
      const data = await res.json();
      setPhotos(data);
    };

    fetchData();
  }, []);

  const filteredCourses = photos.filter((course) =>
    course.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center mb-4">All Course</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search course..."
          className="border p-2 rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((photo) => (
            <CourseCard key={photo.id} photo={photo} />
          ))
        ) : (
          <p className="text-center col-span-4">No course found</p>
        )}
      </div>
    </div>
  );
};

export default AllCoursePage;
