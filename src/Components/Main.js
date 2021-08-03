import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import { ReactComponent as SVG } from "../images/ball-triangle.svg";
import { ReactComponent as SVG2 } from "../images/img.svg";
import { ReactComponent as SVG3 } from "../images/404.svg";
import { FiSearch } from "react-icons/fi";
import FirstBox from "./FirstBox";

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
        `http://api.weatherapi.com/v1/current.json?key= b37cfd76d9484e06bc9170453210108&q=${location}&aqi=yes`
      )
      .then((res) => {
        setLocationNameCountry(res.data.location.country);
        setLocationName(res.data.location.name);
        setSearchImg(false);
        setWeatherIcon(res.data.current.condition.icon);
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
          <FirstBox weatherIcon={weatherIcon} />
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
