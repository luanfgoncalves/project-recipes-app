import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import fetchFood from '../services/fetchFood';
import fetchDrink from '../services/fetchDrink';
import CategoryFood from '../components/CategoryFood';
import CategoryDrink from '../components/CategoryDrink';
import AppReceitasContext from '../context/AppReceitasContext';
import Header from '../components/Header';

function Recipes() {
  const { food, setFood, drink, setDrink } = useContext(AppReceitasContext);

  const numbRecipes = 12;
  const { pathname } = useLocation();

  const apiRecipes = async () => {
    const dataFood = await fetchFood();
    console.log(dataFood);
    const dataDrink = await fetchDrink();
    setFood(dataFood.meals);
    setDrink(dataDrink.drinks);
  };

  useEffect(() => {
    apiRecipes();
  }, []);

  const getRecipes = () => {
    if (pathname === '/foods') {
      return food.slice(0, numbRecipes).map((foods, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            className="recipes-imgs"
            src={ foods.strMealThumb }
            alt=""
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{ foods.strMeal }</p>
        </div>
      ));
    }
    if (pathname === '/drinks') {
      return drink.slice(0, numbRecipes).map((drinks, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            className="recipes-imgs"
            src={ drinks.strDrinkThumb }
            alt=""
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{ drinks.strDrink }</p>
        </div>
      ));
    }
  };

  const clearFilter = (
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={ () => apiRecipes() }
    >
      All
    </button>
  );

  return (
    <div className="divContainer">
      { pathname === '/foods' ? <Header title="Foods" /> : <Header title="Drinks" />}
      <div className="btnCategory">
        { pathname === '/foods' ? <CategoryFood /> : <CategoryDrink /> }
        { clearFilter }
      </div>
      <div className="imgContainer">
        { getRecipes() }
      </div>
    </div>
  );
}

export default Recipes;
