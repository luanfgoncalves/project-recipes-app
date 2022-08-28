/* import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from "../helpers/renderWithRouter";
import Header from '../components/Header';
import Foods from '../pages/Foods';
import Profile from '../pages/Profile';
import AppReceitasProvider from '../context/AppReceitasProvider';

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

  it('Verifica se o botão de Pesquisar habilita/desabilita a barra de pesquisa', () => {
    renderWithRouter(
    <AppReceitasProvider>
      <Foods />
    </AppReceitasProvider>);

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeDefined();

    userEvent.click(searchBtn);

    const searchBar = screen.getByTestId('search-input');
    expect(searchBar).toBeInTheDocument();

    userEvent.click(searchBtn);
    expect(searchBar).not.toBeInTheDocument();
  });

  it('Verifica se o ícone de pesquisa é exibido na página Foods', () => {
    renderWithRouter(
      <AppReceitasProvider>
        <Foods />
      </AppReceitasProvider>
    );

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });
}) */