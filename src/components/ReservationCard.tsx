import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeReservation(index));
  };
  return (
    <div className="reservation-card-container" onClick={handleRemove}>
      {name}
    </div>
  );
};

export default ReservationCard;
