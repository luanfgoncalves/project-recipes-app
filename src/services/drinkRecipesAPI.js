const END_POINTS = {
  ingredient: 'www.thecocktaildb.com/api/json/v1/1/search.php?i=',
  name: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  firstLetter: 'www.thecocktaildb.com/api/json/v1/1/search.php?f=',
};

const getDrinkRecipes = async (searchFilter, searchContent) => {
  const response = await fetch(`${END_POINTS[searchFilter]}${searchContent}`);
  const data = await response.json();

  return data.meals;
};

export default getDrinkRecipes;
