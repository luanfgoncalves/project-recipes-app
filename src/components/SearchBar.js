import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';

const SearchBar = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [searchContent, setSearchContent] = useState('');

  const history = useHistory();
  const { getSearchResult } = useContext(AppReceitasContext);

  const handleClick = ({ target }) => {
    setSearchFilter(target.value);
  };

  const handleChange = ({ target }) => {
    setSearchContent(target.value);
  };

  const handleSearch = () => {
    getSearchResult(history.location.pathname, searchFilter, searchContent);
  };

  return (
    <div>
      <label htmlFor="search-input">
        <input
          type="text"
          data-testid="search-input"
          id="search-input"
          value={ searchContent }
          onChange={ handleChange }
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
            onClick={ handleClick }
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
            onClick={ handleClick }
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          First Letter
          <input
            type="radio"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            name="search-type"
            value="firstLetter"
            onClick={ handleClick }
          />
        </label>
        <input
          type="button"
          data-testid="exec-search-btn"
          value="Search"
          onClick={ handleSearch }
        />
      </div>
    </div>
  );
};

export default SearchBar;
