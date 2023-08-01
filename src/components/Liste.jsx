import React, { useEffect, useState } from 'react';
import { getPinpoints } from '../service/api'; // Import de la fonction pour récupérer les pinpoints depuis le service API
import ImageRemplace from '../assets/image/wemap2.png'; // Import de l'image de remplacement
import Footer from '../components/Footer'; // Import du composant Footer
import Search from '../components/Search'; // Import du composant Search
import '../assets/css/Liste.css'; // Import du fichier CSS Liste.css

const Liste = () => {
  // State pour stocker les données des pinpoints
  const [pinpoints, setPinpoints] = useState([]);
  // State pour gérer la pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  // State pour gérer la recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Effet pour récupérer le nombre total de pages
  useEffect(() => {
    getPinpoints('', 0, 1)
      .then((data) => {
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((error) => console.error(error));
  }, [limit]);

  // Fonction pour récupérer les pinpoints en fonction de la recherche, de la pagination, et de la limite d'affichage
  const fetchPinpoints = (query, offset, limit) => {
    getPinpoints(query, offset, limit)
      .then((data) => {
        setPinpoints(data);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((error) => console.error(error));
  };

  // Effet pour mettre à jour les pinpoints en fonction de la recherche, de la pagination et de la limite d'affichage
  useEffect(() => {
    const offset = (page - 1) * limit;
    fetchPinpoints(searchQuery, offset, limit);
  }, [page, limit, searchQuery]);

  // Fonction pour rediriger vers la carte du pinpoint sélectionné
  const handleViewOnMap = (pinpointId) => {
    window.location.href = `https://livemap.getwemap.com/#/pinpoints/${pinpointId}`;
  };

  // Fonction pour passer à la page précédente
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Fonction pour passer à la page suivante
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {/* Composant Search pour effectuer des recherches avec une recherche automatique*/}
      <Search
        onSearch={(query) => setSearchQuery(query)}
        placeholder="Rechercher...."
      />
      <ul className="liste-container">
        {/* Mapping des pinpoints pour les afficher sous forme de liste */}
        {pinpoints.map((pinpoint) => (
          <li key={pinpoint.id} className="liste-item">
            <div style={{ flex: 1 }}>
              {/* Affichage de l'image du pinpoint ou de l'image de remplacement si l'image n'existe pas */}
              <div
                className="pinpoint-image"
                style={{
                  backgroundImage: `url(${pinpoint.media_url || ImageRemplace})`,
                }}
              >
                {!pinpoint.media_url && (
                  <img src={ImageRemplace} alt="Image de remplacement" />
                )}
              </div>

            </div>
            <div style={{ flex: 6, textAlign: 'left' }}>
              {/* Affichage du nom et de l'adresse du pinpoint */}
              <h2>{pinpoint.name}</h2>
              <p>{pinpoint.address}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'right', marginLeft: '90px' }}>
              {/* Bouton pour voir le pinpoint sur la carte */}
              <button
                onClick={() => handleViewOnMap(pinpoint.id)}
                className="button-view-map"
              >
                Voir sur la carte
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {/* Composant Footer pour gérer la pagination */}
      <Footer
        page={page}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        isLastPage={pinpoints.length < limit}
      />
    </div>
  );
};

export default Liste;
