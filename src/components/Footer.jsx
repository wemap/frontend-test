import React from 'react';
import '../../public/css/Liste.css'; 

const Footer = ({ page, totalPages, handlePrevPage, handleNextPage, isLastPage }) => {
  return (
    <div className="footer-container">
      <button
        onClick={handlePrevPage}
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
