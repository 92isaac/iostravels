import React  from "react";
import "../asset/styles/explore.css";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperdata } from "../asset/database";
import SwipeProps from "./SwipeProps";


const Explore = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div className="explore">
      <h6>Explore</h6>
      <h4>Explore Different Private Trips</h4>
      <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {swiperdata.map((itr)=>(<SwipeProps 
      slideImage={itr.slideImage}
      location={itr.location}
      date={itr.date}
      />))}
</Swiper>
    </div>
  );
};

export default Explore;
