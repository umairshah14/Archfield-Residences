import Image from "next/image";
import Airbnb from "@/images/ota-logos/airbnb-logo.wine-AE0pR2yb7bS4aX7P.svg";
import BDC from "@/images/ota-logos/booking.com-logo.wine-mePLz5X7QEipbRK0.svg";
import Expedia from "@/images/ota-logos/expedia-logo.wine-mePLz5X7QkS1rJVX.svg";
import VRBO from "@/images/ota-logos/vrbo-logo.svg";
import HomeLike from "@/images/ota-logos/homelike.png";
import TripAdvisor from "@/images/ota-logos/tripadvisor-seeklogo.svg";

const Carousel = () => {
  const logos = [
    { src: Airbnb, alt: "Airbnb Logo" },
    { src: VRBO, alt: "vrbo Logo" },
    { src: BDC, alt: "BDC Logo" },
    { src: Expedia, alt: "Expedia Logo" },
    { src: HomeLike, alt: "HomeLike Logo" },
    { src: TripAdvisor, alt: "TripAdvisor Logo" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <div className="animate-infinite-slider flex w-infinite">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="slide flex w-1/2 items-center justify-evenly px-3 lg:px-6"
            >
              <Image src={logo.src} width={200} height={100} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`${index}-duplicate`}
              className="slide flex w-1/2 items-center justify-center px-3 lg:px-6"
            >
              <Image src={logo.src} width={200} height={100} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
