import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

const Header = ({ title }) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  const handleClick = () => {
    if (displaySearchBar) {
      setDisplaySearchBar(false);
    } else {
      setDisplaySearchBar(true);
    }
  };

  return (
    <header>

      <h1 data-testid="page-title">{title}</h1>

      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="Imagem de perfil"
          data-testid="profile-top-btn"
        />
      </Link>

      {(title === 'Foods' || title === 'Drinks')
    && <img
      src={ searchIcon }
      alt="Imagem de perfil"
      data-testid="search-top-btn"
    />}

      <button type="button" onClick={ handleClick }>Pesquisar</button>

      { displaySearchBar && <SearchBar /> }

    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
