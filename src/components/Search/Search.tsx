import React, { useState } from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search for a country..."
                value={query}
                onChange={handleInputChange}
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-l"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r"
            >
                Search
            </button>
        </div>
    );
};

export default Search;
