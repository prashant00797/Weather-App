import React from "react";
import "../scss/nodataavailable.scss";

//image
import noData from "../asset/image/noData.png";

export const NoDataAvailable = () => {
  return (
    <div className="no-data">
      <img alt="noData" className="no-data__img" src={noData} />
      <p className="no-data__description">Oops! Invalid location :/</p>
    </div>
  );
};

export default NoDataAvailable;
