import React from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

interface PokeListProps {
  searchedPokemons: PokemonSchema[];
  onPokemonClick: (pokemonName: string) => void;
}

const PokeList = ({ searchedPokemons, onPokemonClick }: PokeListProps) => {
  return (
    <div className='pokelist'>
      {searchedPokemons.map((pokemon) => {
        return (
          pokemon.name && (
            <PokeCard
              key={pokemon.id}
              name={pokemon.name}
              spriteUrl={pokemon.sprites.normal}
              onPokemonClick={onPokemonClick}
            />
          )
        );
      })}
    </div>
  );
};

export default PokeList;
