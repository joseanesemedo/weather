import React from "react";
import Cloud from "./Cloud";

const Cloudy = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <Cloud className="mini_cloud" />
      <Cloud className="cloud" />

      <div className="icon__shadow"></div>
    </div>
  );
};

export default Cloudy;
