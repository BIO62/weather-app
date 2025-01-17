import React from "react";

export const RightCard = ({ weatherLoading, weather }) => {
  const getDayWeatherIcon = (condition) => {
    if (!condition) {
      return "/image/smoke.png";
    }
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("clear")) {
      return "/image/smoke.png";
    } else if (lowerCondition.includes("sunny")) {
      return "/image/moon.png";
    } else if (lowerCondition.includes("cloudy")) {
      return "/image/cloudymoon.png";
    } else if (lowerCondition.includes("rain")) {
      return "/image/rainmoon.png";
    } else if (lowerCondition.includes("snow")) {
      return "/image/snowmoon.png";
    } else {
      return "/image/smoke.png";
    }
  };
  return (
    <div className="absolute w-[414px] h-[828px] rounded-[48px] z-20 w-103 h-207 rounded-10.5 overflow-hidden bg-[#111827]/75 backdrop-blur-md flex flex-col items-center justify-between p-8 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {weatherLoading ? (
        <p>Weather Loading...</p>
      ) : (
        <>
          <div className="">
            <p className="text-gray-300">{weather.date}</p>
            <h1 className="h-12 text-5xl font-extrabold text-white">
              {weather.region}
            </h1>
          </div>

          <img
            src={getDayWeatherIcon(weather?.condition)}
            alt={weather?.condition || "Default weather"}
          />

          <div className="text-center">
            <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
              {weather.min_c}°
            </p>
            <p className="text-lg text-purple-600 mt-2">{weather.condition}</p>
          </div>

          <div className="flex justify-between w-full px-8"></div>
        </>
      )}
    </div>
  );
};
