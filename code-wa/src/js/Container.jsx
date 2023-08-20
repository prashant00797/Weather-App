import React, { useState } from "react";
import "../scss/container.scss";
import Search from "./Search";
import NoDataAvailable from "./NoDataAvailable";
import WeatherContainer from "./WeatherContainer";
import WeatherDetails from "./WeatherDetails";
import { get, isEqual } from "loadsh";

const renderWeatherContainer = (componentData) => {
  return (
    <React.Fragment>
      <WeatherContainer componentData={componentData} />
      <WeatherDetails componentData={componentData} />
    </React.Fragment>
  );
};

const renderView = (status, componentData) => {
  return isEqual(status, true) ? (
    renderWeatherContainer(componentData)
  ) : (
    <NoDataAvailable />
  );
};

const Container = (props) => {
  const [componentData, setComponentData] = useState({});
  const status = isEqual(get(componentData, "cod", 401), 200);
  return (
    <div className="container">
      <Search setComponentData={setComponentData} />
      {renderView(status, componentData)}
    </div>
  );
};

export default Container;
