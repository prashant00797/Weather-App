import React from 'react'
import "../scss/weatherdetails.scss"

const WeatherDetails = () => {
  return (
    <div className="weather-details">
      <div className="weather-details__humidity">
        <i className="fa-solid fa-water weather-details__humidity__icon"></i>
        <div className="weather-details__humidity__textWrapper">
          <span className="weather-details__humidity__textWrapper__text"></span>
          <p className="weather-details__humidity__textWrapper__label">
            Humidity
          </p>
        </div>
      </div>
      <div className="weather-details__wind">
        <i className="fa-solid fa-wind weather-details__wind__icon "></i>
        <div className="weather-details__wind__textWrapper">
          <span className="weather-details__wind__textWrapper__text"></span>
          <p className='className="weather-details__wind__textWrapper__label'>
            Wind Speed
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails