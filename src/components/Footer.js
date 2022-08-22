import React from 'react';

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
          src="./images/drinkIcon.svg"
        >
          <img
            src="./images/drinkIcon.svg"
            alt="icon drink"
          />
        </a>

        <a
          href="/foods"
          data-testid="food-bottom-btn"
          src="./images/mealIcon.svg"
        >
          <img
            src="./images/mealIcon.svg"
            alt="icon food"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
