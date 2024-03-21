import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CountryDetail } from './components/CountryDetail'; 
import { Country } from './types/country';

import './App.css';

const App: React.FC = () => {
    const countries: Country[] = []; 

    return (
        <div>
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
