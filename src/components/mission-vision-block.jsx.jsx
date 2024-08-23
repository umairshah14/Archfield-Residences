"use client";

import useInView from "@/hooks/useInView";
import React from "react";
import Image from "next/image";
import BlackStar from "../../public/images/black-star.svg";

const MissionVisionBlock = ({ data }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="bg-slate-200 fill py-12 lg:py-20">
      <div
        ref={ref}
        className={`px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:w-1/2 gap-16">
          <h3 className="text-center lg:text-left text-4xl sm:text-5xl hidden lg:block">
            {data?.missionTitle}
          </h3>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex gap-3 items-center lg:items-start">
              <Image
                src={BlackStar}
                alt="Black Star"
                width={350}
                height={350}
                className="w-20 max-w-fit"
              />
              <h3 className="text-center lg:text-left text-4xl sm:text-5xl lg:hidden">
                {data?.missionTitle}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {data?.missionContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-16">
          <h3 className="text-center lg:text-left text-4xl sm:text-5xl hidden lg:block">
            {data?.visionTitle}
          </h3>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex gap-3 items-center lg:items-start">
              <Image
                src={BlackStar}
                alt="Black Star"
                width={350}
                height={350}
                className="w-20 max-w-fit"
              />
              <h3 className="text-center lg:text-left text-4xl sm:text-5xl lg:hidden">
                {data?.visionTitle}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {data?.visionContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionBlock;
