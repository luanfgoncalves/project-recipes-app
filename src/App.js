import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Profile from './pages/Profile';

import Recipes from './components/Recipes';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route exact path="/foods" render={ (props) => <Foods { ...props } /> } />
          <Route exact path="/foods/:id" component={ Recipes } />
          <Route exact path="/foods/:id/in-progress" component={ Recipes } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ Recipes } />
          <Route exact path="/drinks/:id/in-progress" component={ Recipes } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
