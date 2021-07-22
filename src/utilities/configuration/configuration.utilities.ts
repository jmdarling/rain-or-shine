import { Configuration } from "../../models/configuration.model";

// TODO: Pull these values from a configuration file.
export function getConfiguration(): Configuration {
  return {
    openCageApiKey: "3c48b793119740a5823d10a209c87b7c",
    openCageBaseUrl: "https://api.opencagedata.com/geocode/v1/json",
    openWeatherApiKey: "2a699f0c7409306f820cd2111de3fdda",
    openWeatherBaseUrl: "https://api.openweathermap.org/data/2.5/",
  };
}
