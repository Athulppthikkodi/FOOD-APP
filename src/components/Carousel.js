import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="../../images/image1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../images/image3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../images/image2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
