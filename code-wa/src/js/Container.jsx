import React from "react";
import "../scss/container.scss"
import Search from "./Search";
import NoDataAvailable from "./NoDataAvailable";
import WeatherContainer from "./WeatherContainer";
import WeatherDetails from "./WeatherDetails";
const Container = (props) => {
  return <div class="container">
    <Search />
    {/* <NoDataAvailable /> */}
    {/* <WeatherContainer /> */}
    <WeatherDetails/>
  </div>;
};

export default Container;
