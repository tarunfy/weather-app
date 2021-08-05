import React from "react";
import "../Styles/thirdbox.css";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { motion } from "framer-motion";
function ThirdBox({ sunrise, sunset }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 4.5 }}
      id="third-container"
    >
      <div className="sunrise">
        <FiSunrise className="icon" />
        <h4>{sunrise}</h4>
      </div>
      <div className="sunset">
        <FiSunset className="icon" />
        <h4>{sunset}</h4>
      </div>
    </motion.div>
  );
}

export default ThirdBox;
