import React, { useState } from 'react';

  const SearchBar = ({ onSearch }) => {

    return (
      <div>
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Rechercher..."
          className="search-input" // Ajoutez une classe pour cibler le style du input
        />
      </div>
    );
  };

export default SearchBar;