const images = [
  "/assets/logos/amazon-aws.svg",
  "/assets/logos/contentful.svg",
  "/assets/logos/firebase.svg",
  "/assets/logos/shopify.svg",
  "/assets/logos/kirby.svg",
  "/assets/logos/strapi.svg",
  "/assets/logos/wordpress.svg",
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
            className="w-12 h-12 object-contain p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-12 h-12 object-contain p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-12 h-12 object-contain p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-12 h-12 object-contain p-4"
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-12 h-12 object-contain p-4 "
          />
        ))}
        {images.map(({ idx, image }) => (
          <img
            key={`clone-${idx}`}
            src={image}
            alt="logo"
            className="w-12 h-12 object-contain p-4 "
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
