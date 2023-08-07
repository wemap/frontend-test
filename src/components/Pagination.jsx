import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  console.log('totalItems', totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

 const previous = () => { 
  console.log('currentPage', currentPage);
    if (currentPage > 0) {
      
      onPageChange(currentPage - 1);
    }
  }
  const next = () => {  
    console.log('currentPage', currentPage);
    if (currentPage < totalPages - 1) {
      
      onPageChange(currentPage + 1);
   
    }
  }
  return (
   
  <div className="pagination">
    <IconButton  className="Pagination" onClick={previous} color="primary" aria-label="Précédent">
      <ArrowBackIosIcon />
    </IconButton>
      Page {currentPage}
    <IconButton  className="Pagination" onClick={next} color="primary" aria-label="Suivant">
      <ArrowForwardIosIcon />
    </IconButton>
  </div>

  );

};

export default Pagination;    

