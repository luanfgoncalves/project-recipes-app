import React, { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import fetchDrink from '../services/fetchDrink';
import AppReceitasContext from '../context/AppReceitasContext';

function Drink() {
  const { drink, setDrink } = useContext(AppReceitasContext);
  const numbRecipes = 12;
  const { pathname } = useLocation();

  const apiRecipes = async () => {
    const dataDrink = await fetchDrink();
    setDrink(dataDrink.drinks);
  };

  useEffect(() => {
    apiRecipes();
  }, []);

  const getRecipes = () => {
    if (pathname === '/drinks') {
      return drink.slice(0, numbRecipes).map((drinks, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/drinks/${drinks.idDrink}` }>
            <img
              className="recipes-imgs"
              src={ drinks.strDrinkThumb }
              alt=""
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ drinks.strDrink }</p>
          </Link>
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
    <div>
      { clearFilter }
      <div className="img-container">
        { getRecipes() }
      </div>
    </div>
  );
}

export default Drink;
