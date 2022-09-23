/* eslint-disable no-console */

import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  try {
    const response = await axios.get(endpoint);
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
    setErrorMessage("");
  } catch (err) {
    const { status } = err.response;
    if (status === 404) {
      setErrorMessage("No such town or city, please try again.");
      console.error("Location is not valid", err);
    }
    if (status === 500) {
      setErrorMessage("Oops, server error, please try again later.");
      console.error("Server error", err);
    }
  }
};

export default getForecast;
