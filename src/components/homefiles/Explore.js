import React, { useState, useEffect, useRef } from "react";
import { tripsData } from "../asset/database";
import "../asset/styles/explore.css";
import CarOsel from "../carousel/CarOsel";


const Explore = ({first, second}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselReference = useRef(null);
  useInterval(() => {
    setActiveIndex((activeIndex + 1) % 4);
    if (!!carouselReference && !!carouselReference.current) {
      const width = carouselReference.current.offsetWidth;
      // console.log(`width: ${width}`);
      carouselReference.current.scrollTo(width * activeIndex, 0);
    }
  }, 1000);


  // console.log((activeIndex + 1) % 4)
  return (
    <div className="explore my-10">
      <h6 className="text-red-500 text-sm font-black">Explore</h6>
      <h4 className="font-black">{first} <span className="block">{second}</span></h4>

      <div className="text-center overflow-hidden mt-4">
      <div
        ref={carouselReference}
        className="flex overflow-x-hidden snap-x scroll-smooth h-full "
      >
        <div className="flex h-80 ">
          {tripsData.map((itr)=>(<CarOsel 
          key={itr.slideImage}
          slideImage={itr.slideImage}
          location = {itr.location}
          date = {itr.date}
          />))}
        </div>
      </div>
    </div>

    </div>
  );
};


export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
    // console.log(`savedCallback.current: ${savedCallback.current}`)
    // console.log(`callback: ${callback}`)
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
export default Explore;
