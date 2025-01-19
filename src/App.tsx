import { GridLayoutMobile, GridlayoutDesktop } from "./components/GridLayout";
// import { TestDesktop, TestMobile } from "./components/TestDynamicGrid";

function App() {
  const renderBackgroundGrid = () => {
    const gridCount = 7;
    return Array.from({ length: gridCount }, (_, index) => (
      <div
        key={index}
        className="border-x-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-5"
      ></div>
    ));
  };

  return (
    <div className="app">
      {/* Background grid */}
      <div className="absolute w-screen h-screen -z-10 flex flex-row">
        {renderBackgroundGrid()}
      </div>

      {/* Layout rendering based on screen size */}
      <div className="hidden md:block">
        <GridlayoutDesktop />
      </div>
      <div className="block md:hidden">
        <GridLayoutMobile />
      </div>
    </div>
  );
}

export default App;
