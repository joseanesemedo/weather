import React from "react";
import "./Sun.scss";

const Sun = (props) => {
  return (
    <div className={`icon ${props.className}`}>
      <div className="icon__sun">
        <div className="icon__sun_lights">
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
          <div className="icon__sun_light"></div>
        </div>
      </div>
    </div>
  );
};

export default Sun;
