import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFood from '../services/fetchFood';

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

const MealRecomendations = () => {
  const [recomendations, setRecomendations] = useState([]);

  const getMeal = async () => {
    const mealData = await fetchFood();
    console.log(`O array recuperado pela API foi: ${mealData}`);
    setRecomendations(mealData.meals);
    console.log(`Os dados guardados em 'recomendations' é: ${recomendations}`);
  };

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <div className="recomendation-container" data-testid="recomendations-cards">
      { recomendations.slice(0, renderNumber).map((meal, index) => (
        <Link
          to={ `/foods/${meal.idMeal}` }
          key={ index }
        >

          <figure
            key={ index }
            className="recomendation-card"
            data-testid={ `${index}-recomendation-card` }
          >

            <img
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
              data-testid={ `${index}-card-img` }
            />

            <figcaption data-testid={ `${index}-recomendation-title` }>
              { meal.strMeal }
            </figcaption>

          </figure>
        </Link>
      ))}
    </div>
  );
};

export default MealRecomendations;
