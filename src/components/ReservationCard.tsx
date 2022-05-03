import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: nanoid(),
        name: name,
        foods: [],
      })
    );
  };

  return (
    <div className="reservation-card-container" onClick={handleRemove}>
      {name}
    </div>
  );
};

export default ReservationCard;
