'use client'

import React from "react";
import Carousel from "./carousel";
import useInView from "@/hooks/useInView";

const CarouselSection = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-in-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-gray-100 fill pt-10">
        <div className="px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center px-4">
            <h2 className="text-3xl sm:text-5xl font-trirong">
              {" "}
              AS FEATURED ON
            </h2>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
