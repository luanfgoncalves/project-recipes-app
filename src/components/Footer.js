import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <div>
        <a
          href="/drinks"
          data-testid="drinks-bottom-btn"
        >
          <img
            src={ drinkIcon }
            alt="icon drink"
          />
        </a>

        <a
          href="/foods"
          data-testid="food-bottom-btn"
        >
          <img
            src={ mealIcon }
            alt="icon food"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
