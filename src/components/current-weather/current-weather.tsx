import React, { useMemo } from "react";
import { Weather } from "../../models/weather.model";
import { titleCase } from "../../utilities/string/string.utilities";

import "./current-weather.css";
import { ConditionsDisplay } from "../conditions-display/conditions-display";
import { TemperatureUnit } from "../../models/unit";
import { convertFahrenheitToCelsius } from "../../utilities/number/unit-conversion.utilities";

export interface CurrentWeatherProps {
  temperatureUnit: TemperatureUnit;
  weather?: Weather;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  temperatureUnit,
  weather,
}) => {
  const CurrentWeatherConditions: React.FC = useMemo(() => {
    return () => {
      if (weather == null) {
        return null;
      }

      return (
        <ConditionsDisplay
          condition={
            weather.currentWeatherMoment.weatherMomentConditions[0]
              .weatherMomentCondition
          }
          helpTextOverride={
            weather.currentWeatherMoment.weatherMomentConditions[0].description
          }
        />
      );
    };
  }, [weather]);

  const CurrentWeatherTemperature: React.FC = useMemo(() => {
    return () => {
      if (weather == null) {
        return null;
      }

      return (
        <span className="current-weather__temperature">
          {temperatureUnit === TemperatureUnit.CELSIUS
            ? Math.round(
                convertFahrenheitToCelsius(
                  weather.currentWeatherMoment.temperatureFahrenheit
                )
              )
            : Math.round(weather.currentWeatherMoment.temperatureFahrenheit)}
          &#176;
        </span>
      );
    };
  }, [temperatureUnit, weather]);

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
      <CurrentWeatherConditions />
      <span className="current-weather__detail-wrapper">
        <CurrentWeatherDescription />
        <CurrentWeatherWind />
      </span>
    </p>
  );
};
