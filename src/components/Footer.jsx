import React from 'react';

const Footer = ({ page, totalPages, handlePrevPage, handleNextPage, isLastPage }) => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      <button onClick={handlePrevPage} style={{ 
        backgroundColor: '#007BFF', 
        color: 'white', 
        padding: '8px 16px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer',
        marginRight: '10px',
        opacity: page === 1 ? 0.5 : 1,
        pointerEvents: page === 1 ? 'none' : 'auto'
      }}>&lt;</button>
      <p>Page {page}</p>
      <button onClick={handleNextPage} style={{ 
        backgroundColor: '#007BFF', 
        color: 'white', 
        padding: '8px 16px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer',
        opacity: isLastPage ? 0.5 : 1,
        pointerEvents: isLastPage ? 'none' : 'auto'
      }}>&gt;</button>
    </div>
  );
};

export default Footer;
