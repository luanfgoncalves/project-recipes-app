// import React from 'react';
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';
import { fetchDrinkApi, fetchMealApi } from '../services/fetchDrinksAndMeals';

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
    ingredients.filter((key) => recipe[key] !== null)
      .map((key, index) => (
        <li key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
          { `${recipe[key]} - ${recipe[`strMeasure${index + 1}`]}` }
        </li>
      )));

  // const cardNumber = 6;
  // const renderMealRecomendations = () => (
  //   ata.slice(0, maxCards).map((recomendation, index) => (
  //     <div key={ index }>
  //       {index <= cardNumber && (
  //         <div data-testid={ `${index}-recomendation-card` }>
  //           <img src={ recomendation.strDrinkThumb } alt={ recomendation.strDrink } />
  //           <p data-testid={ `${index}-recomendation-title` }>{recomendation.strDrink}</p>
  //         </div>)}
  //     </div>
  //   )));

  const renderMeals = () => (
    <div>
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <img data-testid="recipe-photo" src={ recipe.strMealThumb } alt="meal" />
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <p data-testid="instructions">{recipe.strInstructions}</p>

      <iframe
        data-testid="video"
        title={ recipe.strMeal }
        width="400"
        height="315"
        // src={ recipe.strYoutube }
        src={ String(recipe.strYoutube).replace('watch?v=', 'embed/') }
      />

      <ul>
        {renderIngredients()}
      </ul>

      <div data-testid="recomendation-card">Sou uma recomendação :3</div>
      <div data-testid="0-recomendation-card">também sou uma recomendação :3</div>

    </div>
  );

  const renderDrinks = () => (
    <div>
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
      <img data-testid="recipe-photo" src={ recipe.strDrinkThumb } alt="meal" />
      {/* <h4 data-testid="recipe-category">{recipe.strCategory}</h4> */}
      <h4 data-testid="recipe-category">{ recipe.strAlcoholic }</h4>
      <p data-testid="instructions">{recipe.strInstructions}</p>

      <ul>
        {renderIngredients()}
      </ul>

      <div data-testid="recomendation-card">Oi, sou uma recomendação :3</div>
      <div data-testid="0-recomendation-card">Oi, também sou uma recomendação :3</div>

    </div>
  );

  return (
    <div>
      {recipeType === '' && <h1>Carregando...</h1>}
      {recipeType === 'meal' && renderMeals() }
      {recipeType === 'drink' && renderDrinks() }
    </div>
  );
};

export default RecipeDetails;

// Referência: https://www.youtube.com/watch?v=y_pr4lRoUto
