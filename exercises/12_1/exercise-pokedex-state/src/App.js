import React from 'react';
import './App.css';
import pokemons from './data';
// import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleClickFire = this.handleClickFire.bind(this)
    
    this.state = {
      index: 0,
      // type: ''
    }
  }
  
  handleClick() {
    let newIndex = this.state.index + 1;
    if (newIndex >= pokemons.length) {
      newIndex = 0;
    }
    this.setState({ index: newIndex });
  }

  handleClickFire() {
    let newIndex = pokemons.findIndex((poke, i) => poke.type === 'Fire' && i > this.state.index);
    if(newIndex < 0) {
      newIndex = pokemons.findIndex(poke => poke.type === 'Fire')
    }
    this.setState({ index: newIndex });
    // let typePokemon = this.state.type;
    // this.setState({typePokemon});
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div>
          <button onClick={this.handleClick}>Próximo pokémon</button>
          <Pokemon pokemon={pokemons[this.state.index]} />
          {/* <div className='buttonFire'>
          {pokemons.filter(poke => poke.type === this.state.type)
          .map(pokeFire => pokeFire.type === 'Fire')
          } */}
          <button onClick={this.handleClickFire}>Próximo pokémon</button>

          <button onClick={this.handleClick}>Próximo pokémon</button>
        
          <button onClick={this.handleClick}>Próximo pokémon</button>
        </div>
        {/* <Pokedex pokemons={pokemons} /> */}
      </div>
    );
  }
}

export default App;
