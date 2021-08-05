import React from "react";
import "../Styles/firstBox.css";
import bg from "../images/bg-img.png";
import { motion } from "framer-motion";
function FirstBox({ weatherIcon, weatherText, feelsLike, temp, isDay }) {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "100vw", opacity: 0 }}
      transition={{ delay: 2 }}
      id="weather-container"
    >
      <img src={bg} alt="bg" className="bg-img" />
      <div className="weather-image">
        <img src={weatherIcon} alt="weather-icon" />
        <div className="weather-info">
          <h4>{weatherText}</h4>
          <p>{isDay ? "Day" : "Night"}</p>
        </div>
      </div>
      <div className="temp">
        <h1>{`${temp}°`}</h1>
        <p>Feels Like {`${feelsLike}°`}</p>
      </div>
    </motion.div>
  );
}

export default FirstBox;
