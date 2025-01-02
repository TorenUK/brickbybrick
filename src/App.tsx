import { GridLayoutMobile, GridlayoutDesktop } from "./components/GridLayout";
import { TestDesktop, TestMobile } from "./components/TestDynamicGrid";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <GridlayoutDesktop />
        {/* <TestDesktop /> */}
      </div>
      <div className="block md:hidden">
        <GridLayoutMobile />
        {/* <TestMobile /> */}
      </div>
    </>
  );
}

export default App;
