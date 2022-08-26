import React, { useEffect, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
import fetchCategoryFood from '../services/fetchCategoryFood';
import { filterFood } from '../services/fetchFilter';
import AppReceitasContext from '../context/AppReceitasContext';

function CategoryFood() {
  const { setFood, foodCategory, setFoodCategory } = useContext(AppReceitasContext);
  //   const { pathname } = useLocation();
  const numb = 5;
  const numb2 = 12;

  useEffect(() => {
    const apiCategory = async () => {
      const dataFood = await fetchCategoryFood();
      setFoodCategory(dataFood.meals);
    };
    apiCategory();
  }, []);

  const foodFilter = async (category) => {
    const dataFood = await filterFood(category.target.innerText);
    const meals = dataFood.meals.filter((food, index) => index < numb2);
    console.log(meals);
    setFood(meals);
  };

  return (
    <>
      {
        foodCategory.slice(0, numb).map((foods) => (
          <button
            data-testid={ `${foods.strCategory}-category-filter` }
            type="button"
            key={ `${foods.strCategory}` }
            onClick={ (event) => foodFilter(event) }
          >
            { foods.strCategory }

          </button>
        ))
      }
    </>
  );
}

export default CategoryFood;
