import React from "react";
import "../Styles/secondBox.css";

function SecondBox({ wind, humidity, visibility }) {
  return (
    <div id="second-container">
      <div className="wind">
        <h5 className="second-container-heading">Wind</h5>
        <p className="second-container-para">{`${wind} m/h`}</p>
      </div>
      <div className="humidity">
        <h5 className="second-container-heading">Humidity</h5>
        <p className="second-container-para">{`${humidity}%`}</p>
      </div>
      <div className="visibility">
        <h5 className="second-container-heading">Visibility</h5>
        <p className="second-container-para">{`${visibility} km`}</p>
      </div>
    </div>
  );
}

export default SecondBox;
