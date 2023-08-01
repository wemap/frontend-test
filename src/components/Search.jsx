import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Appeler la fonction onSearch à chaque changement de valeur du champ de recherche
  };

  return (
    <div>
      <input
        type="text"
        placeholder="rechercher ...."
        value={query}
        onChange={handleInputChange}
        style={{  width: '300px', 
        height: '40px', 
        padding: '8px', 
        marginRight: '20px', 
        fontSize: '16px', 
        borderRadius: '8px', 
        border: '1px solid #ccc', 
    }}
      />
    </div>
  );
};

export default Search;
