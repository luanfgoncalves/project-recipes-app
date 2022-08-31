import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const PAGE_URL = 'http://localhost:3000';

const DoneRecipeCard = ({ recipe, type, index }) => {
  const [showPopup, setShowPopup] = useState(false);

  const {
    id,
    name,
    image,
    category,
    tags,
    doneDate,
    alcoholicOrNot,
    nationality,
  } = recipe;

  const handleShare = () => {
    try {
      copy(`${PAGE_URL}/${type}/${id}`);
      setShowPopup(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div key={ id } className="done-recipe">
      <figure className="done-recipe-card">
        <Link to={ `/${type}/${id}` }>
          <img src={ image } alt={ name } data-testid={ `${index}-horizontal-image` } />
          <p data-testid={ `${index}-horizontal-name` }>{name}</p>
        </Link>

        <p data-testid={ `${index}-horizontal-top-text` }>
          {
            `${nationality} - ${category} (${alcoholicOrNot})`
          }
        </p>
        {
          type === 'drinks' && <p>{alcoholicOrNot}</p>
        }
        <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>

        <input
          className="share-icon"
          type="image"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share the recipe"
          id="filter-by-drink-btn"
          onClick={ handleShare }
        />

        <div>
          Tags:
          {
            tags.map((tag, i) => (
              <span key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>
                {tag}
              </span>
            ))
          }
        </div>
      </figure>

      { showPopup && (
        <div className="popup">
          <p>Link copied!</p>
          <input type="button" onClick={ () => setShowPopup(false) } value="Close" />
        </div>
      )}
    </div>
  );
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
