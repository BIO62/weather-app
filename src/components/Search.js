import React, { useEffect } from "react";
import { citiesFilter } from "../utils/CitiesFilter";

export const Search = (props) => {
  const { setSelectedCity } = props;
  const [countriesSearch, setCountriesSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [cities, setCities] = React.useState([]);

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const countriesAndCity = citiesFilter(result.data);
        console.log("Fetched cities:", countriesAndCity);
        setCities(countriesAndCity);
        setFilteredData(countriesAndCity);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setCountriesSearch(searchValue);
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        .slice(0, 3)
    );
  };

  const handleCityClick = (city) => {
    setSelectedCity(city.split(",")[0]);
  };

  return (
    <div className="Search absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex-col w-[507px] min-w-[320px] bg-white p-[10px_24px] items-center gap-[16px] rounded-[48px]">
      {loading && <p>Loading...</p>}
      <div className="flex text-2xl w-[455px] h-[44px] rounded-[48px] bg-white">
        <img
          className="opacity-0.2 w-[40px] h-[40px]"
          src={"/image/search.png"}
          alt="search icon"
        />
        <div>
          <input
            className="w-[400px] h-[44px] outline-none text-black font-manrope text-2xl font-bold leading-none"
            onChange={handleChange}
            placeholder="Search country"
          />
        </div>
      </div>
      {countriesSearch.length > 0 && (
        <div className="absolute w-[450px] mt-2.5 rounded-3xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
          {filteredData.length > 0 ? (
            filteredData.map((city, index) => (
              <div
                className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100 overflow-hidden text-black truncate font-manrope text-xl font-bold leading-none cursor-pointer"
                onClick={() => handleCityClick(city)}
                key={index}
              >
                <img
                  className="opacity-0.2 w-[40px] h-[40px]"
                  src={"/image/location.png"}
                  alt="location icon"
                />
                <span className="ml-2">{city}</span>
              </div>
            ))
          ) : (
            <p className="px-6 py-2 text-gray-500">хайлт олдсонгүй</p>
          )}
        </div>
      )}
    </div>
  );
};
