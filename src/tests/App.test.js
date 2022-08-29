import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from "../helpers/renderWithRouter";

// test('Farewell, front-end', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/TRYBE/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Teste na pagina de login', () => {
  it('testa se o componente é renderizado', () => {
      renderWithRouter(<App />);

      const emailImput = screen.getByTestId("email-input")
      const senhaImput = screen.getByTestId("password-input")
      expect(emailImput).toBeInTheDocument();
      expect(senhaImput).toBeInTheDocument();gi
  });

  it('Testa do botão ', () => {
    renderWithRouter(<App />);
    
    const emailImput = screen.getByTestId("email-input")
    const senhaImput = screen.getByTestId("password-input")
    const button = screen.getByRole('button', {
        name: /enter/i,
    })

    userEvent.type(emailImput, 'email@teste.com')
    userEvent.type(senhaImput, '1234567')
    userEvent.click(button);


})
})