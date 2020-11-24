import React, { useState, useEffect  } from 'react'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  

  useEffect(() => {
    async function getMeal(){
      const res = await fetch(API_URL)
      const data = await res.json()
      setMeal(data.meals[0])
    }
    getMeal()
  }, [])

  if(!meal) return null
  
  return (
    <div className="meal">
      <div className="meal-img">
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
      </div>
      <div className="meal-details">
        <h3 className="meal-title">{meal.strMeal}</h3>
        <p className="meal-instruction">{meal.strInstructions.substring(0, 200) + '...'}</p>
        <ul className="meal-info">
          <li>
            Category:
              <strong> {meal.strCategory}</strong>
          </li>
          <li>
            Origin:
            <strong> {meal.strArea}</strong>
          </li>
          <li></li>
        </ul>
        <button className="btn">View Recipe <i className="fas fa-arrow-alt-circle-right"/></button>
      </div>
    </div>
  )
}

export default RandomMeal
