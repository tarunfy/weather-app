import React from "react";
import "../Styles/thirdbox.css";
import { FiSunrise, FiSunset } from "react-icons/fi";
function ThirdBox({ sunrise, sunset }) {
  return (
    <div id="third-container">
      <div className="sunrise">
        <FiSunrise className="icon" />
        <h4>{sunrise}</h4>
      </div>
      <div className="sunset">
        <FiSunset className="icon" />
        <h4>{sunset}</h4>
      </div>
    </div>
  );
}

export default ThirdBox;
