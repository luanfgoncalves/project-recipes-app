const END_POINTS = {
  ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  firstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
};

const NO_RESULTS_MESSAGE = 'Sorry, we haven\'t found any recipes for these filters.';

const getFoodRecipes = async (searchFilter, searchContent) => {
  const response = await fetch(`${END_POINTS[searchFilter]}${searchContent}`);
  const data = await response.json();

  if (!data.meals) global.alert(NO_RESULTS_MESSAGE);

  return data.meals;
};

export default getFoodRecipes;
