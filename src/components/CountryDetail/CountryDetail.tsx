import React from 'react';
import { Country } from '../../types/country';

interface CountryDetailProps {
    country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
    return (
        <div>
            {/* Ülke detayları buraya gelecek */}
        </div>
    );
}

export default CountryDetail;
