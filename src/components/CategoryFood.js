import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import fetchCategoryFood from '../services/fetchCategoryFood';

function CategoryFood() {
  const [food, setFood] = useState([]);
  //   const { pathname } = useLocation();
  const numb = 5;

  useEffect(() => {
    const apiCategory = async () => {
      const dataFood = await fetchCategoryFood();
      console.log(dataFood);
      setFood(dataFood.meals);
    };
    apiCategory();
  }, []);
  return (
    <>
      {
        food.slice(0, numb).map((foods) => (
          <button
            data-testid={ `${foods.strCategory}-category-filter` }
            type="button"
            key={ `${foods.strCategory}` }
          >
            { foods.strCategory }

          </button>
        ))
      }
    </>
  );
}

export default CategoryFood;
