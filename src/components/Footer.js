import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <div>
        <Link to="/drinks">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="icon drink"
          />
        </Link>

        <Link to="/foods">
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="icon food"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
