import React, { useState, useEffect } from "react";
import WeatherDisplay from "components/WeatherDisplay";
import WeatherInputFilter from "components/WeatherInputFilter";

const WeatherDataContainer = ({}) => {
  const [currentCityName, setCurrentCityName] = useState("Paris");
  const [coords, setCoords] = useState({});

  useEffect(() => {
    getCoord();
  }, []);

  const getCoord = async () => {
    Promise.all(
      [
        { lat: 48.8566, long: 2.3522 },
        { lat: 40.73061, long: -73.935242 },
      ].map(async (city) => {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=f0300142b8077c308a187c9e1e25ec4b`
        );
        return await data.json();
      })
    ).then((coords) => {
      console.log("coords",coords)

      let dataToSaveInState = {};
      coords.map((c) => {
        dataToSaveInState[c.name] = c.sys.sunrise;
      });

      setCoords(dataToSaveInState);
      return 
    });
  };

  const handleClick = (currentCityName) => {
    setCurrentCityName(
      currentCityName === "Paris" ? "Long Island City" : "Paris"
    );
  };

  return (
    <>
      <WeatherDisplay
        cityName={currentCityName}
        sunrise={coords[currentCityName] && coords[currentCityName]}
      />
      <WeatherInputFilter
        handleClick={handleClick}
        currentCityName={currentCityName}
      />
    </>
  );
};

export default WeatherDataContainer;
