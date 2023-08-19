import React from "react";
import "../scss/container.scss"
import Search from "./Search";
import NoDataAvailable from "./NoDataAvailable";
import WeatherContainer from "./WeatherContainer";
const Container = (props) => {
  return <div class="container">
    <Search />
    {/* <NoDataAvailable /> */}
    <WeatherContainer/>
  </div>;
};

export default Container;
