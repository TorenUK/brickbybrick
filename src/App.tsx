import { GridLayoutMobile, GridlayoutDesktop } from "./components/GridLayout";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <GridlayoutDesktop />
      </div>
      <div className="block md:hidden">
        <GridLayoutMobile />
      </div>
    </>
  );
}

export default App;
