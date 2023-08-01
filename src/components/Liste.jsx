import React, { useEffect, useState } from 'react';
import { getPinpoints } from '../service/api'; 
import markerIcon from '../../public/image/marker.png'; 
import Footer from '../components/Footer';
import Search from '../components/Search';

const Liste = () => {
  const [pinpoints, setPinpoints] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the total count of pinpoints without any filtering
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
        placeholder="Rechercher..."
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pinpoints.map((pinpoint) => (
          <li key={pinpoint.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ flex:1 }}>
              <div style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundImage: `url(${markerIcon})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <img src={pinpoint.media_url} alt={pinpoint.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ flex: 6, marginLeft: '20px', textAlign: 'left' }}>
              <h2>{pinpoint.name}</h2>
              <p>{pinpoint.address}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'right', marginLeft: '90px' }}>
              <button onClick={() => handleViewOnMap(pinpoint.id)} style={{ 
                backgroundColor: '#FAFAFA',
                color: 'blue',
                padding: '10px 3px', 
                border: 'none',
                borderRadius: '3px', 
                cursor: 'pointer',
                justifyContent: 'center',
                fontSize: '20px',
              }}  >Voir sur la carte</button>
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
