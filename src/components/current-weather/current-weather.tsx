import React, { useMemo } from "react";
import { Weather } from "../../models/weather.model";
import { titleCase } from "../../utilities/string/string.utilities";

import "./current-weather.css";

export interface CurrentWeatherProps {
  weather?: Weather;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  const CurrentWeatherTemperature: React.FC = useMemo(() => {
    return () => {
      if (weather == null) {
        return null;
      }

      return (
        <span className="current-weather__temperature">
          {Math.round(weather.currentWeatherMoment.temperatureFahrenheit)}&#176;
        </span>
      );
    };
  }, [weather]);

  const CurrentWeatherDescription: React.FC = useMemo(() => {
    return () => {
      if (weather == null) {
        return null;
      }

      return (
        <span className="current-weather__description">
          {titleCase(
            weather.currentWeatherMoment.weatherMomentConditions[0].description
          )}
        </span>
      );
    };
  }, [weather]);

  const CurrentWeatherWind: React.FC = useMemo(() => {
    return () => {
      if (weather == null) {
        return null;
      }

      return (
        <span className="current-weather__wind">
          {Math.round(weather.currentWeatherMoment.windSpeedMph)}mph
        </span>
      );
    };
  }, [weather]);

  return (
    <p className="current-weather">
      <CurrentWeatherTemperature />
      <span className="current-weather__detail-wrapper">
        <CurrentWeatherDescription />
        <CurrentWeatherWind />
      </span>
    </p>
  );
};
