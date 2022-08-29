import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchDrink from '../services/fetchDrink';

// const cardNumber = 6;
// const renderMealRecomendations = () => (
//   ata.slice(0, maxCards).map((recomendation, index) => (
//     <div key={ index }>
//       {index <= cardNumber && (
//         <div data-testid={ `${index}-recomendation-card` }>
//           <img src={ recomendation.strDrinkThumb } alt={ recomendation.strDrink } />
//           <p data-testid={ `${index}-recomendation-title` }>{recomendation.strDrink}</p>
//         </div>)}
//     </div>
//   )));

const renderNumber = 6;

const DrinksRecomendations = () => {
  const [recomendations, setRecomendations] = useState([]);

  const getDrinks = async () => {
    const DrinksData = await fetchDrink();
    console.log(DrinksData);
    setRecomendations(DrinksData.drinks);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className="recomendation-container" data-testid="recomendations-cards">
      { recomendations.slice(0, renderNumber).map((drink, index) => (
        <Link
          to={ `/foods/${drink.idDrink}` }
          key={ index }
        >

          <figure
            key={ index }
            className="recomendation-card"
            data-testid={ `${index}-recomendation-card` }
          >

            <img
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              data-testid={ `${index}-card-img` }
            />

            <figcaption data-testid={ `${index}-recomendation-title` }>
              { drink.strDrink }
            </figcaption>

          </figure>
        </Link>
      ))}
    </div>
  );
};

export default DrinksRecomendations;
