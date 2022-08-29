import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/RenderWithRouter';
import Recipes from '../pages/Recipes';


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
        
    });
    
