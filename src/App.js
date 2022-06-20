import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Data from './Data'
import './App.css';

export default function App() {
  const listOfCards = Data.map((CardsData) => {
    return <Cards items={CardsData} />
  })

  return (
    <div className="main">
      <Navbar />
      <div className="list-cards">
        {listOfCards}
      </div>
    </div>
  )
}
