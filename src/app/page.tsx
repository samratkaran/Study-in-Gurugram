"use client"
import Carousel from "@/components/homepage/Carousel";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  bg-white ">
      <div className="mt-36 w-full">
        <Carousel/>
      </div>
    </main>
  );
}
