// import React from 'react';
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';
import { fetchDrinkApi, fetchMealApi } from '../services/fetchDrinksAndMeals';
import MealRecomendations from '../components/MealsRecomendations';
import DrinksRecomendations from '../components/DrinkRecomendations';
import Loading from '../components/Loading';

const RecipeDetails = () => {
  const {
    recipe,
    setRecipe,
    recipeType,
    setRecipeType,
  } = useContext(AppReceitasContext);

  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  const fetchRecipeApi = async (endpoint) => {
    const noNumbers = pathname.replace(/[0-9]/g, '');
    const oito = 8;
    console.log(noNumbers.length);

    if (noNumbers.length === oito) {
      const drinkData = await fetchDrinkApi(endpoint);
      console.log(drinkData);
      setRecipe(drinkData.drinks[0]);
      setRecipeType('drink');
      console.log('Foi recuperada uma bebida');
      console.log(recipe);
    }

    if (noNumbers.length !== oito) {
      const mealData = await fetchMealApi(endpoint);
      console.log(mealData);
      setRecipe(mealData.meals[0]);
      setRecipeType('meal');
      console.log('Foi recuperada uma comida');
      console.log(recipe);
    }
  };

  useEffect(() => {
    // pathValidation(pathStr);
    fetchRecipeApi(id);
    console.log(`A api foi chamada com o ID ${id}`);
    console.log(`O pathname é ${pathname}`);
    // console.log(`O pagePath é ${pagePath}`);
  }, []);

  const ingredients = Object.keys(recipe).filter((e) => e.includes('strIngredient'));

  const renderIngredients = () => (
    ingredients.filter((key) => recipe[key] !== null && recipe[key] !== '')
      .map((key, index) => (
        <li key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
          { `${recipe[key]} - ${recipe[`strMeasure${index + 1}`]}` }
        </li>
      )));

  const renderMeals = () => (
    <div>

      <h2 data-testid="recipe-title" className="recipe-title">
        {recipe.strMeal}
      </h2>
      <figure className="recipe-detail-card">
        <img
          className="recipe-detail-img"
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          data-testid="recipe-photo"
        />
        <figcaption data-testid="recipe-category">
          {recipe.strCategory}
        </figcaption>
      </figure>

      <div className="recipe-instructions">
        <h3>How to prepare:</h3>
        <span data-testid="instructions">
          {recipe.strInstructions}
        </span>
      </div>

      <iframe
        data-testid="video"
        title={ recipe.strMeal }
        width="400"
        height="315"
        src={ String(recipe.strYoutube).replace('watch?v=', 'embed/') }
      />

      <div className="recipe-ingredients">
        <h3>Needed ingredients:</h3>
        <ul className="recipe-details-ul">
          {renderIngredients()}
        </ul>
      </div>

      <DrinksRecomendations />

    </div>
  );

  const renderDrinks = () => (
    <div>

      <h2 data-testid="recipe-title" className="recipe-title">
        {recipe.strDrink}
      </h2>

      <figure className="recipe-detail-card">
        <img
          className="recipe-detail-img"
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          data-testid="recipe-photo"
        />
        <figcaption data-testid="recipe-category">
          {recipe.strAlcoholic}
        </figcaption>
      </figure>

      <div className="recipe-instructions">
        <h3>How to prepare:</h3>
        <span data-testid="instructions">
          {recipe.strInstructions}
        </span>
      </div>

      <div className="recipe-ingredients">
        <h3>Needed ingredients:</h3>
        <ul className="recipe-details-ul">
          {renderIngredients()}
        </ul>
      </div>

      <MealRecomendations />

    </div>
  );

  return (
    <div>
      {recipeType === '' && <Loading />}
      {recipeType === 'meal' && renderMeals() }
      {recipeType === 'drink' && renderDrinks() }
    </div>
  );
};

export default RecipeDetails;

// Referência: https://www.youtube.com/watch?v=y_pr4lRoUto
