import React, { useState } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
// import { useTimer } from "../hooks/useTimer";

//todo
// create 'get quote' form using react hook form
// Required Fields:
// first name, last name, email, phone, [project outline]

const brickStyles = {
  base: "card-wrapper",
  mobile: {
    wrapper: {},
    content: {},
  },
  desktop: {
    wrapper: {
      hero: "col-span-3 sm:col-span-2",
      timer: "hidden lg:block",
      animatedContent:
        "col-start-1 col-span-3 row-span-2 md:col-span-3 md:row-span-3 md:col-start-2 row-start-3",
      whoWeAre: "col-span-3 md:col-span-2 row-start-2",
      whatWeDo: "md:flex col-span-2 col-start-4 row-start-2",
      technologies: "col-start-1 row-start-6 col-span-2",
      getAQuote: "col-start-3 row-start-6 col-span-1",
      cms: "col-start-4 row-start-6 col-span-2",
      footer: "col-start-1 col-span-3 md:row-start-7 md:col-span-5",
    },
    content: {},
  },
  hero: "col-span-3 sm:col-span-2",
  timer: "card-wrapper hidden lg:block",
  animatedContent:
    "card-wrapper col-start-1 col-span-3 row-span-2 md:col-span-3 md:row-span-3 md:col-start-2 row-start-3",
  whoWeAre: "card-wrapper col-span-3 md:col-span-2 row-start-2",
  whatWeDo: "card-wrapper md:flex col-span-2 col-start-4 row-start-2",
  technologies: "card-wrapper col-start-1 row-start-6 col-span-2",
  getAQuote: "card-wrapper col-start-3 row-start-6 col-span-1",
  cms: "card-wrapper col-start-4 row-start-6 col-span-2",
  footer: "card-wrapper col-start-1 col-span-3 md:row-start-7 md:col-span-5",
};

// Utility to calculate dynamic styles
const calculateStyles = (styles = "", active = false) =>
  `${styles} ${active ? "bg-red-500" : ""}`;

// Reusable grid brick component
const GridBrick = ({
  brick,
  index,
  isActive,
  onClick,
}: {
  brick: GridBrick;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}) => (
  <div
    className={calculateStyles(brick.styles, isActive)}
    onClick={() => onClick(index)}
  >
    <div className="card-content">{brick.content}</div>
  </div>
);

type GridBrick = {
  title: string;
  styles?: string;
  colSpan: {
    default: number;
    sm?: number;
    md?: number;
  };
  rowSpan?: number;
  content?: React.JSX.Element | any;
};
// todo: populate with array of tile objects
// object shape:
// abstract styles to main style sheet
// title, styles (col-span, row-span, col-start, row-start, display), content (Form? Animation?, text?),
const gridBricks: GridBrick[] = [
  {
    title: "hero",
    styles: brickStyles.hero,
    colSpan: {
      default: 3,
    },
    content: <Hero />,
  },
  {
    title: "timer",
    styles: brickStyles.timer,
    colSpan: {
      default: 1,
    },
    content: "timer",
  },
  {
    title: "content",
    styles: brickStyles.base,
    colSpan: {
      default: 1,
    },
    content: "creative engineering",
  },
  {
    title: "content",
    styles: brickStyles.base,
    colSpan: {
      default: 1,
    },
    content: "social",
  },
  {
    title: "who we are",
    styles: brickStyles.whoWeAre,
    colSpan: {
      default: 2,
    },
    content: "who we are.",
  },
  {
    title: "content",
    styles: brickStyles.base,
    colSpan: {
      default: 1,
    },
    content: "projects.",
  },
  {
    title: "what we do",
    styles: brickStyles.whatWeDo,
    colSpan: {
      default: 2,
    },
    content: "what we do.",
  },
  {
    title: "content",
    styles: brickStyles.base,
    colSpan: {
      default: 1,
    },
    content: "",
  },
  {
    title: "animated content",
    styles: brickStyles.animatedContent,
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "animated content.",
  },
  {
    title: "content",
    styles: "card-wrapper col-start-1 row-start-4",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "",
  },
  {
    title: "content",
    styles: "card-wrapper col-start-1 row-start-5",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "",
  },
  {
    title: "content",
    styles: "card-wrapper col-start-5 row-start-3",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "",
  },
  {
    title: "content",
    styles: "card-wrapper col-start-5 row-start-4",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "",
  },
  {
    title: "content",
    styles: "card-wrapper col-start-5 row-start-5",
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "",
  },
  {
    title: "technologies",
    styles: brickStyles.technologies,
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "technologies.",
  },
  {
    title: "quote",
    styles: brickStyles.getAQuote,
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "get a quote.",
  },
  {
    title: "cms",
    styles: brickStyles.cms,
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: "cms.",
  },
  {
    title: "footer",
    styles: brickStyles.footer,
    colSpan: {
      default: 3,
    },
    rowSpan: 3,
    content: <Footer />,
  },
];

// export const renderGrid = () => {
//   // piece of state to track which brick has been clicked
//   // temp
//   const [activeBrick, setActiveBrick] = useState<null | number>(null);
//   // temp
//   const handleClick = (index: number) => {
//     setActiveBrick(activeBrick === index ? null : index);
//   };

//   // temp
//   return (
//     <div className="relative h-screen w-screen max-w-[1440px] md:grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-7 gap-2 pt-4 pl-4 pr-4">
//       {gridBricks.map((gridBrick, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           className={
//             gridBrick.styles
//               ? gridBrick.styles
//               : `card-wrapper col-span-${gridBrick.colSpan.default} row-span-${
//                   gridBrick.rowSpan ?? 1
//                 } ${
//                   // dynamically set styles depending on which Brick has been clicked
//                   activeBrick === index ? "m-1" : ""
//                 }`
//           }
//         >
//           <div className="card-content">
//             {gridBrick.content} index:{index}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const TARGET_DATE = new Date(new Date().getFullYear() + 1, 0, 7);

const GridLayout = ({ isMobile = false }) => {
  const [activeBrick, setActiveBrick] = useState<null | number>(null);

  const handleClick = (index: number) =>
    setActiveBrick(activeBrick === index ? null : index);

  const gridClasses = isMobile
    ? "grid grid-cols-3 grid-rows-6 gap-1 p-[0.3rem]"
    : "grid grid-cols-5 grid-rows-7 gap-2 pt-4 pl-4 pr-4";

  // const minutesRemaining = useTimer(TARGET_DATE);

  return (
    <div className={`relative h-screen w-screen max-w-[1440px] ${gridClasses}`}>
      {gridBricks.map((brick, index) => (
        <GridBrick
          key={index}
          brick={brick}
          index={index}
          isActive={activeBrick === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

// return (
//   <div className="relative h-screen w-screen max-w-[1440px] md:grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-7 gap-2 pt-4 pl-4 pr-4">
//     <div className="col-span-3 sm:col-span-2">
//       <Hero />
//     </div>
//     <div className="card-wrapper hidden lg:block ">
//       <div className="card-content flex items-center justify-center flex-wrap text-center">
//         {minutesRemaining}.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-4">
//       <div className="card-content flex items-center justify-center text-center flex-wrap p-2">
//         creative engineering.
//       </div>
//     </div>
//     <div className="card-wrapper">
//       <div className="card-content flex items-center justify-center">
//         social.
//       </div>
//     </div>
//     <div className="card-wrapper col-span-3 md:col-span-2 row-start-2">
//       <div className="card-content flex items-center justify-center">
//         who we are.
//       </div>
//     </div>
//     <div className="card-wrapper md:flex col-span-2 col-start-4 row-start-2">
//       <div className="card-content flex items-center justify-center">
//         what we do.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-3 row-start-2">
//       <div className="card-content flex items-center justify-center">
//         projects.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-1 col-span-3 row-span-2 md:col-span-3 md:row-span-3 md:col-start-2 row-start-3">
//       <div className="card-content flex items-center justify-center">
//         embed animated content.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-1 row-start-3">
//       <div className="card-content">14</div>
//     </div>
//     <div className="card-wrapper col-start-1 row-start-4">
//       <div className="card-content">15</div>
//     </div>
//     <div className="card-wrapper col-start-1 row-start-5">
//       <div className="card-content">16</div>
//     </div>
//     <div className="card-wrapper col-start-5 row-start-3">
//       <div className="card-content">17</div>
//     </div>
//     <div className="card-wrapper col-start-5 row-start-4">
//       <div className="card-content">18</div>
//     </div>
//     <div className="card-wrapper col-start-5 row-start-5">
//       <div className="card-content">19</div>
//     </div>
//     <div className="card-wrapper col-start-1 row-start-6 col-span-2 ">
//       <div className="card-content flex items-center justify-center">
//         technologies.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-3 row-start-6 col-span-1 ">
//       <div className="card-content flex items-center justify-center">
//         get a quote.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-4 row-start-6 col-span-2 ">
//       <div className="card-content flex items-center justify-center">
//         cms.
//       </div>
//     </div>
//     <div className="card-wrapper col-start-1 col-span-3 md:row-start-7 md:col-span-5 ">
//       <div className="card-content flex flex-col justify-end">
//         <Footer />
//       </div>
//     </div>
//   </div>
// );
// return renderGrid();
// };

// const GridLayoutMobile = () => {
//   const minutesRemaining = useTimer(TARGET_DATE);
//   return (
//     <div className="relative h-screen w-screen grid grid-cols-3 grid-rows-6 gap-1 p-[0.3rem]">
//       <div className="col-span-2 flex items-center justify-center w-full">
//         <Hero />
//       </div>
//       <div className="card-wrapper col-span-1">
//         <div className="card-content flex items-center justify-center">
//           social.
//         </div>
//       </div>
//       <div className="card-wrapper col-span-2">
//         <div className="card-content flex items-center justify-center flex-wrap text-center">
//           {minutesRemaining}.
//         </div>
//       </div>
//       <div className="card-wrapper col-span-1">
//         <div className="card-content flex items-center justify-center flex-wrap text-center">
//           creative engineering.
//         </div>
//       </div>
//       <div className="card-wrapper row-start-3 col-span-1">
//         <div className="card-content flex items-center justify-center">
//           who we are.
//         </div>
//       </div>
//       <div className="card-wrapper col-start-2 col-span-2 row-span-2">
//         <div className="card-content flex items-center justify-center">
//           embed animated content.
//         </div>
//       </div>
//       <div className="card-wrapper col-start-1 col-span-1">
//         <div className="card-content flex items-center justify-center">
//           what we do.
//         </div>
//       </div>
//       <div className="card-wrapper col-start-1 col-span-2">
//         <div className="card-content flex items-center justify-center">
//           projects.
//         </div>
//       </div>
//       <div className="card-wrapper col-start-3 col-span-1">
//         <div className="card-content flex items-center justify-center">
//           get a quote.
//         </div>
//       </div>
//       <div className="card-wrapper col-start-1 col-span-3">
//         <div className="card-content grid items-end">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
//   // return renderGrid();
// };

const GridlayoutDesktop = () => <GridLayout isMobile={false} />;
const GridLayoutMobile = () => <GridLayout isMobile={true} />;

export { GridLayoutMobile as TestMobile, GridlayoutDesktop as TestDesktop };
