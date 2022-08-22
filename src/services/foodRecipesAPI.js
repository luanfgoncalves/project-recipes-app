const END_POINTS = {
  ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  firstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
};

const getFoodRecipes = async (searchFilter, searchContent) => {
  const response = await fetch(`${END_POINTS[searchFilter]}${searchContent}`);
  const data = await response.json();

  return data;
};

export default getFoodRecipes;
