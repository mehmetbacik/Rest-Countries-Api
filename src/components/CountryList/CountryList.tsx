import React from 'react';
import CountryListItem from './CountryListItem';
import { Country } from '../../types/country';

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    return (
        <div>
            {countries.map(country => (
                <CountryListItem key={country.alpha3Code} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
