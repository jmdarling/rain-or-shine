import React, { useMemo } from "react";
import { WeatherMoment } from "../../models/weather.model";
import { getDayNameFromDayIndex } from "../../utilities/date/date-format.utilities";

import "./daily-weather-snapshot.css";
import { ConditionsDisplay } from "../conditions-display/conditions-display";

export interface DailyWeatherSnapshotProps {
  weatherMoment: WeatherMoment;
}

export const DailyWeatherSnapshot: React.FC<DailyWeatherSnapshotProps> = ({
  weatherMoment,
}) => {
  const Day: React.FC = useMemo(() => {
    return () => {
      if (weatherMoment == null) {
        return null;
      }

      return (
        <span className="daily-weather-snapshot__day">
          {getDayNameFromDayIndex(
            weatherMoment.applicableDateTime.getDay(),
            true
          )}
        </span>
      );
    };
  }, [weatherMoment]);

  const Conditions: React.FC = useMemo(() => {
    return () => {
      if (weatherMoment == null) {
        return null;
      }

      return (
        <ConditionsDisplay
          className="daily-weather-snapshot__conditions-display"
          condition={
            weatherMoment.weatherMomentConditions[0].weatherMomentCondition
          }
          helpTextOverride={
            weatherMoment.weatherMomentConditions[0].description
          }
        />
      );
    };
  }, [weatherMoment]);

  const Temperature: React.FC = useMemo(() => {
    return () => {
      if (weatherMoment == null) {
        return null;
      }

      return (
        <span className="daily-weather-snapshot__temperature">
          {Math.round(weatherMoment.temperatureFahrenheit)}&#176;
        </span>
      );
    };
  }, [weatherMoment]);

  return (
    <li className="daily-weather-snapshot">
      <Day />
      <Conditions />
      <Temperature />
    </li>
  );
};
