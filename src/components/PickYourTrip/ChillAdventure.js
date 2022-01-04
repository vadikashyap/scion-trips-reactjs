/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ChillAdventure.scss";
import img1 from "../../asset/img/chilliadventures1.jpg";
import img2 from "../../asset/img/chilliadventures2.jpg";
import img3 from "../../asset/img/chilliadventures3.jpg";
import img4 from "../../asset/img/chilliadventures4.jpg";
import img5 from "../../asset/img/chilliadventures5.jpg";
import sliderbg from "../../asset/img/dots.png"

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);
const ChillAdventure = () => {
  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-6'>
          <div className='dotsBg'>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              className='mySwiper'>
              <SwiperSlide>
                <img src={img1} alt='chilliadventures' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt='chilliadventures' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt='chilliadventures' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt='chilliadventures' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt='chilliadventures' />
              </SwiperSlide>
            </Swiper>
            {/* <img src={sliderbg} className='dostBg' alt="sliderBg"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChillAdventure;
