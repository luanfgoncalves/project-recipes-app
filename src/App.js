import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          {/* <Route exact path="/" component={ Login } /> */}
          <Route exact path="/foods" component={ Foods } />
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
