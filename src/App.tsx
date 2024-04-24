import "./App.css";
import React, { useState, useEffect } from "react";
import { useCarState } from "./FetchingInfo";
import raceImg from "./images/FreeVector-Race-Car-And-Flag.jpg";
import Pagination from "./Components/PaginationGarage/Pagination";
import CreateUpdate from "./Components/CreateUpdate/CreateUpdate";
import GarageView from "./Components/garageView/GarageView";
import WinnersView from "./Components/WinnersView/WinnersView";
import roadImage from "./images/Screenshot 2024-04-17 163901.png";
import WinnerPagination from "./Components/WinnerPagination/WinnerPagination";

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
    setEngineDriveMode,
  } = useCarState();

  useEffect(() => {
    fetchCars();
  }, []);
  const handleFetchCars = () => {
    setDisplayCars(true);
    fetchCars();
  };
  const handleFetchWinners = () => {
    setDisplayCars(false);
    fetchWinner();
  };
  const paginateNext = () => {
    if (currentPage == totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginatePrev = () => {
    if (currentPage == 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const paginateNextW = () => {
    if (currentPageW == totalPageWinner) {
      setCurrentPageW(1);
    } else {
      setCurrentPageW(currentPageW + 1);
    }
  };
  const paginatePrevW = () => {
    if (currentPageW == 1) {
      setCurrentPageW(totalPageWinner);
    } else {
      setCurrentPageW(currentPageW - 1);
    }
  };
  const [currentPageW, setCurrentPageW] = useState(1);
  const winnersPerPage = 4;
  const indexOfLastWinner = currentPageW * winnersPerPage;
  const indexOfFirstWinner = indexOfLastWinner - winnersPerPage;
  const newWinners = winners.slice(1);
  const currentWinners = newWinners.slice(
    indexOfFirstWinner,
    indexOfLastWinner
  );
  const totalPageWinner = Math.ceil(winners.length / winnersPerPage);

  const [displayCars, setDisplayCars] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 7;
  const totalCars = cars?.length || 0;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars?.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const [carValue, setCarValue] = useState<string>("");
  const [colorValue, setColorValue] = useState<string>("");
  const [carUpValue, setCarUpValue] = useState<string>("");
  const [colorUpValue, setColorUpValue] = useState<string>("");
  const [selectId, setSelectId] = useState<number>(0);

  return (
    <div className="App">
      <div className="race-container">
        <div className="btn-cont">
          <button className="garage-btn btn" onClick={handleFetchCars}>
            garage
          </button>
          <button className="winners-btn btn" onClick={handleFetchWinners}>
            winners
          </button>
        </div>
        <img src={raceImg} className="race-img" />
      </div>
      <CreateUpdate
        carValue={carValue}
        colorValue={colorValue}
        carUpValue={carUpValue}
        colorUpValue={colorUpValue}
        selectId={selectId}
        fetchCars={fetchCars}
        addCar={addCar}
        updateCar={updateCar}
        setCarUpValue={setCarUpValue}
        setColorUpValue={setColorUpValue}
        setCarValue={setCarValue}
        setColorValue={setColorValue}
      />
      <div className="g-w-views">
        <img src={roadImage} className="road-img" />
        <GarageView
          displayCars={displayCars}
          currentCars={currentCars}
          setSelectId={setSelectId}
          deleteCar={deleteCar}
          cars={cars}
        />
        <WinnersView
          displayCars={displayCars}
          currentWinners={currentWinners}
          cars={cars}
        />
        <img src={roadImage} className="road-img" />
      </div>
      <h1>{displayCars && `GARAGE (${cars?.length})`}</h1>
      <h1>{!displayCars && `WINNERS (${winners?.length - 1})`}</h1>
      {displayCars && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalCars / carsPerPage)}
          paginateNext={paginateNext}
          paginatePrev={paginatePrev}
        />
      )}
      {!displayCars && (
        <WinnerPagination
          currentPage={currentPageW}
          paginateNext={paginateNextW}
          paginatePrev={paginatePrevW}
          totalPages={totalPageWinner}
        />
      )}
    </div>
  );
}
export default App;
