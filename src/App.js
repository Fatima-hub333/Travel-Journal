/* eslint-disable react/jsx-key */
import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Data from './data';
import './App.css';

export default function App() {
  const listOfCards = Data.map((CardsData) => <Cards items={CardsData} />);

  return (
    <div className="main">
      <Navbar />
      <div className="list-cards">
        {listOfCards}
      </div>
    </div>
  );
}
