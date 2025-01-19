import { GridLayoutMobile, GridlayoutDesktop } from "./components/GridLayout";
// import { TestDesktop, TestMobile } from "./components/TestDynamicGrid";

function App() {
  return (
    <div className="app">
      <div className="absolute w-screen h-screen -z-10 flex flex-row ">
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div>
        {/* <div className="border-[1px] border-dotted h-full md:w-1/6 w-1/4 opacity-10"></div> */}
      </div>
      <div className="hidden md:block">
        <GridlayoutDesktop />
        {/* <TestDesktop /> */}
      </div>
      <div className="block md:hidden">
        <GridLayoutMobile />
        {/* <TestMobile /> */}
      </div>
    </div>
  );
}

export default App;
