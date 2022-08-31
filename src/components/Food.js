import React, { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import fetchFood from '../services/fetchFood';
import AppReceitasContext from '../context/AppReceitasContext';

function Food() {
  const { food, setFood, setDefaultFood } = useContext(AppReceitasContext);
  const numbRecipes = 12;
  const { pathname } = useLocation();

  const apiRecipes = async () => {
    const dataFood = await fetchFood();
    setFood(dataFood.meals);
    setDefaultFood(dataFood.meals);
  };

  useEffect(() => {
    apiRecipes();
  }, []);

  const getRecipes = () => {
    if (pathname === '/foods') {
      return food.slice(0, numbRecipes).map((foods, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/foods/${foods.idMeal}` }>
            <figure className="recipe-figure">
              <img
                src={ foods.strMealThumb }
                alt=""
                data-testid={ `${index}-card-img` }
              />
              <figcaption data-testid={ `${index}-card-name` }>
                { foods.strMeal }
              </figcaption>
            </figure>
          </Link>
        </div>
      ));
    }
  };

  const clearFilter = (
    <button
      className="filter-button-all"
      type="button"
      data-testid="All-category-filter"
      onClick={ () => apiRecipes() }
    >
      All
    </button>
  );

  return (
    <div>
      { clearFilter }
      <div className="recipes-container">
        { getRecipes() }
      </div>
    </div>
  );
}

export default Food;
