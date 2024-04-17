import "./WinnersView.css";
interface Winner {
  wins: number;
  time: number;
}
interface WinnerView {
    displayCars: boolean,
    winners: Winner[]
}
function WinnersView({displayCars, winners}: WinnerView) {
    return (
  <>
    {!displayCars && (
      <>
        {winners?.map((winner, index) => (
          <div key={index}>
            <h2>{winner.wins}</h2>
            <h2>{winner.time}</h2>
          </div>
        ))}
        
      </>
    )}
  </>
    );
}
export default WinnersView;
