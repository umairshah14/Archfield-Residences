import FAQSection from "@/components/faqs-section";
import StackedTextBlocks from "@/components/stacked-text-blocks";
import TwoColHero from "@/components/two-col-hero";
import corpHousingData from "@/json-files/corporate-housing.json";
import whyStayWithUsData from "@/json-files/why-stay-with-us.json";
import guestFAQS from "@/json-files/guest-faqs.json";

export default function Home() {
  return (
    <main className="relative w-11/12 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-[5.2rem] lg:mt-28 pt-10 ">
      <div className="flex flex-col">
        <TwoColHero data={corpHousingData} />
        <StackedTextBlocks data={whyStayWithUsData} className='bg-gray-200 text-black' />
        <FAQSection data={guestFAQS} />
      </div>
    </main>
  );
}
