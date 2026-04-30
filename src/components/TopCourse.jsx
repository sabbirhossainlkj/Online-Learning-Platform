import CourseCard from "./CourseCard";

const TopCourse = async () => {
  const res = await fetch(
    "https://online-learning-platform-two-vert.vercel.app/data.json",
  );
  const photos = await res.json();
  const TopCourse = photos.slice(0, 3);
  return (
    <div className="my-6">
      <h2 className="font-bold text-2xl text-center">
        Top 3 highest-rated courses
      </h2>
      <div className="grid grid-cols-3 gap-4 my-4">
        {TopCourse.map((photo) => {
          return <CourseCard key={photo.id} photo={photo}></CourseCard>;
        })}
      </div>
    </div>
  );
};

export default TopCourse;
