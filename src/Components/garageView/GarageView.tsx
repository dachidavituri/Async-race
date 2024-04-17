import "./GarageView.css";

interface Car {
  id: number;
  name: string;
  color: string;
}
interface Garage {
  displayCars: boolean;
  currentCars: Car[];
  setSelectId: React.Dispatch<React.SetStateAction<number>>;
  deleteCar: (id: number) => void;
  cars: Car[];
}
function GarageView({
  displayCars,
  currentCars,
  setSelectId,
  deleteCar,
  cars,
}: Garage) {
  return (
    <>
      {displayCars && (
        <>
          {currentCars?.map((car, index: number) => (
            <div key={index} className="garage-container">
              <div className="btns">
                <button onClick={() => setSelectId(car.id)} className="sel-btn g-btn">
                  select
                </button>
                <button
                  onClick={() => deleteCar(car.id)}
                  className="remove-btn g-btn"
                >
                  remove
                </button>
              </div>
              <div className="btns">
                <button className="start g-btn">A</button>
                <button className="stop g-btn">B</button>
              </div>
              <div>
                <h2>{car.name}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  id="car"
                  width="50"
                  height="50"
                >
                  <path
                    d="m93.6 49.1-17.2-5.8-8.5-15.6c-2.3-4.2-6.7-6.8-11.4-6.8h-31c-4.8 0-9.1 2.6-11.4 6.8L5.2 44v.1c-.1.1-.1.2-.1.3v24.5c0 1.1.9 2 2 2h8.2c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8h30.4c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8H93c1.1 0 2-.9 2-2V51c0-.9-.5-1.6-1.4-1.9zM38 25h18.5c3.3 0 6.3 1.8 7.9 4.7L71.6 43H38V25zm-20.4 4.7c1.6-2.9 4.6-4.7 7.9-4.7H34v18H10.4l7.2-13.3zM15.2 67H9v-4h8c-.9 1.2-1.5 2.5-1.8 4zm9.8 8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm50 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16-8h-6.2c-.9-4.6-5-8-9.8-8s-8.9 3.4-9.8 8H34.8c-.9-4.6-5-8-9.8-8H9V47h65.7L91 52.4V67z"
                    fill={car.color}
                  ></path>
                </svg>
              </div>
              <div className="road">
                <div>start</div>
                <div>stop</div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default GarageView;
