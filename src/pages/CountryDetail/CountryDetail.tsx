import React from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types/country";
import { CountryDetail } from "../../components/CountryDetail";
import { Header } from "../../components/Header";

interface CountryDetailPageProps {
  countries: Country[];
}

const CountryDetailView: React.FC<CountryDetailPageProps> = ({ countries }) => {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();

  const country = countries.find((country) => country.alpha3Code === alpha3Code);

  if (!country) return <div>Country not found</div>;

  return (
    <div className="themeDetail">
      <Header />
      <main className="themeMain">
          <div className="themeDetail min-h-screen">
            <CountryDetail country={country} countries={countries} />
          </div>
      </main>
    </div>
  );
}

export default CountryDetailView;
