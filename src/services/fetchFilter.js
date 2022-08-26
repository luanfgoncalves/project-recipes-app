export const filterFood = async (item) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
  const data = await response.json();
  return data;
};

export const filterDrink = async (item) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${item}`);
  const data = await response.json();
  return data;
};
