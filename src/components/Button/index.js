/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

const ButtonComponent = ({ className, name }) => {
  const classes = className ? className : "";
  return (
    <>
      <Button className={`${classes} tripBtn`}>{name}</Button>
    </>
  );
};
export default ButtonComponent;
