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

export default function Home() {
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
        <div className="mt-40">
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
        </div>
      </div>
    </main>
  );
}
