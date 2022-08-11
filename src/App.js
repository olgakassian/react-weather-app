import "./App.css";
import React from "react";

function App() {
  return (
    <div className="app">
      <div className="container weather-app">
        <img
          src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
          alt="She Codes Logo"
          width="150px"
          className="shecodes-logo"
        />
        <form action="submit">
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
                type="submit"
                className="btn btn-primary w-100 search-btn"
                value="Search"
              />
            </div>
          </div>
        </form>
        <hr />
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
          <div className="weather-forecast"></div>
        </div>
        <hr />
        <small>
          <a
            href="https://github.com/olgakassian/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Olga Kassian
        </small>
      </div>
    </div>
  );
}

export default App;
