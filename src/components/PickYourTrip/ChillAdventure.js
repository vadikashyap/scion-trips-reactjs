/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ChillAdventure.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";
import ButtonComponent from "../Button";
import Instagrame from "../../asset/icon/Instagrame";
import Facebook from "../../asset/icon/Facebook";
import Twitter from "../../asset/icon/Twitter";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay]);
const ChillAdventure = ({ data,tripCategory }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [titleTrip, setTitleTrip] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useEffect(() => {
    if (data[activeScreen]) {
      setTitleTrip(data[activeScreen].title);
      setSubtitle(data[activeScreen].subtitle);
    }
  }, [activeScreen,data,tripCategory]);
  // const
  return (
    <div className='container'>
      <div className='row py-5 align-items-center'>
        <div className='col-md-6'>
          <div className='dotsBg'>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              autoplay={{ delay: 3000 }}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              onSlideChange={(e) => setActiveScreen(e.activeIndex)}
              pagination={true}
              className='mySwiper'>
              {data.map((data, i) => (
                <SwiperSlide key={i}>
                  <img src={data.image} alt={data.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='col-md-6'>
          <h1 className="tripTitle">{titleTrip}</h1>
          <p className="tripSubtitle">{subtitle}</p>
          <ButtonComponent name="SEE OUR LATEST OFFER" />

          <div className="sherWrapper">
              <p>SHARE IT:</p>
              <ul>
                <li><Instagrame /></li>
                <li><Facebook /></li> 
                <li><Twitter /></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChillAdventure;
