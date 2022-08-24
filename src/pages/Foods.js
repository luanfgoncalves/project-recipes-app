import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import AppReceitasContext from '../context/AppReceitasContext';

const MAX_DISPLAYED_RECIPES = 12;

const Foods = () => {
  const { searchResult } = useContext(AppReceitasContext);

  return (
    <div>
      <Header title="Foods" />
      {
        searchResult.length === 1 ? (
          <Redirect to={ `/foods/${searchResult[0].idMeal}` } />
        ) : (
          searchResult.slice(0, MAX_DISPLAYED_RECIPES).map((recipe, i) => (
            <RecipeCard
              id={ i }
              key={ recipe.idMeal }
              name={ recipe.strMeal }
              img={ recipe.strMealThumb }
            />
          ))
        )
      }
    </div>
  );
};

export default Foods;
