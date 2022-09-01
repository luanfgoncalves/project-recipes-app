import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Profile from "../pages/Profile";

describe('Realiza os testes referentes à pagina de perfil' , () => {
  it('Verifica se os elementos são renderizados', () => {
    renderWithRouter(<Profile />);

    const email = screen.getByTestId('profile-email');
    const doneBtn = screen.getByTestId('profile-done-btn');
    const favoriteBtn = screen.getByTestId('profile-favorite-btn');
    const logoutBtn = screen.getByTestId('profile-logout-btn'); 

    expect(email).toBeInTheDocument();
    expect(doneBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });

  it('Verifica se o usuário é enviado para a rota correta', () => {
    const {history} = renderWithRouter(<Profile />);

    const doneBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(doneBtn);
    expect(history.location.pathname).toBe('/done-recipes');

    history.push('/profile');

    const favoriteBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteBtn);
    expect(history.location.pathname).toBe('/favorite-recipes');

    history.push('/profile');

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutBtn);
    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se o email correto é exibido na tela', () => {

    const email = 'teste@teste.com';
    localStorage.setItem('user', JSON.stringify({ email }));
    renderWithRouter(<Profile />);

    const emailText = screen.getByText(email);

    expect(emailText).toBeInTheDocument();
  });
});