import React from "react";
import "../Styles/fifthbox.css";
import { ImLeaf } from "react-icons/im";
function FifthBox({ airQuality }) {
  return (
    <div id="fifth-container">
      <div className="air-quality">
        <ImLeaf className="air-icon" />
        <h2 className="air-quality-index">
          Air Quality Index: <span id="index-value">{airQuality}</span>
        </h2>
      </div>
    </div>
  );
}

export default FifthBox;
