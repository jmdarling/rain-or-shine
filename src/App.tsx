import React from "react";
import { useCurrentPosition } from "./hooks/use-current-position.hook";
import { useWeather } from "./hooks/use-weather.hook";
import { Heading } from "./components/heading/heading";

import "./App.css";
import { CurrentWeather } from "./components/current-weather/current-weather";
import { DailyWeatherSnapshot } from "./components/daily-weather-snapshot/daily-weather-snapshot";

function App() {
  const currentPosition = useCurrentPosition();
  const weather = useWeather(currentPosition);

  return (
    <main className="app">
      <div className="app__body">
        <Heading className="app__heading" />
        <div className="app__body__current">
          <CurrentWeather weather={weather} />
        </div>
        <ul className="app__body__forecast">
          {weather?.dailyWeatherMoments.map((weatherMoment) => (
            <DailyWeatherSnapshot
              key={weatherMoment.applicableDateTime.toISOString()}
              weatherMoment={weatherMoment}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
