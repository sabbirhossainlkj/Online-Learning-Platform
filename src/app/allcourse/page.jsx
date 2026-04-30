import CourseCard from "@/components/CourseCard";
import React from "react";

const AllCoursePage = async () => {
  const res = await fetch(
    "https://online-learning-platform-two-vert.vercel.app/data.json",
  );
  const photos = await res.json();
  return (
    <div>
      <h2>all course page</h2>
      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => {
          return <CourseCard key={photo.id} photo={photo}></CourseCard>;
        })}
      </div>
    </div>
  );
};

export default AllCoursePage;
