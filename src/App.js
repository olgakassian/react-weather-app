import "./App.css";
import React from "react";
import Form from "./form";
import Weather from "./Weather";
import Forecast from "./Forecast";

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

        <Form />
        <hr />
        <Weather />
        <Forecast />

        <hr />
        <small>
          <a
            href="https://github.com/olgakassian/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by{" "}
          <a href="https://olgakassian.com" target="_blank" rel="noreferrer">
            Olga Kassian
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
