"use client";

import useInView from "@/hooks/useInView";
import React, { useEffect, useState } from "react";
import Image from "next/image";



const TextBlockGrid = ({data}) => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });


  return (
    <div>
      <div className="bg-white fill py-20 text-black ">
        <div
          ref={ref}
          className={`px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col gap-14 transform transition-all duration-700 ease-in-out  ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl ">
            {data.title}
          </h3>

          <div className="grid grid-cols-2 gap-6 lg:gap-y-14">
            {data.blocks.map((block, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-6 text-center lg:text-left"
              >
                <Image
                  src={block.imageSrc}
                  alt={block.title}
                  width={64} // Set a reasonable default width
                  height={64} // Set a reasonable default height
                  className="w-16"
                />
                <div className="flex flex-col gap-2">
                  <h6>{block.title}</h6>
                  <p className="lg:w-5/6">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlockGrid;
