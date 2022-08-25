// import React from 'react';
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';

const RecipeDetails = () => {
//   const [recipe, setRecipe] = useState([]);
//   const [recipeType, setRecipeType] = useState('');
  const {
    recipe,
    setRecipe,
    recipeType,
    setRecipeType,
  } = useContext(AppReceitasContext);

  // const history = useHistory();
  // const { location: { pathname } } = history;
  // console.log(location);
  const { id } = useParams();

  const fetchRecipeApi = async (endpoint) => {
    try {
      const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${endpoint}`);
      const drinkResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${endpoint}`);
      const mealData = await mealResponse.json();
      console.log(mealData);
      const drinkData = await drinkResponse.json();
      console.log(drinkData);
      if (mealData.meals === null) {
        setRecipe(drinkData.drinks[0]);
        setRecipeType('drink');
        console.log('Foi recuperada uma bebida');
        console.log(recipe);
      }
      if (drinkData.drinks === null) {
        setRecipe(mealData.meals[0]);
        setRecipeType('meal');
        console.log('Foi recuperada uma comida');
        console.log(recipe);
      }
    } catch (error) {
      console.log('Não foi obtida uma resposta da API');
    }
  };

  useEffect(() => {
    fetchRecipeApi(id);
    console.log(`A api foi chamada com o ID ${id}`);
  }, []);

  const ingredients = Object.keys(recipe).filter((e) => e.includes('strIngredient'));

  const renderIngredients = () => (
    ingredients.filter((key) => recipe[key] !== null)
      .map((key, index) => (
        <li key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
          { `${recipe[key]} - ${recipe[`strMeasure${index + 1}`]}` }
        </li>
      )));

  const renderMeals = () => (
    <div>
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <img data-testid="recipe-photo" src={ recipe.strMealThumb } alt="meal" />
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <p data-testid="instructions">{recipe.strInstructions}</p>

      <iframe
        title={ recipe.strMeal }
        width="400"
        height="315"
        // src={ recipe.strYoutube }
        src={ String(recipe.strYoutube).replace('watch?v=', 'embed/') }
      />

      <ul>
        {renderIngredients()}
      </ul>

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
