import "./WinnersModal.css";
interface WinnerModalProps {
  carName: string;
  time: number;
  onClose: () => void;
}
function WinnerModal({ carName, time, onClose }: WinnerModalProps) {
  return (
    <div className="winner-modal" onClick={onClose}>
      <div className="winner-cont">
        <h2>WINNER: </h2>
        <h2>{carName}</h2>
        <h2>TIME: {time}</h2>
      </div>
    </div>
  );
}
export default WinnerModal;
