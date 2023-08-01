import React from 'react';
import logo from '../assets/image/Wemap.png'; 
import '../assets/css/header.css'; 

const Header = () => {
  return (
   
    <header >
      <img src={logo} alt="Logo de l'app" className="header-logo" />
      <h1 className="header-title">Les derniers pinpoints de Wemap</h1>
    </header>
  );
};

export default Header;
