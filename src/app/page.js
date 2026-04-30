import Banner from "@/components/Banner";
import TopInstructors from "@/components/Instructors";
import LearningTips from "@/components/Learning";
import TopCourse from "@/components/TopCourse";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourse></TopCourse>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
