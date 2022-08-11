import React from "react";

export default function Weather() {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <h1>LISBON</h1>
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
            <img src="" alt="" width="80px" className="current-weather-icon" />
            <span className="temperature"> </span>
            <span className="unit"> ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
