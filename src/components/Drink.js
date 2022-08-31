import React, { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import fetchDrink from '../services/fetchDrink';
import AppReceitasContext from '../context/AppReceitasContext';

function Drink() {
  const { drink, setDrink, setDefaultDrink } = useContext(AppReceitasContext);
  const numbRecipes = 12;
  const { pathname } = useLocation();

  const apiRecipes = async () => {
    const dataDrink = await fetchDrink();
    setDrink(dataDrink.drinks);
    setDefaultDrink(dataDrink.drinks);
  };

  useEffect(() => {
    apiRecipes();
  }, []);

  const getRecipes = () => {
    if (pathname === '/drinks') {
      return drink.slice(0, numbRecipes).map((drinks, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/drinks/${drinks.idDrink}` }>
            <figure className="recipe-figure">
              <img
                src={ drinks.strDrinkThumb }
                alt=""
                data-testid={ `${index}-card-img` }
              />
              <figcaption data-testid={ `${index}-card-name` }>
                { drinks.strDrink }
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

export default Drink;
