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
