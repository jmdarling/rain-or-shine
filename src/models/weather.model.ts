export interface Weather {
  currentWeatherMoment: WeatherMoment;
  dailyWeatherMoments: WeatherMoment[];
}

export interface WeatherMoment {
  applicableDateTime: Date; // Date Time.
  temperatureFahrenheit: number;
  feelsLikeTemperatureFahrenheit: number;
  weatherMomentConditions: WeatherMomentConditions[];
  windSpeedMph: number;
}

export interface WeatherMomentConditions {
  weatherMomentCondition: WeatherMomentCondition;
  description: string;
}

export enum WeatherMomentCondition {
  THUNDERSTORM = 200,
  DRIZZLE = 300,
  RAIN = 500,
  SNOW = 600,
  ATMOSPHERE = 700,
  CLEAR = 800,
  CLOUDS = 801,
  UNKNOWN = 0,
}
