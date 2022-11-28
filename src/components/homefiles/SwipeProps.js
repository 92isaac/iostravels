import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from "swiper";
import "swiper/css";
import 'swiper/css/virtual';

const SwipeProps = ({ slideImage, location, date }) => {
  const swiper = useSwiper();

  return (
    <div className="bottom mt-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        slidesPerView={0}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        virtual 
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        //   style={{display:'flex'}}
      >
        <SwiperSlide >
          <div>
            <img src={slideImage} alt="" className="img-rel" />
            <div className="overlay">
              <h3>{location}</h3>
              <p>{date}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipeProps;
