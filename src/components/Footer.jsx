import React from 'react';
import '../assets/css/Liste.css'; 

const Footer = ({ page, totalPages, handlePrecedentPage, handleNextPage, isLastPage }) => {
  return (
    <div className="footer-container">
      <button
        onClick={handlePrecedentPage}
        className={`footer-button ${page === 1 ? 'disabled' : ''}`}
      >
        &lt;
      </button>
      <p className="footer-page-number">Page {page}</p>
      <button
        onClick={handleNextPage}
        className={`footer-button ${isLastPage ? 'disabled' : ''}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Footer;
