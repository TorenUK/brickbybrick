import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="grid grid-white grid-rows-[auto,1fr,auto] grid-cols-artifact md:grid-cols-12 
      min-h-screen max-w-screen max-h-screen overflow-hidden"
    >
      {/* Main Content */}
      <main className="grid-white row-start-2 col-span-full md:col-span-10 md:col-start-2 p-4">
        {children}
      </main>
      {/* Footer */}
      <footer className="grid-white row-start-3 col-span-full bg-[#000000] text-white p-4 text-center">
        <p>2024 brickbybrick</p>
      </footer>
    </div>
  );
};

export default Layout;
