import React, { useState } from 'react';
import { Country } from '../../types/country';

interface RegionFilterProps {
    countries: Country[];
    onRegionChange: (region: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({ countries, onRegionChange }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const region = event.target.value;
        setSelectedRegion(region);
        onRegionChange(region);
    };

    const getUniqueRegions = () => {
        const regions: string[] = [];
        countries.forEach((country) => {
            if (!regions.includes(country.region) && country.region !== '') {
                regions.push(country.region);
            }
        });
        return regions;
    };

    return (
        <div>
            <select
                value={selectedRegion}
                onChange={handleRegionChange}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
            >
                <option value="">Filter by Region</option>
                {getUniqueRegions().map((region, index) => (
                    <option key={index} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RegionFilter;
