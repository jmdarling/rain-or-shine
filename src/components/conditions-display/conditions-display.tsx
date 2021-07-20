import React from "react";

import { WeatherMomentCondition } from "../../models/weather.model";

import "./conditions-display.css";

import Clear from "./clear.svg";
import Clouds from "./partly-cloudy.svg";
import Drizzle from "./light-rain.svg";
import Rain from "./rain.svg";
import Storm from "./storm.svg";

export interface ConditionsDisplayProps {
  className?: string;
  condition: WeatherMomentCondition;
  helpTextOverride?: string;
}

export const ConditionsDisplay: React.FC<ConditionsDisplayProps> = ({
  className,
  condition,
  helpTextOverride,
}) => {
  const combinedClassName = `conditions-display ${className}`;

  switch (condition) {
    case WeatherMomentCondition.CLOUDS:
      return (
        <img
          alt={helpTextOverride || "Cloudy"}
          className={combinedClassName}
          src={Clouds}
        />
      );
    case WeatherMomentCondition.CLEAR:
      return (
        <img
          alt={helpTextOverride || "Clear"}
          className={combinedClassName}
          src={Clear}
        />
      );
    case WeatherMomentCondition.ATMOSPHERE:
      // TODO: Need an icon for "Atmospheric Conditions".
      return (
        <img
          alt={helpTextOverride || "Atmospheric Conditions"}
          className={combinedClassName}
          src={Clear}
        />
      );
    case WeatherMomentCondition.RAIN:
      return (
        <img
          alt={helpTextOverride || "Rainy"}
          className={combinedClassName}
          src={Rain}
        />
      );
    case WeatherMomentCondition.DRIZZLE:
      return (
        <img
          alt={helpTextOverride || "Drizzling"}
          className={combinedClassName}
          src={Drizzle}
        />
      );
    case WeatherMomentCondition.THUNDERSTORM:
      return (
        <img
          alt={helpTextOverride || "Storming"}
          className={combinedClassName}
          src={Storm}
        />
      );
    case WeatherMomentCondition.SNOW:
      // TODO: Need an icon for "Snow".
      return (
        <img
          alt={helpTextOverride || "Snowing"}
          className={combinedClassName}
          src={Rain}
        />
      );
    default:
      return (
        <img
          alt={helpTextOverride || ""}
          className={combinedClassName}
          src={Clear}
        />
      );
  }
};
