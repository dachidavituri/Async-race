import './GarageView.css'

interface Car {
    id: number;
    name: string;
    color: string;
  }
interface Garage{
    displayCars: boolean
    currentCars: Car[]
    setSelectId: React.Dispatch<React.SetStateAction<number>>;
    deleteCar: (id: number) => void
    cars: Car[]
}
function GarageView({displayCars, currentCars, setSelectId, deleteCar, cars}: Garage){
    return (
        <>
        {displayCars && (
            <>
              {currentCars?.map((car, index: number) => (
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
          </>
    )

}
export default GarageView