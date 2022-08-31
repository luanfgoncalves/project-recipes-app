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

      <h5 data-testid="page-title">{title}</h5>

      <Link to="/profile">
        <img
          className="profile-img"
          src={ profileIcon }
          alt="Ícone de perfil"
          data-testid="profile-top-btn"
        />
      </Link>

      {(title === 'Foods' || title === 'Drinks')
    && (
      <input
        className="search-img"
        src={ searchIcon }
        type="image"
        onClick={ handleClick }
        data-testid="search-top-btn"
        alt="Ícone de pesquisa"
      />
    )}

      { displaySearchBar && <SearchBar /> }

    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
