import React from 'react'
import { RandomMeal, Meal, Header } from './components'


const App = ({}) => {
  return (
    <div className="App">
      <input type="text"/>
        <Header/>
        <RandomMeal/>
        <Meal/>
        <Meal/>
      <section className="container">
        <h2>Search Results:</h2>
      </section>
    </div>
  );
}

export default App;
