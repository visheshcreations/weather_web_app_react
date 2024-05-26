import React from "react";
import clearImg from "../assets/clear.png";
import cloudsImg from "../assets/clouds.png";
import drizzleImg from "../assets/drizzle.png";
import humidityImg from "../assets/humidity.png";
import mistImg from "../assets/mist.png";
import rainImg from "../assets/rain.png";
import snowImg from "../assets/snow.png";
import windspeedImg from "../assets/windspeed.png";

const weatherImages = {
  Clear: clearImg,
  Clouds: cloudsImg,
  Drizzle: drizzleImg,
  Mist: mistImg,
  Rain: rainImg,
  Snow: snowImg,
};

const ResultContainer = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="weather">
      <div className="flex justify-center my-4">
        <img
          className="weather-icon h-48"
          src={weatherImages[data.weather[0].main]}
        />
      </div>
      <span className="temp text-4xl font-semibold">{`${~~data.main
        .temp} °C | ${(~~data.main.temp * 9) / 5 + 32} °F`}</span>
      <br />
      <span className="city text-xl">{data.name}</span>
      <div className="deatils flex justify-between md:px-3 mt-10">
        <div className="humidity flex items-center">
          <img className="md:h-16 h-12" src={humidityImg} alt="humidity" />
          <div className="mx-3">
            <span className="humiditys">{data.main.humidity}%</span>
            <br />
            <span>Humidity</span>
          </div>
        </div>
        <div className="windspeed flex items-center">
          <img className="md:h-16 h-12" src={windspeedImg} alt="windspeed" />
          <div className="mx-3">
            <span className="windspeeds">{data.wind.speed}Km/h</span>
            <br />
            <span>Windspeed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
