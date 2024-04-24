import "./WinnersView.css";
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
    <div className="winners-container">
      {!displayCars && (
        <table className="winners-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Car Name</th>
              <th>Car Color</th>
              <th>Wins</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {currentWinners?.map((winner, index) => (
              <tr key={index}>
                <td>{winner.carId}</td>
                <td>{cars[winner.carId - 1]?.name}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    id="car"
                    width="50"
                    height="50"
                  >
                    <path
                      d="m93.6 49.1-17.2-5.8-8.5-15.6c-2.3-4.2-6.7-6.8-11.4-6.8h-31c-4.8 0-9.1 2.6-11.4 6.8L5.2 44v.1c-.1.1-.1.2-.1.3v24.5c0 1.1.9 2 2 2h8.2c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8h30.4c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8H93c1.1 0 2-.9 2-2V51c0-.9-.5-1.6-1.4-1.9zM38 25h18.5c3.3 0 6.3 1.8 7.9 4.7L71.6 43H38V25zm-20.4 4.7c1.6-2.9 4.6-4.7 7.9-4.7H34v18H10.4l7.2-13.3zM15.2 67H9v-4h8c-.9 1.2-1.5 2.5-1.8 4zm9.8 8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm50 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16-8h-6.2c-.9-4.6-5-8-9.8-8s-8.9 3.4-9.8 8H34.8c-.9-4.6-5-8-9.8-8H9V47h65.7L91 52.4V67z"
                      fill={cars[winner.carId - 1]?.color}
                    ></path>
                  </svg>
                </td>
                <td>{winner.wins}</td>
                <td>{winner.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default WinnersView;
