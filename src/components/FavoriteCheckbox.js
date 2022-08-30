import React, { useContext, useState } from 'react';
import AppReceitasContext from '../context/AppReceitasContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearticon from '../images/whiteHeartIcon.svg';

const FavoriteButton = () => {
  const {
    recipe,
    favorites,
    setFavorites,
  } = useContext(AppReceitasContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteCheck = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      setFavorites([...favorites, recipe]);
      setIsFavorite(false);
    } else {
      setFavorites(favorites.filter((receita) => receita === recipe));
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

export default FavoriteButton;
