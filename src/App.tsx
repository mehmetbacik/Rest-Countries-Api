import React from 'react';
import { getAllCountries } from './services/api';
import { CountryList } from './components/CountryList';
import './App.css';

const App: React.FC = () => {
    const countries = getAllCountries();

    return (
        <div>
            <CountryList countries={countries} />
        </div>
    );
}

export default App;