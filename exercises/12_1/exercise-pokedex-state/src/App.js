import React from 'react';
import './App.css';
import pokemons from './data';
// import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    
    this.state = {
      index: 0
    }
  }
  
  handleClick() {
    let newIndex = this.state.index + 1;
    if (newIndex >= pokemons.length) {
      newIndex = 0;
    }
    this.setState({ index: newIndex });
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <button onClick={this.handleClick}>Próximo pokémon</button>
        <Pokemon pokemon={pokemons[this.state.index]} />
        {/* <Pokedex pokemons={pokemons} /> */}
      </div>
    );
  }
}

export default App;
