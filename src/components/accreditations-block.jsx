"use client";

import useInView from "@/hooks/useInView";
import React from "react";
import Image from "next/image";
import ICO from "../../public/images/other-logos/ico-white.svg";
import PRS from "../../public/images/other-logos/PRS.webp";

const AccreditationsBlock = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  return (
    <div>
      <div className="bg-[#2B2C32]/95 fill py-20 text-white ">
        <div
          ref={ref}
          className={`relative px-4 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col gap-14 transform transition-all duration-700 ease-in-out  ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl ">
            ACCREDITATIONS
          </h3>
          <div className="flex flex-col gap-8 mx-auto">
            <p className="lg:w-1/2 text-center lg:text-left">
              To bring our vision into reality, we need to make sure we're fully
              compliant with all the necessary bodies. We've joined hands with
              both the ICO and the PRS to ensure that both customers and
              landlords are protected when working with us
            </p>
            <div className="lg:flex-col gap-8 lg:absolute lg:right-40 lg:top-0 hidden lg:flex">
              <Image
                src={ICO}
                alt="ICO "
                width={1}
                height={1}
                className="w-fit"
              />
              <Image
                src={PRS}
                alt="PRS"
                width={200}
                height={100}
                className="w-52"
              />
            </div>
            <div className="justify-center flex items-center lg:hidden gap-8 sm:gap-16">
              <Image
                src={ICO}
                alt="ICO "
                width={1}
                height={1}
                className="w-fit h-16"
              />
              <Image
                src={PRS}
                alt="PRS"
                width={600}
                height={300}
                className="w-40 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsBlock;
