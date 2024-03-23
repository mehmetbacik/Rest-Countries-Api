import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CountryDetail } from './pages/CountryDetail'; 
import { getAllCountries } from './services/api';

import './App.css';

const App: React.FC = () => {
    const countries = getAllCountries();

    return (
        <div className='countries-app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:alpha3Code" element={<CountryDetail countries={countries} />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
