import { Weather } from "../../models/weather.model";
import { getConfiguration } from "../../utilities/configuration/configuration.utilities";
import { OpenWeather } from "../../models/open-weather.model";
import { mapOpenWeatherToWeather } from "../../mappers/weather.mappers";
import { Position } from "../../models/geolocation.model";

export async function getWeatherFromPosition(
  position: Position
): Promise<Weather> {
  const { openWeatherApiKey, openWeatherBaseUrl } = getConfiguration();
  const url = `${openWeatherBaseUrl}/onecall?lat=${position.latitude}&lon=${position.longitude}&appid=${openWeatherApiKey}&units=imperial`;
  const weatherResponse: Response = await window.fetch(url);
  const openWeather: OpenWeather = await weatherResponse.json();
  return mapOpenWeatherToWeather(openWeather);
}
