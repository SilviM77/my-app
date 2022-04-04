import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMappping = {
        "01d": "Clear_Day",
        "01n": "Clear_Night", 
        "02d": "Partly_Cloudy_Day",
        "02n": "Partly_Cloudy_Night", 
        "03d": "Partly_Cloudy_Day",
        "03n": "Partly_Cloudy_Night",
        "04d": "Cloudy",
        "04n": "Cloudy", 
        "09d": "Shower",
        "09n": "Shower", 
        "10d": "Rain",
        "10n": "Rain",
        "11d": "Rain",
        "11n": "Rain",
        "13d": "Snow",
        "13n": "Snow",
        "50d": "Fog",
        "50n": "Fog",
    };

    return (
            <ReactAnimatedWeather
              icon="Clear_Day"
              color="1e1e1e"
              size={52}
              animate={true}
    />
    );
}