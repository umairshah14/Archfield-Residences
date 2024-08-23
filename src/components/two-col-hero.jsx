import classNames from "classnames";
import React from "react";
import Image from "next/image";
import Bed from "../../public/images/property/bed-whipp.webp";
import { twMerge } from "tailwind-merge";
import BlackStar from "../../public/images/black-star.svg";
import { Button } from "@headlessui/react";

const TwoColHero = ({ data, className }) => {
  return (
    <div
      className={twMerge(
        classNames("flex flex-col lg:flex-row lg:gap-20 pb-10", className)
      )}
    >
      <div className="relative w-full">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          width={400}
          height={250}
          className="w-full min-w-[50%] rounded-[15%] hidden lg:block"
        />
        <Image
          src={BlackStar}
          alt="Black Star"
          width={1}
          height={1}
          className="w-fit h-fit absolute top-20 -left-10 hidden lg:block"
        />
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-center lg:text-left text-4xl sm:text-5xl">
          {data?.title}
        </h1>

        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          width={528}
          height={390}
          className="w-full md:w-2/3 mx-auto rounded-[15%] block lg:hidden"
        />
        <div className="flex flex-col gap-4 lg:w-2/3">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "hidden md:block" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {data?.CTA && (
          <Button className="w-fit bg-black px-8 py-4 text-white rounded-md mx-auto lg:mx-0">
            {data?.CTA}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TwoColHero;
