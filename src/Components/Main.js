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

  return (
    <div id="container">
      {!showLoader && !searchImg && !errorImg ? (
        <div id="content">
          <div id="location-name-container">
            <h3 id="location-name">{`${locationName},`}</h3>
            <span id="location-name-country">{`${locationNameCountry}`}</span>
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
          <button id="forecast">5-day forecast</button>
          <ThirdBox sunrise={sunrise} sunset={sunset} />
        </div>
      ) : (
        console.log("rip error")
      )}
      {showLoader && (
        <div className="logo">
          <SVG className="loader" />
        </div>
      )}
      {searchImg && (
        <div id="first-page">
          <div className="searcher">
            <input
              type="text"
              id="first-location-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              autoComplete="off"
            />

            <button
              id="first-get-btn"
              className="btn"
              onClick={StarterhandleDataReq}
            >
              <FiSearch />
            </button>
          </div>
          <div className="first-logo">
            <SVG2 className="location-svg" />
          </div>
        </div>
      )}
      {errorImg && (
        <div id="error-page">
          <SVG3 className="error-svg" />
          <p className="error-mssg">Oops! Something went wrong</p>
          <button className="error-btn" onClick={handleErrorClick}>
            Go Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
