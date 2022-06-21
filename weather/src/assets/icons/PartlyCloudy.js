import React from "react";
import Sun from "./Sun";
import Cloud from "./Cloud";
import "./PartlyCloudy.scss";

const PartlyCloudy = (props) => {
  return (
    <div className={`container  ${props.className}`}>
      <Sun />
      <Cloud className="cloud float" />
      {/* <div className="icon__shadow"></div> */}
    </div>
  );
};

export default PartlyCloudy;
