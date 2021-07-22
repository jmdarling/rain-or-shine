import { useEffect, useState } from "react";
import { Position } from "../models/geolocation.model";
import { Weather } from "../models/weather.model";
import { getWeatherFromPosition } from "../services/weather/weather.service";

export function useWeather(currentPosition: Position | undefined) {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    let isMounted = true;

    if (currentPosition == null) {
      return;
    }

    getWeatherFromPosition(currentPosition).then((weather: Weather) => {
      if (!isMounted) {
        return;
      }

      setWeather(weather);
    });

    return () => {
      isMounted = false;
    };
  }, [currentPosition]);

  return weather;
}
