import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import AppReceitasProvider from '../context/AppReceitasProvider';
import renderWithRouter from '../helpers/RenderWithRouter';


describe('Teste de Recipes', () => {
    // it('teste se aparece comidas na tela', async() => {
    //     const { history } = renderWithRouter(<AppReceitasProvider><App /></AppReceitasProvider>);
    //     history.push('/foods');

    //     const food = screen.findByText(/poutine/i)
    //     await waitFor(() => {
    //     expect(food).toBeInTheDocument();

    //     })

    // })
        it('Teste filtro', async () => {
            const { history } = renderWithRouter(<AppReceitasProvider><App /></AppReceitasProvider>);
            history.push('/foods');
    
            const button = screen.findByTestId("Beef-category-filter");
            const button2 = screen.findByTestId('Breakfast-category-filter');
            const button3 = screen.findByTestId('Chicken-category-filter');
            const button4 = screen.findByTestId('Dessert-category-filter');
            const button5 = screen.findByTestId('Goat-category-filter');
            await waitFor(() => {
            expect(button).toBeInTheDocument();
            expect(button2).toBeInTheDocument();
            expect(button3).toBeInTheDocument();
            expect(button4).toBeInTheDocument();
            expect(button5).toBeInTheDocument();
        
        });
    
    });
});
    
