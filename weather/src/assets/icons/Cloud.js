import React from "react";
import "./Cloud.scss";

const Cloud = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <div className="icon__cloud">
        <div className="icon__cloud_reflect"></div>
        <div className={`icon__cloud_reflect icon__cloud_reflect_2`}></div>
        <svg
          className="icon__cloud_svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          styles="isolation: isolate"
          viewBox="0 0 200 500"
          width="50%"
        >
          <clipPath id="cloud-path">
            <path
              d=" M 146.5 293 C 65.644 293 0 227.356 0 146.5 C 0 65.644 65.644 0 146.5 0 C 205.641 0 256.643 35.12 279.772 85.624 C 293.416 79.445 308.559 76 324.5 76 C 384.383 76 433 124.617 433 184.5 C 433 244.383 384.383 293 324.5 293 L 324.5 293 C 324.5 293 324.5 293 324.5 293 L 146.5 293 Z "
              fill="currentColor"
            />
          </clipPath>
        </svg>
      </div>
      {/* <div className="icon__shadow"></div> */}
    </div>
  );
};

export default Cloud;
