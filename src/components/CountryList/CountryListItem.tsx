import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../types/country';

interface CountryListItemProps {
    country: Country;
}

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className="country-list-item">
            <img src={country.flag} alt={country.name} className="country-flag" />
            <h2 className="country-name">{country.name}</h2>
            <p className="country-population">Population: {country.population}</p>
            <p className="country-region">Region: {country.region}</p>
            <p className="country-capital">Capital: {country.capital}</p>
        </Link>
    );
}

export default CountryListItem;
