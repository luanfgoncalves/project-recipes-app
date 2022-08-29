import React, { useEffect, useContext } from 'react';
import fetchCategoryFood from '../services/fetchCategoryFood';
import { filterFood } from '../services/fetchFilter';
import AppReceitasContext from '../context/AppReceitasContext';

function CategoryFood() {
  const {
    setFood,
    foodCategory,
    setFoodCategory,
    toggle,
    setToggle,
    defaultFood } = useContext(AppReceitasContext);
  const numb = 5;
  const numb2 = 12;

  const foodFilter = async (category) => {
    if (toggle === false) {
      const dataFood = await filterFood(category.target.innerText);
      const meals = dataFood.meals.filter((meal, index) => index < numb2);
      console.log(meals);
      setFood(meals);
      setToggle(true);
    } else {
      setToggle(false);
      setFood(defaultFood);
    }
  };

  useEffect(() => {
    const apiCategory = async () => {
      const dataFood = await fetchCategoryFood();
      setFoodCategory(dataFood.meals);
    };
    apiCategory();
  }, []);

  const getFoodCategory = () => foodCategory.slice(0, numb).map((foods) => (
    <button
      data-testid={ `${foods.strCategory}-category-filter` }
      type="button"
      key={ `${foods.strCategory}` }
      onClick={ foodFilter }
    >
      { foods.strCategory }

    </button>
  ));

  return (
    <div>
      { getFoodCategory() }
    </div>
  );
}

export default CategoryFood;
