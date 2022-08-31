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
    <div className="search-bar">
      <label htmlFor="search-input">
        <input
          placeholder="Search"
          className="search-input"
          type="text"
          data-testid="search-input"
          id="search-input"
          value={ searchContent }
          onChange={ handleChange }
        />
      </label>
      <div className="search-radio-container">
        <label htmlFor="ingredient-search-radio" className="search-radio-label">
          Ingredient
          <input
            className="search-radio"
            type="radio"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            name="search-type"
            value="ingredient"
            onClick={ handleClick }
          />
        </label>
        <label htmlFor="name-search-radio" className="search-radio-label">
          Name
          <input
            className="search-radio"
            type="radio"
            id="name-search-radio"
            data-testid="name-search-radio"
            name="search-type"
            value="name"
            onClick={ handleClick }
          />
        </label>
        <label htmlFor="first-letter-search-radio" className="search-radio-label">
          First Letter
          <input
            className="search-radio"
            type="radio"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            name="search-type"
            value="firstLetter"
            onClick={ handleClick }
          />
        </label>
        <input
          className="search-input-button"
          type="button"
          data-testid="exec-search-btn"
          value="Search"
          disabled={ !searchFilter }
          onClick={ handleSearch }
        />
      </div>
    </div>
  );
};

export default SearchBar;
