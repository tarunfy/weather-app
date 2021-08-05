import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import { ReactComponent as SVG } from "../images/ball-triangle.svg";
import { ReactComponent as SVG2 } from "../images/img.svg";
import { ReactComponent as SVG3 } from "../images/404.svg";
import { FiSearch } from "react-icons/fi";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";
import FourthBox from "./FourthBox";
import FifthBox from "./FifthBox";
import { HiHome } from "react-icons/hi";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function Main() {
  const APIkey = "b37cfd76d9484e06bc9170453210108";

  // States:
  const [locationData, setLocationData] = useState({});
  const [location, setLocation] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [locationName, setLocationName] = useState("");
  const [locationNameCountry, setLocationNameCountry] = useState("");
  const [searchImg, setSearchImg] = useState(false);
  const [errorImg, setErrorImg] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherText, setWeatherText] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [temp, setTemp] = useState("");
  const [isDay, setIsDay] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [todayRainChance, setTodayRainChance] = useState("");
  const [tomorrowRainChance, setTomorrowRainChance] = useState("");
  const [airQuality, setAirQuality] = useState("");
  const [todayMaxTemp, setTodayMaxTemp] = useState("");
  const [tomorrowMaxTemp, setTomorrowMaxTemp] = useState("");
  const [todayMinTemp, setTodayMinTemp] = useState("");
  const [tomorrowMinTemp, setTomorrowMinTemp] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      setSearchImg(true);
    }, 2000);
  }, []);

  // Functions:

  const StarterhandleDataReq = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key= b37cfd76d9484e06bc9170453210108&q=${location}&days=5&aqi=yes&alerts=no`
      )
      .then((res) => {
        setLocationNameCountry(res.data.location.country);
        setLocationName(res.data.location.name);
        setSearchImg(false);
        setWeatherIcon(res.data.current.condition.icon);
        setWeatherText(res.data.current.condition.text);
        setFeelsLike(res.data.current.feelslike_c);
        setTemp(res.data.current.temp_c);
        setIsDay(res.data.current.is_day);
        setWind(res.data.current.wind_mph);
        setHumidity(res.data.current.humidity);
        setVisibility(res.data.current.vis_km);
        setSunrise(res.data.forecast.forecastday[0].astro.sunrise);
        setSunset(res.data.forecast.forecastday[0].astro.sunset);
        setTodayRainChance(
          res.data.forecast.forecastday[0].day.daily_chance_of_rain
        );
        setTomorrowRainChance(
          res.data.forecast.forecastday[1].day.daily_chance_of_rain
        );
        setTodayMaxTemp(res.data.forecast.forecastday[0].day.maxtemp_c);
        setTomorrowMaxTemp(res.data.forecast.forecastday[1].day.maxtemp_c);
        setTodayMinTemp(res.data.forecast.forecastday[0].day.mintemp_c);
        setTomorrowMinTemp(res.data.forecast.forecastday[1].day.mintemp_c);
        setAirQuality(res.data.current.air_quality["gb-defra-index"]);
      })
      .catch((err) => {
        setSearchImg(false);
        setErrorImg(true);
        setShowLoader(false);
      });
  };

  const handleErrorClick = () => {
    setErrorImg(false);
    setSearchImg(true);
  };

  const handleHomeClick = () => {
    setSearchImg(true);
  };

  const handleInputClick = () => {
    const inp = document.getElementById("first-location-input");
    inp.setAttribute("placeholder", "");
    let cont = document.getElementById("first-page");
    cont.addEventListener("click", () => {
      const inp = document.getElementById("first-location-input");
      inp.setAttribute("placeholder", "Enter Location");
    });
  };

  return (
    <div id="container">
      {!showLoader && !searchImg && !errorImg ? (
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.2,
            type: "spring",
            mass: 1,
            damping: 5,
            stiffness: 120,
          }}
          id="content"
        >
          <div id="location-name-container">
            <motion.h3
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
              id="location-name"
            >{`${locationName},`}</motion.h3>
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
              id="location-name-country"
            >{`${locationNameCountry}`}</motion.span>
          </div>
          <FirstBox
            weatherIcon={weatherIcon}
            weatherText={weatherText}
            feelsLike={feelsLike}
            temp={temp}
            isDay={isDay}
          />
          <SecondBox wind={wind} humidity={humidity} visibility={visibility} />
          <FourthBox
            todayRainChance={todayRainChance}
            tomorrowRainChance={tomorrowRainChance}
            todayMaxTemp={todayMaxTemp}
            tomorrowMaxTemp={tomorrowMaxTemp}
            todayMinTemp={todayMinTemp}
            tomorrowMinTemp={tomorrowMinTemp}
          />
          {/*<button id="forecast">5-day forecast</button>*/}
          <ThirdBox sunrise={sunrise} sunset={sunset} />
          <FifthBox airQuality={airQuality} />

          <HiHome className="Home" onClick={handleHomeClick} />
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 4, opacity: 0 }}
            transition={{ delay: 5.7 }}
            id="footer"
          >
            <p className="footer-text">
              Coded By <span id="name">Tarun</span>
            </p>
            <div id="social-media">
              <a
                href="https://www.instagram.com/ohitztarun/"
                className="social"
              >
                <FiInstagram />
              </a>
              <a href="https://github.com/tarun2506" className="social">
                <FiGithub />
              </a>
              <a href="https://twitter.com/Tarun44618934" className="social">
                <FiTwitter />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        console.log("rip error")
      )}
      {showLoader && (
        <div className="logo">
          <SVG className="loader" />
        </div>
      )}
      {searchImg && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          id="first-page"
        >
          <div className="searcher">
            <motion.input
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "-100vh", opacity: 0 }}
              transition={{ delay: 1 }}
              type="text"
              id="first-location-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onClick={handleInputClick}
              placeholder="Enter location"
              autoComplete="off"
            />

            <motion.button
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 1.3,
                duration: 0.5,
                type: "easeIn",
              }}
              id="first-get-btn"
              className="btn"
              onClick={StarterhandleDataReq}
            >
              <FiSearch />
            </motion.button>
          </div>
          <motion.div
            drag
            dragTransition={{
              min: 0,
              max: 10,
              bounceDamping: 5,
              bounceStiffness: 200,
            }}
            className="first-logo"
          >
            <SVG2 className="location-svg" />
          </motion.div>
        </motion.div>
      )}
      {errorImg && (
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100vh", opacity: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            mass: 1,
            damping: 5,
            stiffness: 90,
          }}
          id="error-page"
        >
          <motion.div
            drag
            dragTransition={{
              min: 0,
              max: 10,
              bounceDamping: 5,
              bounceStiffness: 200,
            }}
            className="img"
          >
            <SVG3 className="error-svg" />
          </motion.div>
          <p className="error-mssg">Oops! Something went wrong</p>
          <button className="error-btn" onClick={handleErrorClick}>
            Go Home
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Main;
