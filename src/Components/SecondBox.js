import React from "react";
import "../Styles/secondBox.css";
import { motion } from "framer-motion";

function SecondBox({ wind, humidity, visibility }) {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "-100vw", opacity: 0 }}
      transition={{ delay: 3 }}
      id="second-container"
    >
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
    </motion.div>
  );
}

export default SecondBox;
