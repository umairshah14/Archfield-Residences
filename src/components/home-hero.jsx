import Image from "next/image";
import React from "react";
import BlackKitchen from "@/images/black-kitchen.avif";
import BlackStar from "@/images/black-star.svg";

const HomeHero = () => {
  return (
    <div className="flex flex-col text-black gap-6 lg:gap-10 ">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-3">
          <p className="text-xl lg:text-2xl font-trirong pl-2">Say hello, to your</p>
          <p className="font-krona text-4xl sm:text-5xl lg:text-6xl">HOME FROM HOME</p>
        </div>
        <Image
          src={BlackStar}
          alt="Black Star"
          width={1}
          height={1}
          className="w-fit h-fit hidden sm:block"
        />
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-6">
        <div className="w-full lg:w-1/3 flex flex-col gap-8 leading-7">
          <p>
            Welcome to Archfield Residences, your ideal destination for top-tier
            serviced accommodation. Whether you're a guest seeking a comfortable
            stay, a business traveler in need of convenience, or a contractor on
            assignment, we offer the perfect solution tailored to your
            requirements.
          </p>
          <p>
            With our carefully curated properties and dedicated service team,
            experience the epitome of comfort, convenience, and hospitality.
            Your ideal temporary home awaits at Archfield Residences
          </p>
        </div>
        <Image
          src={BlackKitchen}
          alt="Black Kitchen"
          width={528}
          height={390}
          className="w-full lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default HomeHero;
