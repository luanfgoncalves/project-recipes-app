import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ img, name, id }) => (
  <figure data-testid={ `${id}-recipe-card` } className="recipe-card">
    <img data-testid={ `${id}-card-img` } src={ img } alt={ name } />
    <figcaption data-testid={ `${id}-card-name` }>{name}</figcaption>
  </figure>
);

RecipeCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeCard;
