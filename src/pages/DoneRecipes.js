import React, { useEffect, useState } from 'react';
import SavedRecipeCard from '../components/SavedRecipeCard';
import Header from '../components/Header';

const DoneRecipes = () => {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes') || '[]'));
  }, []);

  useEffect(() => {
    setFilteredRecipes([...doneRecipes]);
  }, [doneRecipes]);

  const handleFilter = ({ target }) => {
    if (target.value === 'All') {
      setFilteredRecipes([...doneRecipes]);
    } else {
      setFilteredRecipes(doneRecipes.filter((recipe) => (
        recipe.type === target.value.toLowerCase()
      )));
    }
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <div className="done-recipes-container">
        <input
          className="done-input-button"
          type="button"
          id="filter-by-all-btn"
          data-testid="filter-by-all-btn"
          value="All"
          onClick={ handleFilter }
        />
        <input
          className="done-input-button"
          type="button"
          id="filter-by-food-btn"
          data-testid="filter-by-food-btn"
          value="Food"
          onClick={ handleFilter }
        />
        <input
          className="done-input-button"
          type="button"
          id="filter-by-drink-btn"
          data-testid="filter-by-drink-btn"
          value="Drink"
          onClick={ handleFilter }
        />
      </div>
      {
        filteredRecipes.map((recipe, index) => (
          <SavedRecipeCard
            recipe={ recipe }
            key={ recipe.id }
            index={ index }
            type={ recipe.type === 'drink' ? 'drinks' : 'foods' }
          />
        ))
      }
    </div>
  );
};

export default DoneRecipes;
