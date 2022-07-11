import React from 'react';
import './PokeCard.css';

interface PokeCardProps {
  spriteUrl?: string;
  name: string;
  onPokemonClick: (pokemonName: string) => void;
}
const cap = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const PokeCard = ({ spriteUrl, name, onPokemonClick }: PokeCardProps) => {
  return (
    <div
      onClick={() => {
        onPokemonClick(name);
      }}
      className='pokecard'
    >
      <img src={spriteUrl} alt='pokemon' className='pokemon-sprite' />
      <p>{cap(name)}</p>
    </div>
  );
};

export default PokeCard;
