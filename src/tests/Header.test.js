import React from 'react';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from "../helpers/RenderWithRouter";
import Header from '../components/Header'
import Profile from '../pages/Profile';

describe('Realiza os testes relacionados ao componente Header', () => {
  it('Verifica se o usuário é redirecionado para a página de perfil ao clicar no respectivo ícone', () => {
    const {history} = renderWithRouter(<Header title="teste"/>);

    const profileIcon = screen.getByTestId('profile-top-btn');
    userEvent.click(profileIcon);

    expect(history.location.pathname).toBe('/profile');
  });

  it('Verifica a renderização do header em diferentes páginas', () => {
    renderWithRouter(<Profile />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    expect(profileIcon).toBeDefined();
  });
})