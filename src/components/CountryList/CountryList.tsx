import React from 'react';
import CountryListItem from './CountryListItem';
import { Country } from '../../types/country';

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[80px]">
            {countries.map(country => (
                <CountryListItem key={country.alpha3Code} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
