import React, { useState } from "react";
// import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("Lisbon");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-input"
            />
          </div>

          <div className="col-3 p-0">
            <input
              onClick={handleClick}
              type="submit"
              className="btn btn-primary w-100 search-btn"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1> {city} </h1>
            <ul>
              <li>
                <strong>
                  <span className="week-day">, </span>
                  <span className="day-time"> </span> |<span></span>
                </strong>
              </li>
              <li>
                Humidity: <span></span>%
              </li>
              <li>
                Wind: <span></span> Km/h
              </li>
            </ul>
          </div>

          <div className="col-6">
            <div className="float-right">
              <img
                src=""
                alt=""
                width="80px"
                className="current-weather-icon"
              />
              <span className="temperature"> </span>
              <span className="unit"> ºC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
