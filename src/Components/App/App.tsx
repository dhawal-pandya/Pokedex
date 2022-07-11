import React from 'react';
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from '../../Types/PokemonSchema';
import { pokemonData } from '../Data/pokemonData';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';

interface AppState {
  searchField: string;
  allPokemon: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchField: '',
    allPokemon: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log(`Exception while parsing the sprites : ${e}`);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });
    return patchedPokemons;
  };

  componentDidMount() {
    //patch the pokemon stirngs

    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);
    //update the state
    this.setState({
      allPokemon: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (inputValue: string) => {
    const { allPokemon } = this.state;
    const searchedPokemons = allPokemon.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    this.setState({
      searchField: inputValue,
      searchedPokemons,
    });
  };

  handleClick = (pokemonName: string) => {
    const { allPokemon } = this.state;
    //here all can be replaced with searched pokemon
    const selectedPokemon = allPokemon.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );
    this.setState({ selectedPokemon });
  };

  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex
          searchedPokemons={this.state.searchedPokemons}
          selectedPokemon={this.state.selectedPokemon}
          onPokemonClick={this.handleClick}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
