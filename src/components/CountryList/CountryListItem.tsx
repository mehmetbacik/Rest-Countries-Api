import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../types/country';

interface CountryListItemProps {
    country: Country;
}

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className="themeListItem shadow-md">
            <div className='themeListImage w-full h-60 rounded-t-lg'>
                <img src={country.flag} alt={country.name} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className='themeListContent rounded-b-lg p-7'>
                <h2 className="country-name">{country.name}</h2>
                <p className="country-population">Population: {country.population}</p>
                <p className="country-region">Region: {country.region}</p>
                <p className="country-capital">Capital: {country.capital}</p>
            </div>
        </Link>
    );
}

export default CountryListItem;
