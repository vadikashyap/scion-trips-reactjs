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
import ButtonComponent from "../Button";
import Image1 from "../../asset/img/men1.png";
import Image2 from "../../asset/img/men2.png";
import Image3 from "../../asset/img/men3.png";
import Image4 from "../../asset/img/men4.png";
import AboutImg from "./AboutImg";
const PickYourTrip = () => {
  const [show, setShow] = useState(true);
  const toggelView = () => setShow(!show);
  const user = [
    { name: "MARTIN JACK", img: Image1, position: "ceo" },
    { name: "John smith", img: Image2, position: "devloper" },
    { name: "Debra D. Taylor", img: Image3, position: "HR" },
    { name: "Donald J. King", img: Image4, position: "ceo" },
  ];
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
      <div className='container  pt-5'>
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
      <div className='aboutWrapper'>
        <div className='container pt-5'>
          <div className='row pt-5'>
            <div className='col-md-5 pt-5'>
              <h1>About Us</h1>
              <p>We’re a team of four passioned people.</p>
              <p>
                We’re ready to take the world by storm and let you find new
                travel opportunities.
              </p>
              <p>
                Our everyday task is to make sure that you satisfied with the
                services and products that we provide.
              </p>
              <p>With 💖 from Amsterdam, Netherlands.</p>
              <ButtonComponent name='READ MORE ABOUT US' />
            </div>
            <div className='col-md-7'>
              <div className='aboutImage'>
                {user.map((data, i) => (
                  <AboutImg key={i} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PickYourTrip;
