import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFood from '../components/CategoryFood';
import CategoryDrink from '../components/CategoryDrink';
import Header from '../components/Header';
import Food from '../components/Food';
import Drink from '../components/Drink';

function Recipes() {
  const { pathname } = useLocation();
  return (
    <div className="div-container">
      { pathname === '/foods' ? <Header title="Foods" /> : <Header title="Drinks" />}
      <div className="btn-category">
        { pathname === '/foods' ? <CategoryFood /> : <CategoryDrink /> }
      </div>
      <div className="img-container">
        { pathname === '/foods' ? <Food /> : <Drink /> }
      </div>
    </div>
  );
}

export default Recipes;
