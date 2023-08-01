import React from 'react';
import logo from '../../public/image/Wemap.png'; 

const Header = () => {
  return (
    <header style={{ position: 'relative', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo de l'app" style={{ width: '100px', height: '100px', position: 'absolute', top: 0, left: 0, marginLeft: '1px' }} />
      <h1 style={{ fontWeight: 'bold', marginLeft: '120px' }}>Les derniers pinpoints de Wemap</h1>
    </header>
  );
};

export default Header;
