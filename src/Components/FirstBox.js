import React from "react";
import "../Styles/firstBox.css";
import bg from "../images/bg-img.png";
function FirstBox({ weatherIcon }) {
  return (
    <div id="weather-container">
      <img src={bg} alt="bg" className="bg-img" />
      <div className="weather-image">
        <img src={weatherIcon} alt="weather-icon" />
        <div className="weather-info">
          <h4>Heavy Rain</h4>
          <p>Morning</p>
        </div>
      </div>
      <div className="temp">
        <h1>29°</h1>
        <p>Feels Like 30°</p>
      </div>
    </div>
  );
}

export default FirstBox;
