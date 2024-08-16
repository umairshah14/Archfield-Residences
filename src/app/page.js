import CarouselSection from "@/components/carousel-section";
import HomeHero from "@/components/home-hero";

export default function Home() {
  return (
    <main className="relative w-11/12 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-[5.2rem] lg:mt-28">
      <div className="md:mx-14 xl:mx-32 py-10 flex flex-col gap-16">
        <HomeHero/>
        <CarouselSection/>
      </div>
    </main>
  );
}
