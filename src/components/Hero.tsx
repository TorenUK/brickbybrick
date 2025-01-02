const Hero = () => {
  return (
    <div className="w-full flex flex-row justify-center sm:justify-start sm:items-start mt-4 md:space-y-0 space-x-2 md:space-x-4">
      <h1 className="tracking-tighter text-xl md:text-4xl">brickbybrick</h1>
      <div className="flex flex-col border-l-[1px] pl-2 ml-4 text-sm md:text-base">
        <h2>design</h2>
        <h2>develop</h2>
        <h2>deliver</h2>
      </div>
    </div>
  );
};

export default Hero;
