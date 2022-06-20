import React from "react";
import Cloud from "./Cloud";
import "./Cloudy.scss";

const Cloudy = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <Cloud className="mini_cloud" />
      <Cloud />
      {/* <div className="icon__shadow"></div> */}
    </div>
  );
};

export default Cloudy;
