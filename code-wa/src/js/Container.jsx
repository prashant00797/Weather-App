import React, { useState } from "react";
import "../scss/container.scss";

//components
import Search from "./Search";
import NoDataAvailable from "./NoDataAvailable";
import WeatherContainer from "./WeatherContainer";
import WeatherDetails from "./WeatherDetails";

//local dependencies
import { get, isEqual } from "loadsh";
import classNames from "classnames";

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

const Container = () => {
  const [firstTimeLoad, setFirstTimeLoad] = useState(false);
  const [componentData, setComponentData] = useState({});
  const status = isEqual(get(componentData, "cod", 404), 200);
  const containerClassname = classNames("container", {
    "container--expand": firstTimeLoad === true,
  });
  return (
    <div className={containerClassname}>
      <Search
        setComponentData={setComponentData}
        setFirstTimeLoad={setFirstTimeLoad}
      />
      {firstTimeLoad && renderView(status, componentData)}
    </div>
  );
};

export default Container;
