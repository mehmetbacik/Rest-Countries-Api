import React from 'react';
import { getAllCountries } from './services/api';
import { Header } from './components/Header';
import { CountryList } from './components/CountryList';
import './App.css';

const App: React.FC = () => {
    const countries = getAllCountries();

    return (
        <div>
            <Header />
            <CountryList countries={countries} />
        </div>
    );
}

export default App;