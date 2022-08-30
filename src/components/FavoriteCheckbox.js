import React, { useContext, useState } from 'react';
import AppReceitasContext from '../context/AppReceitasContext';

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
    } else {
      setFavorites(favorites.filter((receita) => receita === recipe));
    }
  };

  return (
    <div>
      <label htmlFor="favoritar">
        Favoritar
        <input
          type="checkbox"
          checked={ isFavorite }
          onChange={ handleFavoriteCheck }
          data-testid="favorite-btn"
          name="favoritar"
        />
      </label>
    </div>
  );
};

export default FavoriteButton;
