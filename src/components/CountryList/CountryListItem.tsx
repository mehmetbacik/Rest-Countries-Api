import React from 'react';
import { Country } from '../../types/country';

interface CountryListItemProps {
    country: Country;
}

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
    return (
        <div className="country-list-item">
            <img src={country.flag} alt={country.name} className="country-flag" />
            <h2 className="country-name">{country.name}</h2>
            <p className="country-population">Population: {country.population}</p>
            <p className="country-region">Region: {country.region}</p>
            <p className="country-capital">Capital: {country.capital}</p>
        </div>
    );
}

export default CountryListItem;
