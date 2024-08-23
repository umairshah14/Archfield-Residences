import MissionVisionBlock from "@/components/mission-vision-block.jsx";
import TwoColHero from "@/components/two-col-hero";
import aboutUsData from "@/json-files/about-us.json";
import missionData from "@/json-files/mission-data.json";


export default function Home() {
  return (
    <main className="relative w-11/12 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-[5.2rem] lg:mt-28 pt-10 ">
      <div className="flex flex-col">
        <TwoColHero data={aboutUsData}/>
        <MissionVisionBlock data={missionData}/>
      </div>
    </main>
  );
}
