import React from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  // const [,] = useState([]);

  const valueContext = {
    disabledButton,
    setDisabledButton,
    email,
    setEmail,
    password,
    setPassword,
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
