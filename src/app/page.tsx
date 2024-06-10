"use client";
import Carousel from "@/components/homepage/Carousel";
import CourseCard from "@/components/homepage/Coursescard/CourseCard";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeadText from "@/components/homepage/HeadText";
import ImageSlider from "@/components/homepage/SlideImage";
import whous from "@/Assets/who-we-are.png";
import Image from "next/image";
import NewsHome from "@/components/homepage/NewsHome";
import news from "@/Assets/news.png"
import CollegeCard from "@/components/homepage/Coursescard/CollegeCard";
import CarouselCollege from "@/components/homepage/Coursescard/CarouselCollege"
import CollegeImage from "@/Assets/collegeImage.png"

export default function Home() {

  const items = [
    { imageSrc: CollegeImage, name: "Great Lakes Institute of Management", location: "Gurgaon", courses: "MBA, PGDM", examsAccepted: "XYZ, XYZ, XYZ", avgPackage: "₹ 50 Lacs" },
    { imageSrc: CollegeImage, name: "Institute 2", location: "City 2", courses: "Course 2", examsAccepted: "Exam 2", avgPackage: "₹ 40 Lacs" },
    { imageSrc: CollegeImage, name: "Institute 3", location: "City 3", courses: "Course 3", examsAccepted: "Exam 3", avgPackage: "₹ 30 Lacs" },
    { imageSrc: CollegeImage, name: "Institute 4", location: "City 4", courses: "Course 4", examsAccepted: "Exam 4", avgPackage: "₹ 20 Lacs" },
    { imageSrc: CollegeImage, name: "Institute 5", location: "City 5", courses: "Course 5", examsAccepted: "Exam 5", avgPackage: "₹ 10 Lacs" },
    { imageSrc: CollegeImage, name: "Institute 6", location: "City 6", courses: "Course 6", examsAccepted: "Exam 6", avgPackage: "₹ 5 Lacs" },
  ];
  
  return (
    <main className="flex  flex-col items-center justify-between  bg-white ">
      <div className="mt-24 mb-8 w-full">
        <Carousel />
        <div className="FeaturesSection">
          <HeadText textvalue="Gurugaram the lorem city of india" />
          <FeaturesSection />
        </div>
        <div className="CourseCard">
          <HeadText textvalue="Top Courses" />
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
          <HeadText textvalue="Top MNC's" />
          <div className=" ">
            <ImageSlider />
          </div>
        </div>
        <div className="who-we-are bg-themeColor pt-12 pb-12">
          <h1 className="text-center  text-6xl font-black text-white">
            Who we are?
          </h1>
          <div className="flex justify-center items-center gap-20">
            <h2 className=" text-justify text-8xl font-black text-white">
              Your <br />
              Gateway <br />
              to a <br />
              Bright Future
            </h2>
            <div className="relative top-36">
              <Image src={whous} alt="" />
            </div>
          </div>
        </div>
        <div className="Happening in Gurugram mt-40">
          <HeadText className="mb-4" textvalue="See Whats " />
          <HeadText className=" mt-0" textvalue="Happening in Gurugram" />

          <div className="flex flex-wrap gap-4 md:gap-12 justify-center ">
          <NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />

<NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />
<NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />

<NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />

<NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />

<NewsHome
        imageSrc={news} // Use imported image here
        text="Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut.
        Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut."
        link="https://www.youtube.com"
      />
          </div>
         <div className=" pt-8 w-full flex justify-center ">
         <button className="btn btn-warning" color="white">View More</button>
         </div>
        </div>
        <div className="top colleges mt-32" >
          <HeadText textvalue="Top Colleges"/>
          <div className="p-4">
            <CarouselCollege items={items} />
          </div>
        </div>

        <div className="top colleges mt-32" >
          <HeadText textvalue="Top Universities"/>
          <div className="p-4">
            <CarouselCollege items={items} />
          </div>
        </div>
      </div>
    </main>
  );
}
