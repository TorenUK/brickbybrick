import React, { useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Phone from "./animation/phone";
import HorizontalScroll from "./HorizontalScroll";
import { useTimer } from "../hooks/useTimer";
import { DragCloseModal } from "./Modal";

//todo
// create 'get quote' form using react hook form
// Required Fields:
// first name, last name, email, phone, [project outline]

// brick
// horizontal scrolling bricks with services / technologies
// web, mobile, desktop
// shopify, kirby, strapi, wordpress, contentful, AWS, Firebase

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
// todo: populate with array of tile objectsst
// object shape:
// abstract styles to main style sheet
// title, styles (col-span, row-span, col-start, row-start, display), content (Form? Animation?, text?),
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
  // piece of state to track which tile has been clicked
  // temp
  const [activeTile, setActiveTile] = useState<null | number>(null);
  // temp
  const handleClick = (index: number) => {
    setActiveTile(activeTile === index ? null : index);
  };

  // temp
  return (
    <div className="relative h-screen w-screen grid grid-cols-5 grid-rows-7 gap-2 pt-4 pl-4 pr-4">
      {gridCards.map((gridCard, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`card-wrapper col-span-${
            gridCard.colSpan.default
          } row-span-${gridCard.rowSpan ?? 1} ${
            // dynamically set styles depending on which tile has been clicked
            activeTile === index ? "m-4" : ""
          }`}
        >
          <div className="card-content">{gridCard.element}</div>
        </div>
      ))}
    </div>
  );
};

const TARGET_DATE = new Date(new Date().getFullYear(), 1, 7);

const GridlayoutDesktop = () => {
  const minutesRemaining = useTimer(TARGET_DATE);

  return (
    <div className="relative h-screen w-screen max-w-[1440px] md:grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-7 gap-2 pt-4 pl-4 pr-4">
      <div className="col-span-3 sm:col-span-2">
        <Hero />
      </div>
      <div className="card-wrapper hidden lg:block ">
        <div className="card-content flex items-center justify-center flex-wrap text-center">
          <span className="text-pink-500 bg-[#1a1a1a] px-1 rounded border border-opacity-50 border-[#e5e7eb]">
            {minutesRemaining}
          </span>
        </div>
      </div>
      <div className="card-wrapper col-start-4">
        <div className="card-content flex text-center p-1 space-x-1">
          <div className="h-full flex items-center justify-center w-2/3 rounded bg-blue-500">
            [1]
          </div>
          <div className="h-full flex items-center justify-center w-1/3 rounded bg-orange-500">
            [2]
          </div>
          <div className="h-full flex items-center justify-center w-1/3 rounded bg-orange-500">
            [3]
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-content flex items-center justify-center">
          social
        </div>
      </div>
      <div className="card-wrapper col-span-3 md:col-span-2 row-start-2">
        <div className="card-content flex flex-col items-center justify-center text-center p-1 space-y-1">
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [web]
          </div>
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [mobile]
          </div>
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [desktop]
          </div>
        </div>
      </div>
      <div className="card-wrapper md:flex col-span-2 col-start-4 row-start-2">
        <div className="card-content flex items-center justify-center">
          what we do
        </div>
      </div>
      <div className="card-wrapper col-start-3 row-start-2">
        <div className="card-content flex items-center justify-center">
          projects
        </div>
      </div>
      <div className="card-wrapper col-start-1 col-span-3 row-span-2 md:col-span-3 md:row-span-3 md:col-start-2 row-start-3">
        <div className="card-content flex flex-col items-center justify-center">
          <Phone />
          {/* <span>nought</span> */}
          <span className="m-1 text-sm text-green-500 bg-[#1a1a1a] px-1 rounded border border-opacity-50 border-[#e5e7eb]">
            1.0.0-alpha
          </span>
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
          technologies
        </div>
      </div>
      <div className="card-wrapper col-start-3 row-start-6 col-span-1 ">
        <div className="card-content flex items-center justify-center cursor-pointer">
          <DragCloseModal title="get a quote" />
        </div>
      </div>
      <div className="card-wrapper col-start-4 row-start-6 col-span-2 ">
        <div className="card-content flex flex-col items-center justify-end space-y-1 p-1">
          <div className="w-full h-1/3 bg-pink-500 rounded flex items-center justify-center">
            [services]
          </div>
          <div className="w-full h-1/3 bg-green-500 rounded flex items-center justify-center">
            [integrations]
          </div>
          <HorizontalScroll />
        </div>
      </div>
      <div className="card-wrapper col-start-1 col-span-3 md:row-start-7 md:col-span-5 ">
        <div className="card-content flex flex-col justify-end">
          <div className="w-full h-full flex items-center justify-center">
            privacy policy
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
  // return renderGrid();
};

const GridLayoutMobile = () => {
  const minutesRemaining = useTimer(TARGET_DATE);
  return (
    <div className="relative h-screen w-screen grid grid-cols-3 grid-rows gap-1 p-[0.3rem]">
      <div className="col-span-2 flex items-center justify-center w-full">
        <Hero />
      </div>
      <div className="card-wrapper col-span-1">
        <div className="card-content flex items-center justify-center">
          <span className="text-pink-500 bg-[#1a1a1a] px-1 rounded border border-opacity-50 border-[#e5e7eb]">
            {minutesRemaining}
          </span>
        </div>
      </div>
      <div className="card-wrapper col-span-2">
        <div className="card-content flex flex-col items-center justify-center text-center p-1 space-y-1">
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [web]
          </div>
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [mobile]
          </div>
          <div className="h-1/3 w-full flex items-center justify-center rounded bg-[#1a1a1a]">
            [desktop]
          </div>
        </div>
      </div>
      <div className="card-wrapper col-span-1">
        <div className="card-content flex text-center p-1 space-x-1">
          <div className="h-full flex items-center justify-center w-2/3 rounded bg-blue-500">
            [1]
          </div>
          <div className="h-full flex items-center justify-center w-1/3 rounded bg-orange-500">
            [2]
          </div>
          <div className="h-full flex items-center justify-center w-1/3 rounded bg-orange-500">
            [3]
          </div>
        </div>
      </div>
      <div className="card-wrapper row-start-3 col-span-1">
        <div className="card-content flex items-center justify-center">
          [...]
        </div>
      </div>
      <div className="card-wrapper col-start-2 col-span-2 row-span-3">
        <div className="card-content flex flex-col items-center justify-center">
          <Phone />
          {/* <span>nought</span> */}
          <span className="m-1 text-xs text-green-500 bg-[#1a1a1a] px-1 rounded border border-opacity-50 border-[#e5e7eb]">
            1.0.0-alpha
          </span>
        </div>
      </div>
      <div className="card-wrapper col-start-1 col-span-1 ">
        <div className="card-content flex flex-col items-center justify-end space-y-1 p-1">
          <div className="w-full h-1/3 bg-pink-500 rounded flex items-center justify-center">
            [services]
          </div>
          <div className="w-full h-1/3 bg-green-500 rounded flex items-center justify-center">
            [integrations]
          </div>
          <HorizontalScroll />
        </div>
      </div>
      {
        // todo}
      }
      <div className="card-wrapper col-start-1 col-span-2 hidden">
        <div className="card-content flex items-center justify-center">
          projects
        </div>
      </div>
      <div className="card-wrapper col-start-1 col-span-1">
        <div className="card-content flex items-center justify-center">
          <DragCloseModal title="get a quote" />
        </div>
      </div>
      <div className="card-wrapper col-start-1 col-span-3">
        <div className="card-content flex flex-col justify-end">
          <div className="w-full h-full flex items-center justify-center">
            privacy policy
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
  // return renderGrid();
};

export { GridLayoutMobile, GridlayoutDesktop };
