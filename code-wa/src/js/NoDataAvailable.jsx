import React from "react";
import "../scss/nodataavailable.scss";
import noData from "../asset/image/noData.png";

const NoDataAvailable = () => {
  return (
    <div className="no-data">
      <img className="no-data__img" src={noData} />
      <p className="no-data__description">Oops! Invalid location :/</p>
    </div>
  );
};

export default NoDataAvailable;
