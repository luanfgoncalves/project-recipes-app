import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ img, name, id }) => (
  <div data-testid={ `${id}-recipe-card` } className="recipe-card">
    <img data-testid={ `${id}-card-img` } src={ img } alt={ name } />
    <p data-testid={ `${id}-card-name` }>{name}</p>
  </div>
);

RecipeCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeCard;
