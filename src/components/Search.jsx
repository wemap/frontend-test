import React, { useState } from 'react';
import '../assets/css/Search.css'; // Import du fichier CSS Search.css pour le style du composant

const Search = ({ onSearch }) => {
  // State pour stocker la valeur de la recherche
  const [requete, setrequete] = useState('');

  // Fonction pour gérer le changement de la valeur de recherche
  const handleInputChange = (event) => {
    const newrequete = event.target.value;
    setrequete(newrequete);
    onSearch(newrequete); // Appel de la fonction onSearch passée en tant que prop avec la nouvelle valeur de recherche
  };

  return (
    <div>
      {/* Input de type texte pour la saisie de la recherche */}
      <input
        type="text"
        placeholder="Rechercher ...."
        value={requete}
        onChange={handleInputChange} // Appel de la fonction handleInputChange à chaque changement de valeur
        className="search-input" // Classe CSS pour le style du composant
      />
    </div>
  );
};

export default Search;
