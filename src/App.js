import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
    Weather App
    <Weather  defaultCity="New York"/>
  <footer>
    This project was created by{" "}
  <a href="https://github.com/SilviM77/my-react-weather-app"
  target="_blank"
  rel="noopener noreferrer"
  > 
  Silvia Marconi 
  </a>{" "}
  and is{" "}
  <a 
  href="https://github.com/SilviM77/my-react-weather-app"
  target="_blank"
  rel="noopener noreferrer"
  >
    open-sourced on GitHub
  </a>{" "}
  and{" "}
  <a
  href="https://github.com/SilviM77/my-react-weather-app"
  target="_blank"
  rel="noopener noreferrer"
  >
  hosted on Netlify
  </a>
  </footer>
    </div>
    </div>
    );
}

