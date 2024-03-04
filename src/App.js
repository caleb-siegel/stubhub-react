import './App.css';
import ShowList from './components/ShowList';
import React, { useState, useEffect } from "react";
import ShowSearch from './components/ShowSearch';
import PriceSearch from './components/PriceSearch';
import SeatAmountSearch from './components/SeatAmountSearch'
import SeatLocationSearch from './components/SeatLocationSearch'
import Nav from './nav'
import { Outlet } from 'react-router-dom';


function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/prices")
    .then(response => response.json())
    .then(data => setShows(data))
  }, []);

  const [showSearch, setShowSearch] = useState("");
  const [priceSearch, setPriceSearch] = useState("");
  const [seatAmountSearch, setSeatAmountSearch] = useState("");
  const [seatLocationSearch, setSeatLocationSearch] = useState("");

  const handleShowSearch = (event) => {
    setShowSearch(event.target.value)
  }

  const handlePriceSearch = (event) => {
    setPriceSearch(event.target.value)
  }

  const handleSeatAmountSearch = (event) => {
    setSeatAmountSearch(event.target.value)
  }

  const handleSeatLocationSearch = (event) => {
    setSeatLocationSearch(event.target.value)
  }

  const filteredShows = shows.filter(show => (show.name.toLowerCase().includes(showSearch.toLowerCase())) && ((show.price <= priceSearch) || (priceSearch == 0)) && (show.seatsAmount >= seatAmountSearch) && (show.seatLocation.toLowerCase().includes(seatLocationSearch.toLowerCase())));

  return (
    <div>
      <Nav />
      <Outlet />
      <h1>Welcome to the Broadway Community</h1>
      <h2>Here are the cheapest tickets for every show!</h2>
      <ShowSearch showSearch={showSearch} handleShowSearch={handleShowSearch}/>
      <PriceSearch priceSearch={priceSearch} handlePriceSearch={handlePriceSearch}/>
      <SeatAmountSearch seatAmountSearch={seatAmountSearch} handleSeatAmountSearch={handleSeatAmountSearch}/>
      <SeatLocationSearch seatLocationSearch={seatLocationSearch} handleSeatLocationSearch={handleSeatLocationSearch}/>
      <ShowList showData={filteredShows}/>
    </div>
  );
}

export default App;
