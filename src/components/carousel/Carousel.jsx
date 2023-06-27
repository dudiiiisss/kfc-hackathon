import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ maxWidth: "100%" }}>
            <img src="https://www.kfc.kg/admin/files/5604.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ maxWidth: "100%" }}>
            <img src="https://www.kfc.kg/admin/files/5564.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ maxWidth: "100%" }}>
            <img src="https://www.kfc.kg/admin/files/5555.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ maxWidth: "100%" }}>
            <img src="https://www.kfc.kg/admin/files/5576.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ maxWidth: "100%" }}>
            <img src="https://www.kfc.kg/admin/files/5571.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
