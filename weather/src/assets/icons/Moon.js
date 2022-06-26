import React from "react";
import "./Moon.scss";

const Moon = (props) => {
  return (
    <div className={`icon ${props.className}`}>
      <div className="icon__moon"></div>
    </div>
  );
};

export default Moon;
