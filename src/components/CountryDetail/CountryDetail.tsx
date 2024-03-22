import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Country } from "../../types/country";

interface CountryDetailProps {
  countries: Country[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ countries }) => {
  const navigate = useNavigate();
  const { alpha3Code } = useParams<{ alpha3Code: string }>();

  const country = countries.find(
    (country) => country.alpha3Code === alpha3Code
  );

  const handleGoBack = () => {
    navigate("/");
  };

  if (!country) return <div>Country not found</div>;

  const getBorderCountryNames = () => {
    return country.borders.map((borderCode) => {
      const borderCountry = countries.find(
        (country) => country.alpha3Code === borderCode
      );
      return borderCountry ? borderCountry.name : "";
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={handleGoBack}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={country.flags.png}
            alt={country.name}
            className="w-full h-auto mb-4"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{country.name}</h2>
          <div className="flex flex-wrap mb-2">
            <p className="mr-2 mb-2">
              <span className="font-semibold">Native Name:</span>{" "}
              {country.nativeName}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Subregion:</span>{" "}
              {country.subregion}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.topLevelDomain.join(", ")}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Currencies:</span>{" "}
              {country.currencies.map((currency) => currency.name).join(", ")}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Languages:</span>{" "}
              {country.languages.map((language) => language.name).join(", ")}
            </p>
            <p className="mr-2 mb-2">
              <span className="font-semibold">Border Countries:</span>{" "}
              {getBorderCountryNames().join(", ") || "None"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
