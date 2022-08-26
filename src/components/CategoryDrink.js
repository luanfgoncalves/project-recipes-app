import React, { useEffect, useContext } from 'react';
import fetchCategoryDrink from '../services/fetchCategoryDrink';
import { filterDrink } from '../services/fetchFilter';
import AppReceitasContext from '../context/AppReceitasContext';

function CategoryDrink() {
  // const [drinkCategory, setDrinkCategory] = useState([]);
  const { setDrink, drinkCategory, setDrinkCategory } = useContext(AppReceitasContext);
  const numb = 5;
  const numb2 = 12;

  useEffect(() => {
    const apiCategory = async () => {
      const dataDrink = await fetchCategoryDrink();
      setDrinkCategory(dataDrink.drinks);
    };
    apiCategory();
  }, []);

  const drinkFilter = async (category) => {
    const dataDrink = await filterDrink(category.target.innerText);
    const drinks = dataDrink.drinks.filter((drink, index) => index < numb2);
    console.log(drinks);
    setDrink(drinks);
  };

  return (
    <>
      {
        drinkCategory.slice(0, numb).map((drinks) => (
          <button
            data-testid={ `${drinks.strCategory}-category-filter` }
            type="button"
            key={ `${drinks.strCategory}` }
            onClick={ (event) => drinkFilter(event) }
          >
            { drinks.strCategory }

          </button>
        ))
      }
    </>
  );
}

export default CategoryDrink;
