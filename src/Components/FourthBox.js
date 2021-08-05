import React from "react";
import "../Styles/fourthbox.css";
import { IoMdRainy } from "react-icons/io";
import { motion } from "framer-motion";

function FourthBox({
  todayRainChance,
  tomorrowRainChance,
  todayMaxTemp,
  tomorrowMaxTemp,
  todayMinTemp,
  tomorrowMinTemp,
}) {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "100vw", opacity: 0 }}
      transition={{ delay: 4 }}
      id="fourth-container"
    >
      <div className="day">
        <p>Today</p>
        <br />
        <p>Tomorrow</p>
      </div>
      <div className="line"></div>
      <div className="max-min">
        <p>
          {`${todayMaxTemp}°C`}/{`${todayMinTemp}°C`}
        </p>
        <br />
        <p>
          {`${tomorrowMaxTemp}°C`}/{`${tomorrowMinTemp}°C`}
        </p>
      </div>
      <div className="rain-chance">
        <p>
          <span className="rain-icon">
            <IoMdRainy />
          </span>
          {`${todayRainChance}%`}
        </p>
        <br />
        <p>
          <span className="rain-icon">
            <IoMdRainy />
          </span>
          {`${tomorrowRainChance}%`}
        </p>
      </div>
    </motion.div>
  );
}

export default FourthBox;
