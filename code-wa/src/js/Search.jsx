import React, { useState } from "react";
import "../scss/search.scss";
import { GetWeatherData } from "../service/GetWeatherData";

const handleCityChange = async(city, setComponentData) => {
  const _weatherData = await GetWeatherData(city);
  setComponentData(_weatherData);
  return _weatherData;
};

export const Search = (props) => {
  const{setComponentData} = props;
  const [city, setCity] = useState("");
  return (
    <div className="search-box">
      <i className="fa-solid fa-location-dot search-box__icon"></i>
      <input
        type="text"
        placeholder="Enter your location"
        className="search-box__input"
        onChange={(event) => setCity(event.target.value)}
      />
      {
        <button
          className="fa-solid fa-magnifying-glass search-box__button"
          onClick={() => { handleCityChange(city, setComponentData) }}
        ></button>
      }
    </div>
  );
};

export default Search;
