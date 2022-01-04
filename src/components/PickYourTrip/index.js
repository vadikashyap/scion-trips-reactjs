/** @format */

import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Close from "../../asset/icon/Close";
import ChillAdventure from "./ChillAdventure";
import "./styles.scss";
const PickYourTrip = () => {
  const [show, setShow] = useState(true);
  const toggelView = () => setShow(!show);

  return (
    <div className='pickYourTripWrapper'>
      <div className='container  pt-4'>
        <div className='pickYourTripTitleWrapper'>
          <h1 onClick={!show && toggelView} className={!show && "ponter"}>
            Pick your trip
          </h1>
          {show && (
            <>
              <Close onClick={toggelView} className='ponter' />
              <p className='pickYourTripSubtitle'>
                Our team put together some trips to you to discover, feel free
                to discover each of them.
              </p>{" "}
            </>
          )}
        </div>
        <div className='tabWrapper'>
          <Tabs
            defaultActiveKey='Chill Adventure'
            id='uncontrolled-tab-example'
            className='mb-3 tripTab mt-5'>
            <Tab eventKey='Chill Adventure' title='Chill Adventure'>
              <ChillAdventure />
            </Tab>
            <Tab eventKey='Spooky Times' title='Spooky Times'>
              wefl;welfl;qmlsd
            </Tab>

            <Tab eventKey='Desert Madness' title='Desert Madness'>
              Desert Madness
            </Tab>
            <Tab eventKey='Out in the wild' title='Out in the wild'>
              wefl;welfl;qmlsd Out in the wild
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default PickYourTrip;
