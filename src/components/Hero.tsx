const Hero = () => {
  return (
    <div className="w-screen flex flex-col md:flex-row justify-start items-start m-4 space-y-4 md:space-y-0 md:space-x-4">
      <h1 className="tracking-tighter text-2xl md:text-4xl">brickbybrick</h1>
      <div className="flex flex-col border-l-2 pl-2 ml-4">
        <h2 className="text-l">design.</h2>
        <h2 className="text-l">develop.</h2>
        <h2 className="text-l">deliver.</h2>
      </div>
    </div>
  );
};

export default Hero;
