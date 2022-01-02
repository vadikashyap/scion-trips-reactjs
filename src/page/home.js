/** @format */

import React from "react";
import IntroSection from "../components/IntroSection";
import NavBar from "../components/Navbar";
import "./styles.scss";
const Home = () => {
  return (
    <div className='homeWrapper'>
      <div className='homeStart'>
        <div className='homeNav'>
          <NavBar />
        </div>
        <IntroSection />
      </div>
    </div>
  );
};
export default Home;
