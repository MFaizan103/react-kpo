import React, { useState } from 'react';

function SearchableList() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState(["apple", "banana", "orange", "grape"]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const searchResults = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}
            />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchableList;
