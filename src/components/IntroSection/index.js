/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../asset/icon/Facebook";
import Instagrame from "../../asset/icon/Instagrame";
import Line from "../../asset/icon/Line";
import Twitter from "../../asset/icon/Twitter";

import "./styles.scss";
const IntroSection = () => {
  return (
    <div className='introSectionWrapper'>
      <div className='introSectionText'>
        <h1 className='introTitle'>Night Trips</h1>
        <p className='introSubTitle'>
          <b>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</b>
        </p>
        <p className='introText'>
          Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
          venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida
          sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies.
          Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
        </p>
      </div>
      <div className='actions'>
        <div className='scroolText'>
            <Line />
          <span className="nameRoted">
            SCROLL
          </span>
        </div>
        <ul>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagrame />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default IntroSection;
