import React from 'react'
import { RandomMeal } from './components'


const App = () => {
  return (
    <div className="App">
      <h1>My Recipes</h1>
      <div className="container">
        <h2>Featured Meal</h2>
        <RandomMeal/>
      </div>
    </div>
  );
}

export default App;
