import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFood from '../components/CategoryFood';
import CategoryDrink from '../components/CategoryDrink';
import Food from '../components/Food';
import Drink from '../components/Drink';
import AppReceitasContext from '../context/AppReceitasContext';

function Recipes() {
  const { pathname } = useLocation();
  const { searchResult } = useContext(AppReceitasContext);
  return (
    <div>
      <div>
        { pathname === '/foods' ? <CategoryFood /> : <CategoryDrink /> }
      </div>
      <div>
        { searchResult.length === 0 && (
          pathname === '/foods' ? <Food /> : <Drink />
        ) }
      </div>
    </div>
  );
}

export default Recipes;
