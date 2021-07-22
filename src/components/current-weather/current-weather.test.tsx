import { render } from "@testing-library/react";
import { TemperatureUnit } from "../../models/unit";
import { Weather, WeatherMomentCondition } from "../../models/weather.model";
import { convertFahrenheitToCelsius } from "../../utilities/number/unit-conversion.utilities";
import { CurrentWeather } from "./current-weather";

describe("current-weather", () => {
  describe("#CurrentWeather", () => {
    const temperatureUnit = TemperatureUnit.FAHRENHEIT;

    const weather: Weather = {
      currentWeatherMoment: {
        temperatureFahrenheit: 98,
        applicableDateTime: new Date(2021, 7, 21),
        feelsLikeTemperatureFahrenheit: 110,
        weatherMomentConditions: [
          {
            description: "Partly Cloudy",
            weatherMomentCondition: WeatherMomentCondition.CLOUDS,
          },
        ],
        windSpeedMph: 2,
      },
      dailyWeatherMoments: [],
    };

    it("should render the provided description", () => {
      // Arrange.
      // Act.
      const { container } = render(
        <CurrentWeather temperatureUnit={temperatureUnit} weather={weather} />
      );

      // Assert.
      expect(
        container.querySelector(".current-weather__description")?.innerHTML
      ).toContain(
        weather.currentWeatherMoment.weatherMomentConditions[0].description
      );
    });

    it("should render the provided temperature", () => {
      // Arrange.
      // Act.
      const { container } = render(
        <CurrentWeather temperatureUnit={temperatureUnit} weather={weather} />
      );

      // Assert.
      expect(
        container.querySelector(".current-weather__temperature")?.innerHTML
      ).toContain(weather.currentWeatherMoment.temperatureFahrenheit);
    });

    it("should render and convert the provided temperature when a celsius temperature unit is provided", () => {
      // Arrange.
      const temperatureUnit = TemperatureUnit.CELSIUS;

      // Act.
      const { container } = render(
        <CurrentWeather temperatureUnit={temperatureUnit} weather={weather} />
      );

      // Assert.
      expect(
        container.querySelector(".current-weather__temperature")?.innerHTML
      ).toContain(
        Math.round(
          convertFahrenheitToCelsius(
            weather.currentWeatherMoment.temperatureFahrenheit
          )
        )
      );
    });

    it("should render the provided wind speed", () => {
      // Arrange.
      // Act.
      const { container } = render(
        <CurrentWeather temperatureUnit={temperatureUnit} weather={weather} />
      );

      // Assert.
      expect(
        container.querySelector(".current-weather__wind")?.innerHTML
      ).toContain(weather.currentWeatherMoment.windSpeedMph);
    });
  });
});
