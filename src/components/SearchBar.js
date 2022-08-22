import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getFoodRecipes from '../services/foodRecipesAPI';
import getDrinkRecipes from '../services/drinkRecipesAPI';

const SearchBar = (props) => {
  const [searchFilter, setSearchFilter] = useState('');

  const handleClick = ({ target }) => setSearchFilter(target.value);

  const handleSearch = () => {
    const {
      history: { location: { pathname } },
      setFoodSearchReturn,
      setDrinkSearchReturn,
    } = props;

    if (pathname === '/foods') {
      try {
        console.log(getFoodRecipes(searchFilter));
      } catch (err) {
        global.alert(err.message);
      }
    } else {
      try {
        getDrinkRecipes(searchFilter);
      } catch (err) {
        global.alert(err.message);
      }
    }
  };

  return (
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
          value="Buscar"
          onClick={ handleSearch }
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  setFoodSearchReturn: PropTypes.func.isRequired,
  setDrinkSearchReturn: PropTypes.func.isRequired,
};

export default SearchBar;
