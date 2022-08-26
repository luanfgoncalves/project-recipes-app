import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/RenderWithRouter';
import App from "../App";


describe('Testes relativos à página de login', () => { 

  test('se a página contém um heading h1 com o texto /Login/', () => {
    renderWithRouter(<App />);

    const loginHeader = screen.getByRole('heading', {
      name: /Login/i,
      level: 1,
    });
    
    expect(loginHeader).toBeInTheDocument();
  });

  test('se os inputs sçao renderizados corretamente com os data-testids', async () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginBtn = screen.getByTestId("login-submit-btn");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).not.toBeEnabled();

  });

  test('se o botão de Login possui o texto /Enter/', () => {
    renderWithRouter(<App />);

    const loginBtn = screen.getByRole('button', { name: /Enter/i });
    expect(loginBtn).toBeInTheDocument();
  });

  test('a funcionalidade dos mecânismos de login', async () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginBtn = screen.getByTestId("login-submit-btn");

    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, 'teste12345');
    expect(loginBtn).toBeEnabled();

    userEvent.click(loginBtn);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/foods');
    });
  });

});