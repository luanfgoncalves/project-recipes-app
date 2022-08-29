import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/RenderWithRouter';
import Recipes from '../pages/Recipes';
import drinkMock from '../../cypress/mocks/drinks';


describe('Teste de Recipes', () => {
    beforeEach(() => {
        global.alert = jest.fn();
    })
    
    it ('Teste rota foods', async () => {
        global.fetch = jest.fn();
        const { history } = renderWithRouter(<Recipes />);
            history.push('/foods');
            await waitFor(() => expect(fetch).toHaveBeenCalled());

        });

        it ('Teste rota drinks', async () => {
            global.fetch = jest.fn();
            const { history } = renderWithRouter(<Recipes />);
                history.push('/drinks');
                await waitFor(() => expect(fetch).toHaveBeenCalled());
    
            });
        it ('Teste da api de drinks', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(drinkMock),
            });
            const { history } = renderWithRouter(<Recipes />);
                history.push('/drinks');
                await waitFor(() => expect(fetch).toHaveBeenCalled());

                const item = screen.getByTestId('0-recipe-card');
                const item1 = screen.getByTestId('1-recipe-card');
                const item2 = screen.getByTestId('2-recipe-card');
                const item3 = screen.getByTestId('3-recipe-card');
                expect(item).toBeInTheDocument();
                expect(item1).toBeInTheDocument();
                expect(item2).toBeInTheDocument();
                expect(item3).toBeInTheDocument();
        });
        it ('teste botão all', async () => {
            renderWithRouter(<Recipes />);
            userEvent.click(screen.getByTestId('All-category-filter'));
            await waitFor(() => {
                expect(screen.getByText(/corba/i)).toBeInTheDocument();

            })
        })
    });
    
