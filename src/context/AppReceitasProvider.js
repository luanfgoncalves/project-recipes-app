import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [foodSearchReturn, setFoodSearchReturn] = useState([]);
  const [drinkSearchReturn, setDrinkSearchReturn] = useState([]);

  const valueContext = {
    foodSearchReturn,
    setFoodSearchReturn,
    drinkSearchReturn,
    setDrinkSearchReturn,
  };

  return (
    <AppReceitasContext.Provider value={ valueContext }>
      { children }
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;
