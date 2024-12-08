import React from "react";
import Hero from "../components/Hero";

interface GridLayoutProps {
  children: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-screen grid grid-rows-[1fr,auto] grid-cols-12 gap-4 md:gap-8">
      <div className="col-start-1 col-span-12 p-8">
        <Hero />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 pointer-events-none z-[-1]">
        {Array.from({ length: 6 * 6 }).map((_, idx) => (
          <div key={idx} className="border border-white opacity-5" />
        ))}
      </div>

      {/* Dynamic Content */}
      <main className="col-span-12 flex flex-col items-center justify-center p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black col-span-12 text-white text-center p-4">
        <p>2024 brickbybrick</p>
      </footer>
    </div>
  );
};

export default GridLayout;
