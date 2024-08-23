import AccreditationsBlock from "@/components/accreditations-block";
import CarouselSection from "@/components/carousel-section";
import HomeHero from "@/components/home-hero";
import StackedTextBlocks from "@/components/stacked-text-blocks";
import TextBlockGrid from "@/components/text-block-grid";
import whatWeOfferData from "@/json-files/what-we-offer-data.json";
import whyChooseUs from "@/json-files/why-choose-us.json";

export default function Home() {
  return (
    <main className="relative w-11/12 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-[5.2rem] lg:mt-28 pt-10 ">
      <div className="flex flex-col">
        <HomeHero />
        <CarouselSection />
        <StackedTextBlocks data={whatWeOfferData}/>
        <TextBlockGrid data={whyChooseUs}/>
        <AccreditationsBlock />
      </div>
    </main>
  );
}
