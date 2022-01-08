/** @format */

import React from "react";
import Icon from "../../asset/icon/Icon";
const Thoughts = ({ data }) => {
  const { title, subTitle, name, position, img } = data;

  return (
    <>
      <div className='col-md-6'>
        <div className='thought'>
          <div className='iconWrapper'>
            <Icon />
          </div>
          <div className='containWrapper'>
            <h4>{title}</h4>
            <p>{subTitle}</p>
            <div className='userWrapper'>
              <div>
                <img src={img} alt={name} />
              </div>
              <div>
                <p>{name}</p>
                <p>{position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Thoughts;
