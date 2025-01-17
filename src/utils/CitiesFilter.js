export const citiesFilter = (countries) => {
  const citiesAndCountry = countries.flatMap((country) => {
    return country.cities.map((city) => `${city}, ${country.country}`);
  });

  return citiesAndCountry;
};
