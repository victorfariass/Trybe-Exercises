import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
