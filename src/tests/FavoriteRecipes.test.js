import React from "react";
import renderWithRouter from "../helpers/renderWithRouter";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FavoriteRecipes from "../pages/FavoriteRecipes";
import AppReceitasProvider from "../context/AppReceitasProvider";

describe('Realiza os testes referentes à página /done-recipes', () => {
  const LINK_COPIED_MESSAGE = 'Link copied!';

  const favoriteRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot:  'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  afterAll(() => {
    localStorage.removeItem('favoriteRecipes');
  });

  it('Verifica se os botões de filtro são renderizados', () => {
    renderWithRouter(
      <AppReceitasProvider>
        <FavoriteRecipes />
      </AppReceitasProvider> 
    );

    const filterByAll = screen.getByTestId('filter-by-all-btn');
    const filterByFood = screen.getByTestId('filter-by-food-btn');
    const filterByDrink = screen.getByTestId('filter-by-drink-btn');
    const firstRecipe = screen.queryByText(favoriteRecipes[0].name);

    expect(filterByAll).toBeInTheDocument();
    expect(filterByFood).toBeInTheDocument();
    expect(filterByDrink).toBeInTheDocument();
    expect(firstRecipe).not.toBeInTheDocument();
  });

  it('Verifica se as receitas são renderizadas', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    renderWithRouter(
      <AppReceitasProvider>
        <FavoriteRecipes />
      </AppReceitasProvider> 
    );

    const firstRecipe = screen.getByText(favoriteRecipes[0].name);
    expect(firstRecipe).toBeInTheDocument();
  });

  it('Verifica se o filtro de comida funciona corretamente', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    renderWithRouter(
      <AppReceitasProvider>
        <FavoriteRecipes />
      </AppReceitasProvider> 
    );

    const filterByFood = screen.getByTestId('filter-by-food-btn');
    const foodRecipe = screen.getByTestId('0-horizontal-name');
    const drinkRecipe = screen.getByTestId('1-horizontal-name');

    userEvent.click(filterByFood);
    expect(foodRecipe).toBeInTheDocument();
    expect(drinkRecipe).not.toBeInTheDocument(); 
  });

  it('Verifica se o filtro de bebida funciona corretamente', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    renderWithRouter(
      <AppReceitasProvider>
        <FavoriteRecipes />
      </AppReceitasProvider> 
    );

    const filterByDrink = screen.getByTestId('filter-by-drink-btn');
    const foodRecipe = screen.getByTestId('0-horizontal-name');
    const drinkRecipe = screen.getByTestId('1-horizontal-name');

    userEvent.click(filterByDrink);
    expect(drinkRecipe).toBeInTheDocument();
    expect(foodRecipe).not.toBeInTheDocument(); 
  });
  it('Verifica se o filtro "All" funciona corretamente', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    renderWithRouter(
      <AppReceitasProvider>
        <FavoriteRecipes />
      </AppReceitasProvider> 
    );

    const filterByAll = screen.getByTestId('filter-by-all-btn');
    const foodRecipe = screen.getByTestId('0-horizontal-name');
    const drinkRecipe = screen.getByTestId('1-horizontal-name');

    userEvent.click(filterByAll);
    expect(drinkRecipe).toBeInTheDocument();
    expect(foodRecipe).toBeInTheDocument(); 
  });

  /* it('Verifica se a mensagem correta é exibida na tela ao clicar no botão share', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    renderWithRouter(<favoriteRecipes />);

    try {
      const shareBtn = screen.getByTestId('0-horizontal-share-btn');

      userEvent.click(shareBtn);

      const message = screen.getByText(LINK_COPIED_MESSAGE)
      expect(message).toBeInTheDocument();
    } catch(err) {
      console.log(err.message);
    }
  }); */
});