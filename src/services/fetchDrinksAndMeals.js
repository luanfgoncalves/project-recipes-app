export const fetchMealApi = async (endpoint) => {
  try {
    const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${endpoint}`);
    const mealData = await mealResponse.json();
    return mealData;
  } catch (error) {
    console.log('Não foi obtida uma resposta da API de comidas');
  }
};

export const fetchDrinkApi = async (endpoint) => {
  try {
    const drinkResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${endpoint}`);
    const drinkData = await drinkResponse.json();
    return drinkData;
  } catch (error) {
    console.log('Não foi obtida uma resposta da API de bebidas');
  }
};
