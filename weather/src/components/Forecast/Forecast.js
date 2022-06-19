import React from "react";
import { iconUrlFromCode } from "../../services/weatherService";

function Forecast({ title, items }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <hr></hr>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {items.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "#aea",
            }}
          >
            <p>{`${item.title}`}</p>
            <img src={iconUrlFromCode(item.icon)} style={{ width: 50 }} />
            <p>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
