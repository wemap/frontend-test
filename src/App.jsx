import './App.css'
import React from 'react';
import Liste from '../src/components/Liste';
import Header from '../src/components/header';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Liste/>
      <Footer/>
    </div>
  );
};

export default App;

