import countriesData from '../data/data.json';
import { Country } from '../types/country';

const countries: Country[] = countriesData.map((countryData: any) => ({
    ...countryData,
    borders: countryData.borders || [],
    currencies: countryData.currencies || [],
    languages: countryData.languages || [],
}));

export const getAllCountries = (): Country[] => {
    return countries;
};
