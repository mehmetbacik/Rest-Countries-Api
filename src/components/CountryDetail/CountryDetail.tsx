import React from "react";
import { Country } from "../../types/country";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface CountryDetailProps {
  country: Country;
  countries: Country[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({
  country,
  countries,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const getBorderCountryNames = () => {
    return country.borders.map((borderCode) => {
      const borderCountry = countries.find(
        (country) => country.alpha3Code === borderCode
      );
      return borderCountry ? borderCountry.name : "";
    });
  };

  return (
    <div className="container mx-6 md:mx-12 py-8">
      <div className="detail-header">
        <button
          onClick={handleGoBack}
          className="back-button py-2 px-10 rounded flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center detail-content">
        <div className="detail-content-picture">
          <img
            src={country.flags.png}
            alt={country.name}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="detail-content-description">
          <h2 className="text-4xl font-bold mb-6 country-name">{country.name}</h2>
          <div className="flex flex-row mb-10">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
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
