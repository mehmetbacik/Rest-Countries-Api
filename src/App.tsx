import React, { useState, useEffect } from 'react';
import { getAllCountries } from './services/api';
import { Header } from './components/Header';
import { CountryList } from './components/CountryList';
import { RegionFilter } from './components/RegionFilter';
import { Country } from '././types/country';
import './App.css';

const App: React.FC = () => {
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [allCountries, setAllCountries] = useState<Country[]>([]);
    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countriesData = await getAllCountries();
                setFilteredCountries(countriesData);
                setAllCountries(countriesData);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleRegionChange = (region: string) => {
        if (region === '') {
            setFilteredCountries(allCountries);
        } else {
            const filtered = allCountries.filter(country => country.region === region);
            setFilteredCountries(filtered);
        }
    };

    return (
        <div>
            <Header />
            <RegionFilter countries={allCountries} onRegionChange={handleRegionChange} />
            <CountryList countries={filteredCountries} />
        </div>
    );
}

export default App;