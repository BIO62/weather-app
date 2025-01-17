import React from "react";

export const LeftCard = ({ weatherLoading, weather }) => {
  const getDayWeatherIcon = (condition) => {
    if (!condition) {
      return "/image/sun.png";
    }
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("clear")) {
      return "/image/sun.png";
    } else if (lowerCondition.includes("sunny")) {
      return "/image/sun.png";
    } else if (lowerCondition.includes("cloudy")) {
      return "/image/Clouds.png";
    } else if (lowerCondition.includes("rain")) {
      return "/image/Rain.png";
    } else if (lowerCondition.includes("snow")) {
      return "/image/Snow.png";
    } else {
      return "/image/sun.png";
    }
  };

  return (
    <div className="absolute z-30 w-[414px] h-[828px] rounded-[48px] bg-white/75 backdrop-blur-[12px] flex flex-col items-center justify-between p-8 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {weatherLoading ? (
        <p>Weather Loading...</p>
      ) : (
        <>
          <div className="">
            <p className="text-gray-600 ">
              {weather?.date || "Loading date..."}
            </p>
            <h1 className="h-12 text-5xl font-extrabold text-gray-900">
              {weather?.region || "Loading region..."}
            </h1>
          </div>

          <img
            src={getDayWeatherIcon(weather?.condition)}
            alt={weather?.condition || "Default weather"}
          />

          <div className="text-center">
            <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
              {weather?.max_c != null ? `${weather.max_c}°` : "--°"}
            </p>
            <p className="text-lg text-purple-600 mt-2">
              {weather?.condition || "Loading condition..."}
            </p>
          </div>
          <div className="flex justify-between w-full px-8"></div>
        </>
      )}
    </div>
  );
};
