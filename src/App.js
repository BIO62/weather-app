import React, { useEffect, useState } from "react";
import { Search } from "./components/Search";
import { LeftCard } from "./components/LeftCard";
import { RightCard } from "./components/RightCard";

const weatherApiKey = "5711f198124343b491622225251501";

function App() {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    setWeatherLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );
      const result = await response.json();
      console.log(result);
      const weatherData = {
        region: result.location.name,
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
      };
      setWeather(weatherData);
      setWeatherLoading(false);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <>
      {/* w-[1600px] h-[1200px] */}
      <div className="flex min-h-screen">
        <Search setSelectedCity={setSelectedCity} />
        <div className="relative flex flex-1 items-center justify-center">
          <LeftCard weatherLoading={weatherLoading} weather={weather} />
        </div>

        <div className="relative flex flex-1 items-center justify-center bg-[rgb(15,20,30)]">
          <RightCard weatherLoading={weatherLoading} weather={weather} />
        </div>

        <div className="flex min-h-screen absolute inset-0 z-10 items-center justify-center">
          <div className="absolute w-[1740px] h-[1740px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="absolute w-[1340px] h-[1340px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="absolute w-[940px] h-[940px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="absolute w-[540px] h-[540px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="absolute w-[340px] h-[340px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="absolute w-[140px] h-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full"></div>
          <div className="flex gap-[16px]">
            <img
              className="w-[43.289px] h-[86px]"
              src="/image/pine-left.png"
              alt="pine-l"
            />
            <img
              className="w-[43.289px] h-[86px]"
              src="/image/pine-right.png"
              alt="pine-r"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
