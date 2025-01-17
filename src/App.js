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
      <div className="App flex relative w-[1600px] h-[1200px] bg-[#F3F4F6]">
        <Search setSelectedCity={setSelectedCity} />
        <div className="rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-none bg-[#F3F4F6] shrink-0 w-[800px] h-[1200px] relative">
          <div className="">
            <img
              src={"/image/yellowIcon.png"}
              alt="yellow"
              className="w-[176px] h-[176px]"
            />
          </div>
          <LeftCard weatherLoading={weatherLoading} weather={weather} />
        </div>
        <div className="relative w-[800px] h-[1200px]">
          <svg
            className="shrink-0 w-[800px] h-[1200px]"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="1200"
            viewBox="0 0 800 1200"
            fill="none"
          >
            <path
              d="M800 0H0V497C0 510.807 11.4776 521.604 24.5822 525.953C55.6155 536.25 78 565.511 78 600C78 634.489 55.6155 663.75 24.5822 674.047C11.4776 678.396 0 689.193 0 703V1150C0 1177.61 22.3858 1200 50 1200H800V0Z"
              fill="#0F141E"
            />
            <div className="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
              <img
                src={"/image/blueicon.png"}
                alt="blueicon"
                className="w-[176px] h-[176px]"
              />
            </div>
          </svg>

          <RightCard weatherLoading={weatherLoading} weather={weather} />
        </div>
        <div className="flex min-h-screen absolute inset-0 z-10 items-center justify-center">
          <div className="absolute w-[1740px] h-[1740px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.08 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[1340px] h-[1340px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.08 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[940px] h-[940px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.08 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[540px] h-[540px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.1 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[340px] h-[340px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.1 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[140px] h-[140px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.1 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
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

          <div className="Main "></div>
        </div>
      </div>
    </>
  );
}

export default App;
