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
  console.log(searchResult.length);
  return (
    <div>
      {
        searchResult.length === 0 && (
          <div>
            <div>
              { pathname === '/foods' ? <CategoryFood /> : <CategoryDrink /> }
            </div>
            <div>
              { pathname === '/foods' ? <Food /> : <Drink /> }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Recipes;
