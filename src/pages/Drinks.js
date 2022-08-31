import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import AppReceitasContext from '../context/AppReceitasContext';
import Recipes from './Recipes';

const MAX_DISPLAYED_RECIPES = 12;

const Drinks = () => {
  const { searchResult, setSearchResult } = useContext(AppReceitasContext);

  useEffect(() => {
    setSearchResult([]);
  }, []);

  return (
    <div>
      <Header title="Drinks" />
      <div className="recipe-card-container">
        {
          searchResult.length === 1 ? (
            <Redirect to={ `/drinks/${searchResult[0].idDrink}` } />
          ) : (
            searchResult.slice(0, MAX_DISPLAYED_RECIPES).map((recipe, i) => (
              <RecipeCard
                id={ i }
                key={ recipe.idDrink }
                name={ recipe.strDrink }
                img={ recipe.strDrinkThumb }
              />
            ))
          )
        }
      </div>
      <Recipes />
      <Footer />
    </div>
  );
};

export default Drinks;
