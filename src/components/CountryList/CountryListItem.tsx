import React from 'react';
import { Country } from '../../types/country';

interface CountryListItemProps {
    country: Country;
}

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
    return (
        <div>
            {/* Ülke bilgileri buraya gelecek */}
        </div>
    );
}

export default CountryListItem;
