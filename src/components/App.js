import "../styles/App.css";
import React, { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  useEffect(() => {
    getForecast("", setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        onSubmit={handleCitySearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
