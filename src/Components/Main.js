import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import svg, { ReactComponent as SVG } from "../images/ball-triangle.svg";
import svgg, { ReactComponent as SVG2 } from "../images/img.svg";
import { FiSearch } from "react-icons/fi";

function Main() {
  const APIkey = "b37cfd76d9484e06bc9170453210108";

  // States:
  const [locationData, setLocationData] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  const [locationName, setLocationName] = useState("");
  const [locationNameCountry, setLocationNameCountry] = useState("");
  const [searchImg, setSearchImg] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key= b37cfd76d9484e06bc9170453210108&q=Noida&aqi=yes`
      )
      .then((res) => {
        setTimeout(() => {
          setShowLoader(false);
          setSearchImg(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Functions:
  const handleDataReq = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key= b37cfd76d9484e06bc9170453210108&q=${locationName}&aqi=yes`
      )
      .then((res) => {
        setLocationName(res.data.location.name);
        setLocationNameCountry(res.data.location.country);
        setLocationData(res.data);
        console.log(locationName);
        console.log(locationNameCountry);
        console.log(locationData);
      });
  };

  const StarterhandleDataReq = () => {
    const firstInputElement = document.getElementById("first-location-input");
    setLocationName(firstInputElement.value);
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key= b37cfd76d9484e06bc9170453210108&q=${locationName}&aqi=yes`
      )
      .then((res) => {
        setLocationNameCountry(res.data.location.country);
        setSearchImg(false);
      });
  };

  return (
    <div id="container">
      {!showLoader && !searchImg ? (
        <div id="content">
          <div id="location-name-container">
            <h3 id="location-name">{`${locationName},`}</h3>
            <span id="location-name-country">{`${locationNameCountry}`}</span>
          </div>
          <div id="input-location">
            <input
              type="text"
              id="location-input"
              placeholder="Enter location"
              autoComplete="off"
            />
            <button id="get-btn" className="btn" onClick={handleDataReq}>
              <FiSearch />
            </button>
          </div>
        </div>
      ) : (
        console.log("gg")
      )}
      {showLoader && (
        <div className="logo">
          <SVG className="loader" />
        </div>
      )}
      {searchImg && (
        <div id="first-page">
          <input
            type="text"
            id="first-location-input"
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
          <div className="first-logo">
            <SVG2 className="location-svg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
