import React from 'react';
import logo from '../../public/image/Wemap.png'; 

const Header = () => {
  return (
    <header style={{marginBottom: '30px', display: 'flex',alignItems: 'center' }}>
    <img src={logo} alt="Logo de l'app" style={{ width: '100px', height: '100px', marginLeft: '10px' }} />   <h1 style={{ fontWeight: 'bold' }}>Les derniers pinpoints de Wemap</h1>
     
    </header>
  );
};

export default Header;
