import React, { useEffect, useState } from 'react';
import fetchCategoryDrink from '../services/fetchCategoryDrink';

function CategoryDrink() {
  const [drink, setDrink] = useState([]);
  const numb = 5;

  useEffect(() => {
    const apiCategory = async () => {
      const dataDrink = await fetchCategoryDrink();
      setDrink(dataDrink.drinks);
    };
    apiCategory();
  }, []);

  return (
    <>
      {
        drink.slice(0, numb).map((drinks) => (
          <button
            data-testid={ `${drinks.strCategory}-category-filter` }
            type="button"
            key={ `${drinks.strCategory}` }
          >
            { drinks.strCategory }

          </button>
        ))
      }
    </>
  );
}

export default CategoryDrink;
