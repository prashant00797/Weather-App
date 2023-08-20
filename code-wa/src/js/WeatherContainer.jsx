import React from "react";
import "../scss/weathercontainer.scss";
import { get, head } from "loadsh";
import clear from "../asset/image/clear.png";
import rain from "../asset/image/rain.png";
import snow from "../asset/image/snow.png";
import cloud from "../asset/image/cloud.png";
import haze from "../asset/image/haze.png";
import mist from "../asset/image/mist.png";

const renderWeatherImage = (weather) => {
  let _src;
  const weatherType = get(weather, 'main','');
  switch (weatherType) {
    case "Clear":
      _src = clear;
      break;

    case "Rain":
      _src = rain;
      break;

    case "Snow":
      _src = snow;
      break;

    case "Clouds":
      _src = cloud;
      break;

    case "Haze":
      _src = haze;
      break;
    case "Mist":
      _src = mist;
      break;

    default:
      _src = "";
  }
  return <img className="weather-box__image" src={_src} alt="weather" />;
};

const WeatherContainer = (props) => {
  const { componentData } = props;
  const weather = head(get(componentData, "weather", []));
  const temperature = get(componentData, "main.temp", "");
  return (
    <div className="weather-box">
      {renderWeatherImage(weather)}
      <p className="weather-box__temperature">{parseInt(temperature)}°C</p>
      <p className="weather-box__description">
        {get(weather, "description", "")}
      </p>
    </div>
  );
};

export default WeatherContainer;
