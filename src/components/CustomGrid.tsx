import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";

type GridCard = {
  name: string;
  colSpan: {
    default: number;
    sm?: number;
    md?: number;
  };
  rowSpan?: number;
  element?: React.JSX.Element;
};

const gridCards: GridCard[] = [
  {
    name: "hero",
    colSpan: {
      default: 3,
    },
    element: <Hero />,
  },
  {
    name: "content",
    colSpan: {
      default: 1,
    },
  },
  {
    name: "content",
    colSpan: {
      default: 1,
    },
  },
  {
    name: "content",
    colSpan: {
      default: 1,
    },
  },
  {
    name: "who we are",
    colSpan: {
      default: 2,
    },
  },
  {
    name: "content",
    colSpan: {
      default: 1,
    },
  },
  {
    name: "what we do",
    colSpan: {
      default: 2,
    },
  },
  {
    name: "content",
    colSpan: {
      default: 1,
    },
  },
  {
    name: "animated content",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
  },
];

export const renderGrid = () => {
  return (
    <div className="relative h-screen w-screen grid grid-cols-5 grid-rows-7 gap-2 pt-4 pl-4 pr-4">
      {gridCards.map((gridCard, idx) => (
        <div
          key={idx}
          className={`card-wrapper col-span-${
            gridCard.colSpan.default
          } row-span-${gridCard.rowSpan ?? 1}`}
        >
          <div className="card-content">{gridCard.element}</div>
        </div>
      ))}
    </div>
  );
};

const CustomGrid = () => {
  return (
    <div className="relative h-screen w-screen grid grid-cols-5 grid-rows-7 gap-2 pt-4 pl-4 pr-4">
      <div className="col-span-3 sm:col-span-2">
        <Hero />
      </div>
      <div className="card-wrapper">
        <div className="card-content">4</div>
      </div>
      <div className="card-wrapper col-start-4">
        <div className="card-content">5</div>
      </div>
      <div className="card-wrapper col-start-5">
        <div className="card-content">6</div>
      </div>
      <div className="card-wrapper col-span-2 row-start-2">
        <div className="card-content flex items-center justify-center">
          who we are.
        </div>
      </div>
      <div className="card-wrapper col-span-2 col-start-4 row-start-2">
        <div className="card-content flex items-center justify-center">
          what we do.
        </div>
      </div>
      <div className="card-wrapper col-start-3 row-start-2">
        <div className="card-content">12</div>
      </div>
      <div className="card-wrapper col-span-3 row-span-3 col-start-2 row-start-3">
        <div className="card-content flex items-center justify-center">
          animated content.
        </div>
      </div>
      <div className="card-wrapper col-start-1 row-start-3">
        <div className="card-content">14</div>
      </div>
      <div className="card-wrapper col-start-1 row-start-4">
        <div className="card-content">15</div>
      </div>
      <div className="card-wrapper col-start-1 row-start-5">
        <div className="card-content">16</div>
      </div>
      <div className="card-wrapper col-start-5 row-start-3">
        <div className="card-content">17</div>
      </div>
      <div className="card-wrapper col-start-5 row-start-4">
        <div className="card-content">18</div>
      </div>
      <div className="card-wrapper col-start-5 row-start-5">
        <div className="card-content">19</div>
      </div>
      <div className="card-wrapper col-start-1 row-start-6 col-span-2 ">
        <div className="card-content flex items-center justify-center">
          technologies.
        </div>
      </div>
      <div className="card-wrapper col-start-3 row-start-6 col-span-1 ">
        <div className="card-content flex items-center justify-center">
          technologies.
        </div>
      </div>
      <div className="card-wrapper col-start-4 row-start-6 col-span-2 ">
        <div className="card-content flex items-center justify-center">
          technologies.
        </div>
      </div>
      <div className="card-wrapper col-start-1 row-start-7 col-span-5 ">
        <div className="card-content flex flex-col justify-end">
          <Footer />
        </div>
      </div>
    </div>
  );
  // return renderGrid();
};

export default CustomGrid;
