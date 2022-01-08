/** @format */

import React, { useRef, useState } from "react";
const AboutImg = ({data}) => {

    const ref = useRef();
    const [position, setPosition] = useState({
      top: "",
      left: "",
    });
  
    const handleMove = (e) => {
      const x = e.clientX + 20 ;
      const y = e.clientY + 20 ;
      ref.current.top = y;
      ref.current.left = x;
      setPosition({
        top: y,
        left: x,
      });
    };
  
  return (
    <div className='relative' onMouseMove={handleMove} ref={ref}>
      <img src={data.img} alt='' />
      <div
        className='nameWrapper'
        style={{ top: position.top -75, left: position.left - 100 }}>
        <p>
        {data.name}, <span>{data.position}</span>
        </p>
      </div>
    </div>
  );
};
export default AboutImg;
