import "./WinnersView.css";
import { useEffect, useState } from "react";
interface Winner {
  wins: number;
  time: number;
  carId: number;
}
interface Car {
  id: number;
  name: string;
  color: string;
}
interface WinnerView {
  displayCars: boolean;
  cars: Car[];
  currentWinners: Winner[];
}
function WinnersView({ displayCars, cars, currentWinners }: WinnerView) {
  return (
    <>
      {!displayCars && (
        <>
          {currentWinners?.map((winner, index) => (
            <div key={index}>
              {index > 0 && (
                <>
                  {" "}
                  <h2>car id is{cars[winner.carId - 1]?.name} </h2>
                  <h2>car id is{cars[winner.carId - 1]?.color} </h2>
                  <h2>{winner.wins}</h2>
                  <h2>{winner.time}</h2>{" "}
                </>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default WinnersView;
