"use client";

import useInView from "@/hooks/useInView";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { Button } from "@headlessui/react";

const StackedTextBlocks = ({ data, className }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div>
      <div
        className={twMerge(
          classNames("bg-[#2B2C32]/95 fill py-20 text-white", className)
        )}
      >
        <div
          ref={ref}
          className={`px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out  ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl ">
            {data.title}
          </h3>
          <div className="lg:w-1/2 flex flex-col gap-16">
            <div className="flex flex-col gap-16">
              {data.blocks.map((block, index) => (
                <div key={index} className="flex gap-6 lg:gap-10 items-start">
                  <Image
                    src={block.imageSrc}
                    alt="White Star"
                    width={1}
                    height={1}
                    className="w-16"
                  />
                  <div className="flex flex-col gap-4">
                    <h6>{block.title}</h6>
                    <p>{block.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {data?.CTA && (
              <Button className="md:w-fit bg-black px-10 py-4 text-white rounded-md w-full">
                {data?.CTA}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedTextBlocks;
