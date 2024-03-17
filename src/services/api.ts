import countriesData from '../data/data.json';
import { Country } from '../types/country';

const countries: Country[] = countriesData;

export const getAllCountries = (): Country[] => {
    return countries;
};