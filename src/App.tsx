import "./App.css";
import React, { useState, useEffect } from "react";
import { useCarState } from "./FetchingInfo";

function App() {
  const {
    cars,
    winners,
    engine,
    fetchCars,
    fetchCarId,
    addCar,
    updateCar,
    deleteCar,
    fetchWinner,
    fetchWinnerId,
    createWinner,
    updateWinner,
    deleteWinner,
    getEngineMode,
    setEngineDriveMode
  } = useCarState();

  useEffect(() => {
    // fetchCars();
    // fetchCarId(1)
    // getEngineMode(1, 'started')
    // setEngineDriveMode(1, 'drive')
  }, []);
  return <div className="App"></div>;
}

export default App;
