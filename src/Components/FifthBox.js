import React from "react";
import "../Styles/fifthbox.css";
import { ImLeaf } from "react-icons/im";
import { motion } from "framer-motion";
function FifthBox({ airQuality }) {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      transition={{ delay: 5 }}
      id="fifth-container"
    >
      <div className="air-quality">
        <ImLeaf className="air-icon" />
        <h2 className="air-quality-index">
          Air Quality Index: <span id="index-value">{airQuality}</span>
        </h2>
      </div>
    </motion.div>
  );
}

export default FifthBox;
