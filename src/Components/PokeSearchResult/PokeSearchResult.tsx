import React from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import './PokeSearchResult.css';

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}
const cap = (s: string | undefined) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className='poke-resultCard'>
      {selectedPokemon ? (
        <div>
          <img
            className='pokemon-animated-sprites'
            src={sprites?.animated || sprites?.normal}
            alt='pokemon'
          />
          <p>Name:{cap(name)}</p>
          <p>Id: {id}</p>
          <p>Weight :{weight}</p>
          <p>Height :{height}</p>
          <p>BaseExp: {base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to Pokedex!</h2>
      )}
    </div>
  );
};

export default PokeSearchResult;
