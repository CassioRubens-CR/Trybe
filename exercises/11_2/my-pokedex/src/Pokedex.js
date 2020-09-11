import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pokedex extends Component {
  render() {
    const { name, type, value, image } = this.props
    
    return (
      <div>
        <div className="listPokemons">
          {`Nome: ${name}`}<br />
          {`Tipo: ${type}`}<br />
          {`Peso: ${value}`}<br />
          <img src={image}></img>
        </div>
        <br />
      </div>
    )
  }
}

Pokedex.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  image: PropTypes.string,
}

export default Pokedex