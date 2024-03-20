import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputQuery = event.target.value;
        setQuery(inputQuery);
        onSearch(inputQuery);
    };

    return (
        <div className="flex items-center">
            <FontAwesomeIcon icon={faSearch} />
            <input
                type="text"
                placeholder="Search for a country..."
                value={query}
                onChange={handleInputChange}
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-l"
            />
        </div>
    );
};

export default Search;
