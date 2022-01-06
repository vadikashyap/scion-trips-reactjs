/** @format */

import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Close from "../../asset/icon/Close";
import ChillAdventure from "./ChillAdventure";
import "./styles.scss";
import img1 from "../../asset/img/chilliadventures1.jpg";
import img2 from "../../asset/img/chilliadventures2.jpg";
import img3 from "../../asset/img/chilliadventures3.jpg";
import img4 from "../../asset/img/chilliadventures4.jpg";
import img5 from "../../asset/img/chilliadventures5.jpg";
const PickYourTrip = () => {
  const [show, setShow] = useState(true);
  const toggelView = () => setShow(!show);

  const tripData = [
    {
      tripCategory: "Chill Adventure",
      data: [
        {
          title: "Chill Adventure",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img1,
        },
        {
          title: "Chill Adventure 123",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img2,
        },
        {
          title: "Chill Adventure 456",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img3,
        },
        {
          title: "Chill Adventure 789",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img4,
        },
        {
          title: "Chill Adventure 000",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img5,
        },
      ],
    },

    {
      tripCategory: "Spooky Times",
      data: [
        {
          title: "Chill Adventure 4512",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img3,
        },
      ],
    },

    {
      tripCategory: "Desert Madness",
      data: [
        {
          title: "Chill Adventure 14585",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img2,
        },
      ],
    },

    {
      tripCategory: "Out in the wild",
      data: [
        {
          title: "Chill Adventure 44521",
          subtitle: `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
          Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.`,
          image: img4,
        },
      ],
    },
  ];

  return (
    <div className='pickYourTripWrapper'>
      <div className='container  pt-4'>
        <div className='pickYourTripTitleWrapper'>
          <h1 onClick={!show && toggelView} className={!show ? "ponter" : ""}>
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
            {tripData.map((data, i) => (
              <Tab
                eventKey={data.tripCategory}
                title={data.tripCategory}
                key={i}>
                <ChillAdventure
                  data={data.data}
                  tripCategory={data.tripCategory}
                />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="aboutWrapper">

      </div>
    </div>
  );
};
export default PickYourTrip;
