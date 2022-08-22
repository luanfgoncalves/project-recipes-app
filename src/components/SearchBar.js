import React from 'react';

const SearchBar = () => (
  <div>
    <label htmlFor="search-input">
      <input
        type="text"
        data-testid="search-input"
        id="search-input"
      />
    </label>
  </div>
);

export default SearchBar;
