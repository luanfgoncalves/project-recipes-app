const END_POINTS = {
  ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  firstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
};

const NO_RESULTS_MESSAGE = 'Sorry, we haven\'t found any recipes for these filters.';

const getDrinkRecipes = async (searchFilter, searchContent) => {
  try {
    const response = await fetch(`${END_POINTS[searchFilter]}${searchContent}`);
    const data = await response.json();

    if (!data.drinks) global.alert(NO_RESULTS_MESSAGE);

    return data.drinks;
  } catch {
    global.alert(NO_RESULTS_MESSAGE);
  }
};

export default getDrinkRecipes;
