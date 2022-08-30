import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import AppReceitasContext from '../context/AppReceitasContext';
import Recipes from './Recipes';

const MAX_DISPLAYED_RECIPES = 12;

const Foods = () => {
  const { searchResult, setSearchResult } = useContext(AppReceitasContext);

  useEffect(() => {
    setSearchResult([]);
  }, []);

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
      {searchResult.length === 0 && <Recipes />}
      <Footer />
    </div>
  );
};

export default Foods;
