export interface OpenWeather {
  current: OpenWeatherCurrent;
  minutely: OpenWeatherForecast[];
  hourly: OpenWeatherForecast[];
  daily: OpenWeatherForecast[];
}

export interface OpenWeatherCurrent {
  temp: number;
  feels_like: number;
  weather: OpenWeatherMomentConditions[];
  wind_speed: number;
}

export interface OpenWeatherForecast {
  temp: OpenWeatherForecastTemp;
  feels_like: number;
  weather: OpenWeatherMomentConditions[];
  wind_speed: number;
}

export interface OpenWeatherForecastTemp {
  day: number;
}

export interface OpenWeatherMomentConditions {
  id: number;
  main: string;
  description: string;
}
