import React, { useEffect, useState } from 'react';
import { getPinpoints } from '../service/api'; 
import ImageRemplace from '../../public/image/wemap1.jpg'; 
import Footer from '../components/Footer';
import Search from '../components/Search';
import '../../public/css/Liste.css'; 

const Liste = () => {
  const [pinpoints, setPinpoints] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getPinpoints('', 0, 1)
      .then((data) => {
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((error) => console.error(error));
  }, [limit]);

  const fetchPinpoints = (query, offset, limit) => {
    getPinpoints(query, offset, limit)
      .then((data) => {
        setPinpoints(data);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const offset = (page - 1) * limit;
    fetchPinpoints(searchQuery, offset, limit);
  }, [page, limit, searchQuery]);

  const handleViewOnMap = (pinpointId) => {
    window.location.href = `https://livemap.getwemap.com/#/pinpoints/${pinpointId}`;
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Search
        onSearch={(query) => setSearchQuery(query)}
        placeholder="Rechercher...."
      />
      <ul className="liste-container">
        {pinpoints.map((pinpoint) => (
          <li key={pinpoint.id} className="liste-item">
            <div style={{ flex: 1 }}>
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
            <div style={{ flex: 6, marginLeft: '20px', textAlign: 'left' }}>
              <h2>{pinpoint.name}</h2>
              <p>{pinpoint.address}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'right', marginLeft: '90px' }}>
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
