const WeatherInputFilter = ({
  currentCityName,
  handleClick,
}) => {
  return (
    <>
      <input
        type={"button"}
        value={`Actual city : ${currentCityName} click to change`}
        onClick={() => handleClick(currentCityName)}
      />
    </>
  );
};

export default WeatherInputFilter;
