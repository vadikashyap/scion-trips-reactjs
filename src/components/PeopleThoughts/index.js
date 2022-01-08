/** @format */

import React from "react";
import "./styles.scss";
import userImg from "../../asset/img/image1.png";
import Thoughts from "./Thoughts";
const PeopleThoughts = () => {
  const thoughts = [
    {
      title:
        "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
      subTitle:
        "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      name: "Judy ROSELESS",
      position: " MARKETING HEAD at ROM.",
      img: userImg,
    },
    {
      title:
        "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
      subTitle:
        "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      name: "Judy ROSELESS",
      position: " MARKETING HEAD at ROM.",
      img: userImg,
    },
    {
      title:
        "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
      subTitle:
        "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      name: "Judy ROSELESS",
      position: " MARKETING HEAD at ROM.",
      img: userImg,
    },
    {
      title:
        "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
      subTitle:
        "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      name: "Judy ROSELESS",
      position: " MARKETING HEAD at ROM.",
      img: userImg,
    },
  ];
  return (
    <>
      <div className='container '>
        <div className='peopleThoughtsWrapper'>
          <div className='row'>
            <div className='col-12'>
              <div className='thoughtsTitle'>
                <h1>People’s thoughts</h1>
                <p>SEE WHAT ARE OTHERS SAYING</p>
              </div>
            </div>
            <div className='thoughtsWrapper'>
              <div className='container'>
                <div className='row'>
                  {thoughts.map((data, i) => (
                    <Thoughts data={data} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeopleThoughts;
