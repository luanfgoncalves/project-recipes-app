import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';
import { fetchMealApi, fetchDrinkApi } from '../services/fetchDrinksAndMeals';
import FavoriteCheckbox from './FavoriteButton';
import ShareButton from './ShareButton';
import Loading from './Loading';

const RecipeInProgress = () => {
  const {
    recipe,
    setRecipe,
    recipeType,
    setRecipeType,
  } = useContext(AppReceitasContext);

  const [checked, setChecked] = useState([]);
  const [disableButton, setDisableButton] = useState(true);
  const [ingredientesList, setIngredientesList] = useState([]);
  const [quantityList, setQuantityList] = useState([]);
  const [ingredientesListOk, setIngredientesListOk] = useState([]);

  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;

  const fetchRecipeApi = async (endpoint) => {
    const noNumbers = pathname.replace(/[0-9]/g, '');
    const vinte = 20;

    if (noNumbers.length === vinte) {
      const drinkData = await fetchDrinkApi(endpoint);
      setRecipe(drinkData.drinks[0]);
      setRecipeType('drink');
    }

    if (noNumbers.length !== vinte) {
      const mealData = await fetchMealApi(endpoint);
      setRecipe(mealData.meals[0]);
      setRecipeType('meal');
    }
  };

  useEffect(() => {
    fetchRecipeApi(id);
    const type = recipeType === 'foods' ? 'meals' : 'cocktails';
    const recoveredObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const savedIngredients = recoveredObj ? [...recoveredObj[type][id]] : [];

    setIngredientesListOk(savedIngredients);
  }, []);

  useEffect(() => {
    if (ingredientesListOk.length === ingredientesList.length
      && ingredientesListOk.length !== 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [ingredientesListOk]);

  useEffect(() => {
    const ingredients = Object.keys(recipe).filter((e) => e.includes('strIngredient')
      && recipe[e] !== null && recipe[e] !== '').map((e) => recipe[e]);
    const quantidades = ingredients.map((_e, index) => recipe[`strMeasure${index + 1}`]);
    setIngredientesList(ingredients);
    setQuantityList(quantidades);
    setChecked(ingredients.map(() => false));
  }, [recipe]);

  const handleIngredienteCheck = (target, ingredient, index) => {
    if (target.checked) {
      const temp = checked;
      temp[index] = true;
      setChecked(temp);
      setIngredientesListOk(
        [...ingredientesListOk, ingredient],
      );
    } else {
      const temp = checked;
      temp[index] = false;
      setChecked(temp);
      setIngredientesListOk(ingredientesListOk
        .filter((ingrediente) => ingrediente !== ingredient));
    }
  };

  useEffect(() => {
    const defaultObj = { meals: {}, cocktails: {} };
    const recoveredObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const ingredientsSave = recoveredObj ? { ...recoveredObj } : defaultObj;
    const type = recipeType === 'foods' ? 'meals' : 'cocktails';

    ingredientsSave[type][id] = [...ingredientesListOk];

    localStorage.setItem('inProgressRecipes', JSON.stringify(ingredientsSave));
  }, [ingredientesListOk]);

  const renderIngredients = () => (
    <div>
      {ingredientesList.map((ingredient, index) => (
        <label
          htmlFor={ index }
          key={ index }
          data-testid={ `${index}-ingredient-step` }
          className={ ingredientesListOk.includes(ingredient)
            ? 'strikethrough' : 'checklist' }
        >
          {`${ingredientesList[index]} - ${quantityList[index] || 'Quantity free'}`}
          <input
            type="checkbox"
            id={ index }
            checked={ ingredientesListOk.includes(ingredient) }
            onChange={ ({ target }) => handleIngredienteCheck(
              target, ingredient, index,
            ) }
          />
        </label>
      ))}
    </div>
  );

  const renderMeals = () => (
    <div>

      <h2 data-testid="recipe-title" className="recipe-title">
        {recipe.strMeal}
      </h2>

      <figure className="recipe-detail-card">
        <img
          className="rip-img"
          data-testid="recipe-photo"
          src={ recipe.strMealThumb }
          alt="meal"
        />
        <figcaption data-testid="recipe-category">{recipe.strCategory}</figcaption>
      </figure>

      <div className="recipe-ingredients">
        <h3>Needed ingredients:</h3>
        {renderIngredients()}
      </div>

      <div className="recipe-instructions">
        <h3>How to prepare:</h3>
        <span data-testid="instructions">
          {recipe.strInstructions}
        </span>
      </div>

      <div className="recipe-in-footer">
        <Link to="/done-recipes">
          <button
            type="button"
            disabled={ disableButton }
            data-testid="finish-recipe-btn"
            name="finalizar"
          >
            Finalizar
          </button>
        </Link>

        <FavoriteCheckbox id={ id } />
        <ShareButton
          id={ recipe.idMeal || recipe.idDrink }
          page="foods"
        />
      </div>

    </div>
  );

  const renderDrinks = () => (
    <div>

      <h2 data-testid="recipe-title" className="recipe-title">
        {recipe.strDrink}
      </h2>

      <figure className="recipe-detail-card">
        <img
          className="rip-img"
          data-testid="recipe-photo"
          src={ recipe.strDrinkThumb }
          alt="meal"
        />
        <figcaption data-testid="recipe-category">
          { recipe.strAlcoholic }
        </figcaption>
      </figure>

      <div className="recipe-ingredients">
        <h3>Needed ingredients:</h3>
        {renderIngredients()}
      </div>

      <div className="recipe-instructions">
        <h3>How to prepare:</h3>
        <span data-testid="instructions">
          {recipe.strInstructions}
        </span>
      </div>

      <div className="recipe-in-footer">
        <Link to="/done-recipes">
          <button
            type="button"
            disabled={ disableButton }
            data-testid="finish-recipe-btn"
            name="finalizar"
          >
            Finalizar
          </button>
        </Link>

        <FavoriteCheckbox id={ id } />
        <ShareButton
          id={ recipe.idMeal || recipe.idDrink }
          page="drinks"
        />
      </div>

    </div>
  );

  return (
    <div className="recipes-in-progress">
      {recipeType === '' && <Loading />}
      {recipeType === 'meal' && renderMeals() }
      {recipeType === 'drink' && renderDrinks() }
    </div>
  );
};

export default RecipeInProgress;
