import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import DoneRecipes from './pages/DoneRecipes';

import FavoriteRecipes from './pages/FavoriteRecipes';

import Profile from './pages/Profile';

import Recipes from './pages/Recipes';
import AppReceitasProvider from './context/AppReceitasProvider';

function App() {
  return (
    <AppReceitasProvider>
      <div className="meals">
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route exact path="/foods" component={ Recipes } />
          <Route exact path="/foods/:id" component={ Recipes } />
          <Route exact path="/foods/:id/in-progress" component={ Recipes } />
          <Route exact path="/drinks" component={ Recipes } />
          <Route exact path="/drinks/:id" component={ Recipes } />
          <Route exact path="/drinks/:id/in-progress" component={ Recipes } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </div>
    </AppReceitasProvider>
  );
}

export default App;
