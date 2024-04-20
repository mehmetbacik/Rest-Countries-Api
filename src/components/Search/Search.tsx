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
        <div className="themeSearch flex items-center gap-2 font-semibold py-3 px-5 rounded w-full md:w-1/3">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            <input
                type="text"
                placeholder="Search for a country..."
                value={query}
                onChange={handleInputChange}
                className="bg-transparent outline-none w-full"
            />
        </div>
    );
};

export default Search;
