import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';
import getFoodRecipes from '../services/foodRecipesAPI';
import getDrinkRecipes from '../services/drinkRecipesAPI';

function AppReceitasProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  const [recipe, setRecipe] = useState([]);
  const [recipeType, setRecipeType] = useState('');

  const getSearchResult = async (pathname, searchFilter, searchContent) => {
    if (searchFilter === 'firstLetter' && searchContent.length === 0) {
      global.alert('Your search must have at least 1 (one) character');
    } else if (searchFilter === 'firstLetter' && searchContent.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else if (pathname === '/foods') {
      const foodList = await getFoodRecipes(searchFilter, searchContent);
      setSearchResult(foodList || []);
    } else {
      const drinkList = await getDrinkRecipes(searchFilter, searchContent);
      setSearchResult(drinkList || []);
    }
  };

  const valueContext = {
    searchResult,
    getSearchResult,
    recipe,
    setRecipe,
    recipeType,
    setRecipeType,
    food,
    setFood,
    drink,
    setDrink,
    drinkCategory,
    setDrinkCategory,
    foodCategory,
    setFoodCategory,
  };

  return (
    <AppReceitasContext.Provider value={ valueContext }>
      { children }
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;
