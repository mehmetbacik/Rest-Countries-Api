import React from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types/country";
import { CountryDetail } from "../../components/CountryDetail";

interface CountryDetailPageProps {
  countries: Country[];
}

const CountryDetailView: React.FC<CountryDetailPageProps> = ({ countries }) => {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();

  const country = countries.find((country) => country.alpha3Code === alpha3Code);

  if (!country) return <div>Country not found</div>;

  return (
    <div>
      <CountryDetail country={country} countries={countries} />
    </div>
  );
}

export default CountryDetailView;
