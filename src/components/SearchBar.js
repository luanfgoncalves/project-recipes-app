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
    <div>
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          id="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          name="search-type"
          value="ingredient"
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          id="name-search-radio"
          data-testid="name-search-radio"
          name="search-type"
          value="name"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          id="first-letter-search-radio"
          data-testid="first-letter-search-radio"
          name="search-type"
          value="first-letter"
        />
      </label>
      <input
        type="button"
        data-testid="exec-search-btn"
        value="Buscar"
      />
    </div>
  </div>
);

export default SearchBar;
