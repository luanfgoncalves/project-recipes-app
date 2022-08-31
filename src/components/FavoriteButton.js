import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppReceitasContext from '../context/AppReceitasContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearticon from '../images/whiteHeartIcon.svg';

const FavoriteButton = ({ id, index }) => {
  const {
    recipe,
    setFavorites,
  } = useContext(AppReceitasContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const recoveredList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesList = recoveredList ? [...recoveredList] : [];
    const isFav = favoritesList.some((elem) => elem.id === id);

    setIsFavorite(isFav);
  }, []);

  const handleFavoriteCheck = () => {
    const recoveredList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesList = recoveredList ? [...recoveredList] : [];

    if (!isFavorite) {
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
      setFavorites([...favoritesList, { ...favoriteObj }]);
    } else {
      const newFavoritesList = favoritesList.filter((elem) => elem.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...newFavoritesList]));
      setFavorites([...newFavoritesList]);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <label htmlFor="favoritar">
        <input
          type="image"
          src={ isFavorite ? blackHeartIcon : whiteHearticon }
          alt="Icone de favorito"
          onClick={ handleFavoriteCheck }
          data-testid={ pathname === '/favorite-recipes' ? (
            `${index}-horizontal-favorite-btn`
          ) : (
            'favorite-btn'
          ) }
          name="favoritar"
        />
      </label>
    </div>
  );
};

FavoriteButton.defaultProps = {
  index: 0,
};

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default FavoriteButton;
