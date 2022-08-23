import React from "react";

const WeatherDisplay = ({ cityName, sunrise }) => {
  return (
    <>
      <div>
        Sunrise : {new Date(sunrise * 1000).toLocaleTimeString("fr-FR")}
      </div>
      <div>Station : {cityName}</div>
    </>
  );
};

export default WeatherDisplay;
