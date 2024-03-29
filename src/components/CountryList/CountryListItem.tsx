import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../types/country';

interface CountryListItemProps {
    country: Country;
}

const MAX_CHARACTERS = 25;

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
    const trimmedName = country.name.length > MAX_CHARACTERS ? `${country.name.substring(0, MAX_CHARACTERS)}...` : country.name;

    return (
        <Link to={`/country/${country.alpha3Code}`} className="themeListItem shadow-md">
            <div className='themeListImage w-full h-60 rounded-t-lg'>
                <img src={country.flag} alt={country.name} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className='themeListContent rounded-b-lg p-7'>
                <h2 className="country-name font-bold text-[25px] mb-3" title={country.name}>{trimmedName}</h2>
                <div className="country-population flex items-center gap-1 mb-1">
                    <span className="font-bold">Population:</span> 
                    <p>{country.population}</p>
                </div>
                <div className="country-region flex items-center gap-1 mb-1">
                    <span className="font-bold">Region:</span> 
                    <p>{country.region}</p>
                </div>
                <div className="country-capital flex items-center gap-1 mb-1">
                    <span className="font-bold">Capital:</span> 
                    <p>{country.capital}</p>
                </div>
            </div>
        </Link>
    );
}

export default CountryListItem;
