import React from "react";
import { TemperatureUnit } from "../../models/unit";
import "./temperature-unit-toggle.css";

export interface UnitToggleProps {
  onToggle: () => void;
  value: TemperatureUnit;
}

export const TemperatureUnitToggle: React.FC<UnitToggleProps> = ({
  onToggle,
  value,
}) => {
  const className = `temperature-unit-toggle ${
    value === TemperatureUnit.CELSIUS
      ? "temperature-unit-toggle--celsius-active"
      : "temperature-unit-toggle--fahrenheit-active"
  }`;

  return (
    <button className={className} onClick={onToggle}>
      <span className="temperature-unit-toggle__value temperature-unit-toggle__value--fahrenheit">
        F&#176;
      </span>
      <span className="temperature-unit-toggle__value temperature-unit-toggle__value--celsius">
        C&#176;
      </span>
    </button>
  );
};
