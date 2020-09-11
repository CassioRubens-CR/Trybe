
import React, { Component } from 'react'
import pokemons from './data'
import Pokedex from './Pokedex'

class PokedexList extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Pokemons</h1>
        {pokemons.map((pokedex, index) => {
          return <Pokedex
            key={index}
            name={pokedex.name}
            type={pokedex.type}
            value={pokedex.averageWeight.value + pokedex.averageWeight.measurementUnit}
            image={pokedex.image}
          />
        })}
      </div>
    )
  }
}

export default PokedexList