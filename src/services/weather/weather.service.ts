import { mapOpenWeatherToWeather } from "../../mappers/weather.mappers";
import { Position } from "../../models/geolocation.model";
import { OpenWeather } from "../../models/open-weather.model";
import { Weather } from "../../models/weather.model";
import { getConfiguration } from "../../utilities/configuration/configuration.utilities";

export async function getWeatherFromPosition(
  position: Position
): Promise<Weather> {
  const { openWeatherApiKey, openWeatherBaseUrl } = getConfiguration();
  const url = `${openWeatherBaseUrl}/onecall?lat=${position.latitude}&lon=${position.longitude}&appid=${openWeatherApiKey}&units=imperial`;
  const weatherResponse: Response = await window.fetch(url);
  const openWeather: OpenWeather = await weatherResponse.json();
  return mapOpenWeatherToWeather(openWeather);
}
