import React from 'react'
import "../scss/search.scss"

const Search = (props) => {
  return (
    <div className="search-box">
      <i className="fa-solid fa-location-dot search-box__icon"></i>
      <input
        type="text"
        placeholder="Enter your location"
        className="search-box__input"
      />
      <button
        className="fa-solid fa-magnifying-glass search-box__button"></button>
    </div>
  );
}

export default Search