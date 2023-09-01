import React from 'react';
import logo from '../assets/image/Wemap.png'; 
import '../assets/css/header.css'; 
import Wemap from '../assets/wemap.svg';

const Header = () => {
  return (
   
    <header >
      <img src={Wemap} alt="Logo de l'app" className="header-logo" />
      <h1 className="header-title">Les derniers pinpoints de Wemap</h1>
    </header>
  );
};

export default Header;
