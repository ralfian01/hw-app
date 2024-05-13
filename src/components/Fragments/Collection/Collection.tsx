import Slide from "@components/Elements/Slide/Slide";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/assets/img/collection-1.png",
    "/assets/img/collection-2.png",
    "/assets/img/collection-3.png",
    "/assets/img/collection-4.png",
    "/assets/img/collection-5.png",
    "/assets/img/collection-6.png"
  ];

  const arrowLeft = () => {
    setCurrent(current === 0 ? 1 : 1);
  };
  const arrowRight = () => {
    setCurrent(current === 0 ? images.length : 6);
  };
  const arrowCenter = () => {
    if (current === 1 || current === 0) {
      setCurrent(4);
    } else {
      setCurrent(3);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="md:py-20 w-[80%] py-10">
        <h1 className="text-dark text-center md:my-10 font-alex-brush font-semibold text-3xl drop-shadow">
          Our Wedding Collection
        </h1>
        <div className="flex justify-center items-center my-2">
          <div className="w-full h-72">
            <Slide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
