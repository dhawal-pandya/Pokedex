import React from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  onInputChange: (inputValue: string) => void;
}

const SearchBox = ({ onInputChange }: SearchBoxProps) => {
  return (
    <input
      className='search'
      type='search'
      placeholder='Search Pokemons...'
      onChange={(e) => {
        onInputChange(e.target.value);
      }}
    />
  );
};

export default SearchBox;
