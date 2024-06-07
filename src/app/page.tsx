"use client"
import Carousel from "@/components/homepage/Carousel";
import CourseCard from "@/components/homepage/Coursescard/CourseCard";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeadText from "@/components/homepage/HeadText";
import ImageSlider from "@/components/homepage/SlideImage";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  bg-white ">
      <div className="mt-24 mb-8 w-full">
        <Carousel/>
        <div className="FeaturesSection">
          <HeadText textvalue="Gurugaram the lorem city of india"/>
          <FeaturesSection/>
        </div>
        <div className="CourseCard">
          <HeadText textvalue="Top Courses"/>
          <div className="container mx-auto p-4">
      <div className="  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-8 xl:gap-16">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
        </div>
        <div className="top-company">
          <HeadText textvalue="Top MNC's"/>
          <div className=" mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-8">Image Slider</h1>
      <ImageSlider/>
    </div>

        </div>
      </div>
    </main>
  );
}
