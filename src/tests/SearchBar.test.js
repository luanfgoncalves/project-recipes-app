import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from "../helpers/renderWithRouter";
import Foods from '../pages/Foods';
import App from '../App';
import AppReceitasProvider from '../context/AppReceitasProvider';
import { singleResult } from './mocks/foodAPIResult';

describe('Realiza os testes referentes ao componente SearchBar', () => {
  it('Verifica a exibiçãio dos radio buttons', () => {
    renderWithRouter(
      <AppReceitasProvider>
        <Foods />
      </AppReceitasProvider>
    );
   
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    
    const ingredientFilter = screen.getByTestId('ingredient-search-radio');
    const nameFilter = screen.getByTestId('name-search-radio');
    const firstLetterFilter = screen.getByTestId('first-letter-search-radio');

    expect(ingredientFilter).toBeInTheDocument();
    expect(nameFilter).toBeInTheDocument();
    expect(firstLetterFilter).toBeInTheDocument();
  });

  it('Verifica a exibiçãio dos radio buttons', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(singleResult),
    }));

    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>
    );

    history.push('/foods');
   
    expect(history.location.pathname).toBe(`/foods`);

    const showSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(showSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'rice');

    const ingredientFilter = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingredientFilter);

    const searchBtn = screen.getByTestId('exec-search-btn');
    expect(searchBtn).toBeEnabled();
    userEvent.click(searchBtn);

    await waitFor(() => {
       expect(history.location.pathname).toBe(`/foods/${singleResult.meals[0].idMeal}`);
    });
    
    
  });
});