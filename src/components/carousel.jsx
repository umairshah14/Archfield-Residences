import Image from "next/image";

const Carousel = () => {
  const images = [
    {
      id: 1,
      url: "https://picsum.photos/800/600?random=1", // Random image 1
      alt: "Random Image 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/800/600?random=2", // Random image 2
      alt: "Random Image 2",
    },
    {
      id: 3,
      url: "https://picsum.photos/800/600?random=3", // Random image 3
      alt: "Random Image 3",
    },
  ];

  return (
    <section className="relative m-auto w-full overflow-hidden mask-gradient">
      <div className="animate-infinite-slider flex w-infinite">
        {images.map((image) => (
          <div
            key={image.id}
            className="slide flex w-1/2 items-center justify-evenly"
          >
            <Image
              src={image.url}
              width={800} // Set a fixed width for images
              height={600} // Set a fixed height for images
              alt={image.alt}
            />
          </div>
        ))}
        {images.map((image) => (
          <div
            key={`${image.id}-duplicate`}
            className="slide flex w-1/2 items-center justify-center"
          >
            <Image
              src={image.url}
              width={800}
              height={600}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;