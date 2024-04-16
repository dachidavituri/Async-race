import "./App.css";
import React, { useState, useEffect } from "react";
import { useCarState } from "./FetchingInfo";
import raceImg from "./images/FreeVector-Race-Car-And-Flag.jpg";
import Pagination from "./Components/PaginationGarage/Pagination";
import CreateUpdate from "./Components/CreateUpdate/CreateUpdate";
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
          <button className="garage-btn" onClick={handleFetchCars}>
            garage
          </button>
          <button className="winners-btn" onClick={handleFetchWinners}>
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
        {displayCars && (
          <>
            {currentCars?.map((car, index) => (
              <div key={index}>
                <button onClick={() => setSelectId(car.id)}>select</button>
                <button onClick={() => deleteCar(car.id)}>remove</button>
                <h2>{car.name}</h2>
                <h2>{car.color}</h2>
              </div>
            ))}
            <h1>{cars != null && `GARAGE (${cars?.length})`}</h1>
          </>
        )}
        {!displayCars && (
          <>
            {winners?.map((winner, index) => (
              <div key={index}>
                <h2>{winner.wins}</h2>
                <h2>{winner.time}</h2>
              </div>
            ))}
            <h1>{winners != null && `WINNERS (${winners?.length})`}</h1>
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalCars / carsPerPage)}
        paginateNext={paginateNext}
        paginatePrev={paginatePrev}
      />
    </div>
  );
}
// create winner pagination car svg and make components
export default App;
