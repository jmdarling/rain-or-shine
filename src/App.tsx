import React, { useCallback, useState } from "react";
import { useCurrentPosition } from "./hooks/use-current-position.hook";
import { useWeather } from "./hooks/use-weather.hook";
import { Heading } from "./components/heading/heading";

import "./App.css";
import { CurrentWeather } from "./components/current-weather/current-weather";
import { DailyWeatherSnapshot } from "./components/daily-weather-snapshot/daily-weather-snapshot";
import { Clouds } from "./components/clouds/clouds";
import { TemperatureUnitToggle } from "./components/temperature-unit-toggle/temperature-unit-toggle";
import { TemperatureUnit } from "./models/unit";

function App() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    TemperatureUnit.FAHRENHEIT
  );

  const currentPosition = useCurrentPosition();
  const weather = useWeather(currentPosition);

  const onTemperatureUnitToggle = useCallback(() => {
    setTemperatureUnit(
      temperatureUnit === TemperatureUnit.CELSIUS
        ? TemperatureUnit.FAHRENHEIT
        : TemperatureUnit.CELSIUS
    );
  }, [temperatureUnit, setTemperatureUnit]);

  return (
    <main className="app">
      <Clouds />
      <div className="app__body">
        <Heading className="app__heading" />
        <div className="app__body__current">
          <div className="app__body__current__content">
            <CurrentWeather
              temperatureUnit={temperatureUnit}
              weather={weather}
            />
            <TemperatureUnitToggle
              onToggle={onTemperatureUnitToggle}
              value={temperatureUnit}
            />
          </div>
        </div>
        <ul className="app__body__forecast">
          {weather?.dailyWeatherMoments.map((weatherMoment) => (
            <DailyWeatherSnapshot
              key={weatherMoment.applicableDateTime.toISOString()}
              temperatureUnit={temperatureUnit}
              weatherMoment={weatherMoment}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
