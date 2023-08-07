import React, { useState, useEffect } from 'react';
import './App.css'
import fetchWemapData from './api/wemapApi';
import ContentList from './components/ContentList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './index.css';


function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetchWemapData(searchText, currentPage, ITEMS_PER_PAGE )
      .then(data => setData(data))
      .then((data) => console.log('data', data))
      .catch(error => console.error('Erreur lors de la récupération des données', error));
  }, [searchText, currentPage] ); 

  const handleSearchChange = (event) => {
    setSearchText(event);
    setCurrentPage(0); // Reset la pagination lors d'une nouvelle recherche
  };

  /* const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };*/

  return (
    <div className="App">
      <div className="header">
        <div className="logo-container">
          <img src="https://media.glassdoor.com/sqll/6359364/wemap-squarelogo-1639495680869.png" alt="logo" />
        </div>
        <div className="text-container">
          <h2>Les derniers pinpoints de Wemap</h2>
        </div>
     </div>
      <SearchBar value={searchText} onSearch={handleSearchChange} />
      <ContentList content={data.results} />
      {data.count > 10 && <Pagination onPageChange={(page) => {setCurrentPage(page)}} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} totalItems={data.count}/> }

    </div>
  )
}

export default App
