import React from 'react'
import "../scss/weathercontainer.scss"

const WeatherContainer = () => {
  return (
    <div className="weather-box">
      <img className="weather-box__image" src="" />
      <p className="weather-box__temperature"></p>
      <p className="weather-box__description"></p>
    </div>
  );
}

export default WeatherContainer