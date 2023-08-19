import React from "react";
import "../scss/container.scss"
import Search from "./Search";
import NoDataAvailable from "./NoDataAvailable";
const Container = (props) => {
  return <div class="container">
    <Search />
    <NoDataAvailable/>
  </div>;
};

export default Container;
