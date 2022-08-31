import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './components/RecipeInProgress';
import AppReceitasProvider from './context/AppReceitasProvider';

function App() {
  const doneRecipes = [
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
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes]));
  return (
    <AppReceitasProvider>
      <div className="app">
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/foods/:id" component={ RecipeDetails } />
          <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </div>
    </AppReceitasProvider>
  );
}

export default App;
