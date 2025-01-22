const images = [
  "/assets/logos/amazon-aws.svg",
  "/assets/logos/contentful.svg",
  "/assets/logos/firebase.svg",
  "/assets/logos/shopify.svg",
  "/assets/logos/kirby.svg",
  "/assets/logos/strapi.svg",
  "/assets/logos/wordpress.svg",
  "/assets/logos/apple.svg",
  "/assets/logos/android-os.svg",
].map((image, idx) => ({
  idx,
  image,
}));

const HorizontalScroll = () => {
  return (
    <div className="scroll-container w-full h-1/3 rounded bg-white">
      <div className="flex animate-horizontal-scroll">
        {images.map(({ idx, image }) => (
          <img
            key={idx}
            src={image}
            alt="logo"
            className="w-8 h-9 md:h-14 md:w-14 object-contain p-2 md:p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-8 h-9 md:h-14 md:w-14 object-contain p-2 md:p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-8 h-9 md:h-14 md:w-14 object-contain p-2 md:p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-8 h-9 md:h-14 md:w-14 object-contain p-2 md:p-4"
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-8 h-9 md:h-14 md:w-14 object-contain p-2 md:p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-10 h-10 md:h-14 md:w-14 object-contain p-2 md:p-4 "
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
