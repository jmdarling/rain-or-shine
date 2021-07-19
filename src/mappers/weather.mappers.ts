import {
  OpenWeather,
  OpenWeatherCurrent,
  OpenWeatherForecast,
  OpenWeatherMomentConditions,
} from "../models/open-weather.model";
import {
  Weather,
  WeatherMoment,
  WeatherMomentCondition,
  WeatherMomentConditions,
} from "../models/weather.model";

export function mapOpenWeatherToWeather(openWeather: OpenWeather): Weather {
  return {
    currentWeatherMoment: mapOpenWeatherCurrentToWeatherMoment(
      openWeather.current
    ),
    dailyWeatherMoments: openWeather.daily
      .slice(1, 6)
      .map(mapOpenWeatherForecastToWeatherMoment),
  };
}

export function mapOpenWeatherCurrentToWeatherMoment(
  openWeatherForecast: OpenWeatherCurrent
): WeatherMoment {
  const now = new Date();

  return {
    applicableDateTime: now,
    temperatureFahrenheit: openWeatherForecast.temp,
    feelsLikeTemperatureFahrenheit: openWeatherForecast.feels_like,
    weatherMomentConditions: openWeatherForecast.weather.map(
      mapOpenWeatherMomentConditionsToWeatherMomentConditions
    ),
    windSpeedMph: openWeatherForecast.wind_speed,
  };
}

export function mapOpenWeatherForecastToWeatherMoment(
  openWeatherForecast: OpenWeatherForecast,
  index: number = 0
): WeatherMoment {
  const now = new Date();
  const offsetDateForForecast = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + index + 1
  );

  return {
    applicableDateTime: offsetDateForForecast,
    temperatureFahrenheit: openWeatherForecast.temp.day,
    feelsLikeTemperatureFahrenheit: openWeatherForecast.feels_like,
    weatherMomentConditions: openWeatherForecast.weather.map(
      mapOpenWeatherMomentConditionsToWeatherMomentConditions
    ),
    windSpeedMph: openWeatherForecast.wind_speed,
  };
}

export function mapOpenWeatherMomentConditionsToWeatherMomentConditions(
  openWeatherMomentConditions: OpenWeatherMomentConditions
): WeatherMomentConditions {
  return {
    description: openWeatherMomentConditions.description,
    weatherMomentCondition:
      mapOpenWeatherMomentConditionsIdToWeatherMomentCondition(
        openWeatherMomentConditions.id
      ),
  };
}

export function mapOpenWeatherMomentConditionsIdToWeatherMomentCondition(
  openWeatherMomentConditionsId: OpenWeatherMomentConditions["id"]
): WeatherMomentCondition {
  if (
    openWeatherMomentConditionsId >= 200 &&
    openWeatherMomentConditionsId < 300
  ) {
    return WeatherMomentCondition.THUNDERSTORM;
  }

  if (
    openWeatherMomentConditionsId >= 300 &&
    openWeatherMomentConditionsId < 400
  ) {
    return WeatherMomentCondition.DRIZZLE;
  }

  if (
    openWeatherMomentConditionsId >= 500 &&
    openWeatherMomentConditionsId < 600
  ) {
    return WeatherMomentCondition.RAIN;
  }

  if (
    openWeatherMomentConditionsId >= 600 &&
    openWeatherMomentConditionsId < 700
  ) {
    return WeatherMomentCondition.SNOW;
  }

  if (
    openWeatherMomentConditionsId >= 700 &&
    openWeatherMomentConditionsId < 800
  ) {
    return WeatherMomentCondition.ATMOSPHERE;
  }

  if (openWeatherMomentConditionsId === 800) {
    return WeatherMomentCondition.CLEAR;
  }

  if (
    openWeatherMomentConditionsId >= 801 &&
    openWeatherMomentConditionsId < 900
  ) {
    return WeatherMomentCondition.CLOUDS;
  }

  return WeatherMomentCondition.UNKNOWN;
}
