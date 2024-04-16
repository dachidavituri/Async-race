import "./CreateUpdate.css";
interface CreateUpdate {
  carValue: string;
  colorValue: string;
  carUpValue: string;
  colorUpValue: string;
  selectId: number;
  fetchCars: () => void;
  addCar: (name: string, color: string) => void;
  updateCar: (
    id: number,
    car: { name: string; color: string }
  ) => Promise<void>;
  setColorUpValue: React.Dispatch<React.SetStateAction<string>>;
  setCarUpValue: React.Dispatch<React.SetStateAction<string>>;
  setCarValue: React.Dispatch<React.SetStateAction<string>>;
  setColorValue: React.Dispatch<React.SetStateAction<string>>;
}
function CreateUpdate({
  carValue,
  colorValue,
  fetchCars,
  addCar,
  updateCar,
  carUpValue,
  colorUpValue,
  selectId,
  setCarUpValue,
  setColorUpValue,
  setCarValue,
  setColorValue,
}: CreateUpdate) {
  const getRandomColor = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "black",
      "white",
      "orange",
      "purple",
      "pink",
      "cyan",
      "magenta",
      "brown",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const getRandomCarName = () => {
    const carNames = [
      "Teslam Model x",
      "Ford Fusion",
      "Chevrolet Camaro",
      "Toyota GT86",
      "Honda Civic",
      "Nissan R34",
      "BMW M5",
      "Audi RS6",
      "Mercedes G-classs",
      "Volkswagen Golf",
      "Infiniti Q50",
      "BMW 328",
    ];
    return carNames[Math.floor(Math.random() * carNames.length)];
  };
  const generateRandomCars = async () => {
    for (let i = 0; i < 100; i++) {
      const randomCar = {
        name: getRandomCarName(),
        color: getRandomColor(),
      };
      await addCar(randomCar.name, randomCar.color);
    }
    fetchCars();
  };
  return (
    <div className="cr-up-cont">
      <div>
        <input
          type="text"
          placeholder="TYPE CAR BRAND"
          value={carValue}
          onChange={(e) => setCarValue(e.target.value)}
        />
        <input
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <button onClick={() => addCar(carValue, colorValue)}>create</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="TYPE CAR BRAND"
          value={carUpValue}
          onChange={(e) => setCarUpValue(e.target.value)}
        />
        <input
          type="color"
          value={colorUpValue}
          onChange={(e) => setColorUpValue(e.target.value)}
        />
        <button
          onClick={() =>
            updateCar(selectId, {
              name: carUpValue,
              color: colorUpValue,
            }).then(() => fetchCars())
          }
        >
          update
        </button>
      </div>
      <button onClick={generateRandomCars} className="random-car">
        generate randomCars
      </button>
    </div>
  );
}
export default CreateUpdate;