import React from 'react';
// import AppReceitasContext from '../context/AppReceitasContext';

const ShareButton = () => {
  // const {
  //   recipe,
  //   favorites,
  //   setFavorites,
  //   isFavorite,
  //   setIsFavorite,
  // } = useContext(AppReceitasContext);
  const compartilharRecipe = () => {
    console.log('funciona, please!');
  };
  return (
    <div>
      <button
        type="button"
        onChange={ compartilharRecipe }
        data-testid="share-btn"
        name="compartilhar"
      >
        Compartilhar
      </button>
    </div>
  );
};

export default ShareButton;
