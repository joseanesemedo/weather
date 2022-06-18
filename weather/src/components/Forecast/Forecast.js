import React from "react";

function Forecast({ title }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <hr></hr>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#aea",
          }}
        >
          <p>04:30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            style={{ width: 50 }}
          />
          <p>22º</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#aea",
          }}
        >
          <p>04:30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            style={{ width: 50 }}
          />
          <p>22º</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#aea",
          }}
        >
          <p>04:30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            style={{ width: 50 }}
          />
          <p>22º</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#aea",
          }}
        >
          <p>04:30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            style={{ width: 50 }}
          />
          <p>22º</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#aea",
          }}
        >
          <p>04:30pm</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            style={{ width: 50 }}
          />
          <p>22º</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
