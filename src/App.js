import React from 'react';
import Header from './components/Header';
import MainRoute from './routes/MainRoute';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoute/>
    </>
  );
}

export default App;
