import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppReceitasContext from '../context/AppReceitasContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearticon from '../images/whiteHeartIcon.svg';

const FavoriteButton = ({ id }) => {
  const {
    recipe,

  } = useContext(AppReceitasContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const recoveredList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesList = recoveredList ? [...recoveredList] : [];
    const isFav = favoritesList.some((elem) => elem.id === id);

    setIsFavorite(isFav);
  }, []);

  useEffect(() => {
    const recoveredList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesList = recoveredList ? [...recoveredList] : [];

    if (isFavorite) {
      const isFoods = pathname.includes('foods');
      const favoriteObj = {
        id: isFoods ? recipe.idMeal : recipe.idDrink,
        type: isFoods ? 'food' : 'drink',
        nationality: isFoods ? recipe.strArea : '',
        category: recipe.strCategory,
        alcoholicOrNot: isFoods ? '' : recipe.strAlcoholic,
        name: isFoods ? recipe.strMeal : recipe.strDrink,
        image: isFoods ? recipe.strMealThumb : recipe.strDrinkThumb,
      };
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [...favoritesList, { ...favoriteObj }],
      ));
    } else {
      const newFavoritesList = favoritesList.filter((elem) => elem.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...newFavoritesList]));
    }
  }, [isFavorite]);

  const handleFavoriteCheck = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  return (
    <div>
      <label htmlFor="favoritar">
        <input
          type="image"
          src={ isFavorite ? blackHeartIcon : whiteHearticon }
          alt="Icone de favorito"
          onClick={ handleFavoriteCheck }
          data-testid="favorite-btn"
          name="favoritar"
        />
      </label>
    </div>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FavoriteButton;
