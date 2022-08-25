import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import fetchFood from '../services/fetchFood';
import fetchDrink from '../services/fetchDrink';
import CategoryFood from './CategoryFood';
import CategoryDrink from './CategoryDrink';
// import AppReceitasContext from '../context/AppReceitasContext';

function Recipes() {
  // const { food, setFood, drink, setDrink } = useContext(AppReceitasContext);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const numbRecipes = 12;
  // const { id } = useParams();
  // const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    const apiRecipes = async () => {
      const dataFood = await fetchFood();
      const dataDrink = await fetchDrink();
      setFood(dataFood.meals);
      setDrink(dataDrink.drinks);
    };
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

  return (
    <div>
      { pathname === '/foods' ? <CategoryFood /> : <CategoryDrink /> }
      { getRecipes() }
    </div>
  );
}

export default Recipes;
